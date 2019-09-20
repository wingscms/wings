import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SchemaForm, Amount, Loading, Button as _Button } from '@wingscms/crane';
import deepmerge from 'deepmerge';
import { withWings } from '../../ctx/Wings';

const patchSchema = (schema, fieldDefinitions) =>
  deepmerge(schema, { properties: fieldDefinitions });

const SIGNUP_QUERY = `
  query ($selector: SignupSelectorInput) {
    campaign: signup(selector: $selector) {
      id
      title
      submissionSchema
      settings {
        legal {
          terms {
            url
          }
          privacyPolicy {
            url
          }
        }
      }
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const SIGNUP_MUTATION = `
  mutation SubmitSignup($input: SubmitSignupInput!) {
    submitSignup(input: $input) {
      id
    }
  }
`;

const PETITION_QUERY = `
  query ($id: String!) {
    campaign: petition(id: $id) {
      id
      title
      submissionSchema
      settings {
        legal {
          terms {
            url
          }
          privacyPolicy {
            url
          }
        }
      }
      signatureCount
      signatureGoal
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const PETITION_MUTATION = `
  mutation PetitionSignUp($id: String!, $input: SignPetitionInput!) {
    signPetition(id: $id, input: $input) {
      id
    }
  }
`;

const EVENT_QUERY = `
  query ($id: String!) {
    campaign: event(id: $id) {
      id
      title
      submissionSchema
      settings {
        legal {
          terms {
            url
          }
          privacyPolicy {
            url
          }
        }
      }
      schedule {
        start
        end
      }
      location {
        name
        street
        city
        zip
        country
      }
      fee {
        amount
        currencyCode
      }
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const EVENT_MUTATION = `
  mutation EventSignUp($id: String!, $input: EventSignUpInput!) {
    signUpForEvent(id: $id, input: $input) {
      id
    }
  }
`;

const FUNDRAISER_QUERY = `
  query ($id: String) {
    campaign: fundraiser(id: $id) {
      id
      title
      submissionSchema
      settings {
        legal {
          terms {
            url
          }
          privacyPolicy {
            url
          }
        }
      }
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const FUNDRAISER_MUTATION = `
  mutation Donate($id: String, $input: DonateInput!) {
    donation: donate(id: $id, input: $input) {
      id
      order {
        id
        paymentUrl
      }
    }
  }
`;
const Button = styled(_Button)`
  background-color: #000;
  color: #fff;
  margin-top: 40px;
  width: auto;
  &:after {
    display: none;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

const FIELDS = {
  EMAIL: 'email',
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  NEWSLETTER: 'newsletter',
  PRIVACY: 'privacyConsent',
  TERMS: 'terms',
};

const FIELD_COPY_MAPPING = {
  [FIELDS.EMAIL]: 'emailFieldLabel',
  [FIELDS.FIRSTNAME]: 'firstNameFieldLabel',
  [FIELDS.LASTNAME]: 'lastNameFieldLabel',
  [FIELDS.NEWSLETTER]: 'newsletterFieldLabel',
  [FIELDS.PRIVACY]: 'privacyConsentFieldLabel',
  [FIELDS.TERMS]: 'termsFieldLabel',
};

const DEFAULT_COPY = {
  submitText: 'Submit',
  eventSubmitText: 'Attend',
  fundraiserSubmitText: 'Donate',
  signupSubmitText: 'Submit',
  petitionSubmitText: 'Sign',
  emailFieldLabel: 'Email address',
  firstNameFieldLabel: 'First name',
  lastNameFieldLabel: 'Last name',
  newsletterFieldLabel: 'Stay up to date',
  termsFieldLabel: 'Agree to our terms & conditions',
  privacyConsentFieldLabel: 'Agree to our privacy policy',
  campaignConfirmTitle: 'We’re almost there!',
  campaignConfirmText:
    'We have sent you an email with a confirmation link to make sure all signatures are genuine. If you follow that link, your signature will count. Thanks!',
  campaignLoadingText: 'loading',
  campaignErrorTitle: 'Oops!',
  campaignErrorText:
    'Something went wrong with the submitting the form. Try again or report the issue to us.',
};

class CampaignForm extends Component {
  constructor(props) {
    super(props);
    this.confirmedContainerRef = React.createRef();
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['signup', 'petition', 'event', 'fundraiser']).isRequired,
    onSubmit: PropTypes.func,
    processSchema: PropTypes.func,
    processSubmission: PropTypes.func,
    onLoad: PropTypes.func,
    disabledFields: PropTypes.array,
    schemaFormProps: PropTypes.object,
    nodeFragment: PropTypes.string,
    campaignFragment: PropTypes.string,
    node: PropTypes.shape({ submissionSchema: PropTypes.string }),
    copy: PropTypes.object,
  };
  static defaultProps = {
    onSubmit: null,
    processSchema: s => s,
    processSubmission: s => s,
    onLoad: v => console.log('onLoad', v),
    disabledFields: [],
    schemaFormProps: {},
    nodeFragment: `
      fragment NodeFields on Node {
        id
      }
    `,
    campaignFragment: `  
      fragment CampaignFields on Campaign {
        id
      }
    `,
    node: {},
    copy: {},
  };

  state = {
    campaign: null,
    fetching: false,
    formSchema: null,
    amount: 500,
    stage: 'form',
  };

  getCopy() {
    return { ...DEFAULT_COPY, ...this.props.copy, ...this.props.schemaCopy };
  }

  componentDidMount() {
    this.maybeFetch();
  }

  componentDidUpdate() {
    this.maybeFetch();
  }

  maybeEmitOnLoad = () => {
    const { campaign } = this.state;
    if (campaign) this.props.onLoad(campaign);
  };

  query = () => {
    switch (this.props.type) {
      case 'signup':
        return SIGNUP_QUERY;
      case 'petition':
        return PETITION_QUERY;
      case 'event':
        return EVENT_QUERY;
      case 'fundraiser':
        return FUNDRAISER_QUERY;
      default:
        return null;
    }
  };

  mutation = () => {
    switch (this.props.type) {
      case 'signup':
        return SIGNUP_MUTATION;
      case 'petition':
        return PETITION_MUTATION;
      case 'event':
        return EVENT_MUTATION;
      case 'fundraiser':
        return FUNDRAISER_MUTATION;
      default:
        return null;
    }
  };

  getFormSchema() {
    const schema =
      this.props.formSchema ||
      (this.props.node.submissionSchema && JSON.parse(this.props.node.submissionSchema)) ||
      this.state.formSchema;
    return schema ? this.processSchema(schema) : schema;
  }

  _overrideSchemaCopy(schema) {
    const fields = Object.values(FIELDS).filter(
      f => Object.keys(schema.properties).indexOf(f) > -1,
    );
    const copy = this.getCopy();
    const fieldDefs = fields.reduce(
      (defs, field) => ({
        ...defs,
        [field]: { title: copy[FIELD_COPY_MAPPING[field]] },
      }),
      {},
    );
    return patchSchema(schema, fieldDefs);
  }

  processSchema = (s) => {
    const { disabledFields } = this.props;
    const schema = { ...s, properties: { ...s.properties } };
    disabledFields.forEach((field) => {
      delete schema.properties[field];
    });
    schema.required = schema.required.filter(f => disabledFields.indexOf(f) < 0);

    return this.props.processSchema(this._overrideSchemaCopy(schema), this._getHookContext());
  };

  processSubmission = (sub) => {
    const { disabledFields } = this.props;
    const submission = { ...sub };
    disabledFields.forEach((field) => {
      submission[field] = true;
    });
    return this.props.processSubmission(submission, this._getHookContext());
  };

  getSubmitText() {
    const { type, submitText = '' } = this.props;
    const {
      signupSubmitText,
      eventSubmitText,
      petitionSubmitText,
      fundraiserSubmitText,
      defaultSubmitText,
    } = this.getCopy();
    if (submitText) return submitText;
    switch (type) {
      case 'signup':
        return signupSubmitText;
      case 'event':
        return eventSubmitText;
      case 'petition':
        return petitionSubmitText;
      case 'fundraiser':
        return fundraiserSubmitText;
      default:
        return defaultSubmitText;
    }
  }

  fragment() {
    return [this.props.nodeFragment, this.props.campaignFragment].join('\n');
  }

  maybeFetch() {
    if (
      this.state.failed ||
      this.state.formSchema ||
      this.props.formSchema ||
      this.state.fetching
    ) {
      return;
    }
    this.setState({ fetching: true }, async () => {
      let campaign;
      let formSchema;
      let failed = false;
      try {
        const variables =
          this.props.type === 'signup'
            ? {
              selector: {
                id: this.props.id,
              },
            }
            : {
              id: this.props.id,
            };
        const { campaign: c } = await this.props.wings.query(
          this.query() + this.fragment(),
          variables,
        );
        campaign = c;
        formSchema = JSON.parse(c.submissionSchema);
      } catch (e) {
        console.error(
          "Couldn't fetch submission schema for campaign",
          this.props.type,
          this.props.id,
        );
        failed = true;
      } finally {
        this.setState(
          {
            fetching: false,
            formSchema,
            campaign,
            failed,
          },
          this.maybeEmitOnLoad,
        );
      }
    });
  }

  async submit(formData) {
    const { amount } = this.state;

    try {
      const res = await this.props.wings.query(this.mutation(), {
        id: this.props.id,
        input: {
          ...(this.props.type === 'signup' && {
            id: this.props.id,
          }),
          data: JSON.stringify(formData),
          ...(this.props.type === 'fundraiser' && {
            amount,
          }),
          redirectUrl: this.props.redirectUrl, // default to current URL?
        },
      });
      if (res.donation && res.donation.id) {
        window.location.assign(res.donation.order.paymentUrl);
      } else {
        this.setState({ stage: 'confirm' });
      }
      this.confirmedContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      console.error(err);
    }
  }

  _getHookContext = () => ({ node: this.state.campaign || this.props.node });

  handleSubmit = async ({ formData: fd }, event) => {
    try {
      const formData = this.processSubmission(fd);
      if (this.props.onSubmit) {
        const onSubmitRes = await this.props.onSubmit(formData, {
          event,
          ...this._getHookContext(),
        });
        if (onSubmitRes) {
          await this.submit(formData);
        }
        return;
      }
      await this.submit(formData);
    } catch (err) {
      console.error(err);
      this.setState({ stage: 'error' });
    }
  };

  render() {
    const { amount, stage } = this.state;
    const schema = this.getFormSchema();
    const loading = !schema;
    const {
      campaignConfirmText,
      campaignConfirmTitle,
      campaignLoadingText,
      campaignErrorTitle,
      campaignErrorText,
    } = this.getCopy();
    console.log(this.props);
    return loading ? (
      <div style={{ textAlign: 'center' }}>
        {campaignLoadingText}
        <Loading />
      </div>
    ) : (
      <React.Fragment>
        {this.props.type === 'fundraiser' ? (
          <div style={{ marginBottom: '20px' }}>
            <Amount
              label="Amount"
              required
              id="amount"
              value={amount / 100}
              amounts={[5, 10, 25]}
              onChange={(v) => {
                this.setState({ amount: v * 100 });
              }}
            />
          </div>
        ) : null}
        {!(stage === 'form') ? null : (
          <SchemaForm
            id="campaign-form"
            autoValidate={false}
            {...this.props.schemaFormProps}
            schema={schema}
            formData={this.state.formData}
            onChange={({ formData }) => this.setState({ formData })}
            onSubmit={this.handleSubmit.bind(this)}
          >
            {this.props.children || <Button>{this.getSubmitText()}</Button>}
          </SchemaForm>
        )}
        {!(stage === 'confirm') ? null : (
          <div ref={this.confirmedContainerRef}>
            <h1>{campaignConfirmTitle}</h1>
            <p>{campaignConfirmText}</p>
          </div>
        )}
        {!(stage === 'error') ? null : (
          <div>
            <h1>{campaignErrorTitle}</h1>
            <p>{campaignErrorText}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withWings(CampaignForm);
