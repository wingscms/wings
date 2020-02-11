import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Button as _Button } from '@wingscms/crane';
import SchemaForm from '@wingscms/crane-jsonschema-form';
import deepmerge from 'deepmerge';
import styled from '../../lib/styled';

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
      submission {
        id
      }
    }
  }
`;

const PETITION_QUERY = `
  query ($selector: PetitionSelectorInput) {
    campaign: petition(selector: $selector) {
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
  mutation SubmitPetition($input: SubmitPetitionInput!) {
    submitPetition(input: $input) {
      signature {
        id
      }
    }
  }
`;

const EVENT_QUERY = `
  query ($selector: EventSelectorInput) {
    campaign: event(selector: $selector) {
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
        amount {
          amount
          currency {
            id
            name
            symbol
          }
        }
      }
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const EVENT_MUTATION = `
  mutation SubmitEvent($input: SubmitEventInput!) {
    submitEvent(input: $input) {
      attendee {
        id
      }
    }
  }
`;

const FUNDRAISER_QUERY = `
  query ($selector: FundraiserSelectorInput) {
    campaign: fundraiser(selector: $selector) {
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
      target {
        amount
        currency {
          id
          name
          symbol
        }
      }
      amounts {
        options {
          amount {
            amount
            currency {
              id
              name
              symbol
            }
          }
        }
      }
      raised {
        amount
        currency {
          id
          name
          symbol
        }
      }
      paymentMethods {
        id
        title
        icons {
          url
        }
      }
      ...NodeFields
      ...CampaignFields
    }
  }
`;

const FUNDRAISER_MUTATION = `
  mutation SubmitFundraiser($input: SubmitFundraiserInput!) {
    submitFundraiser(input: $input) {
      donation {
        id
        order {
          id
          paymentUrl
        }
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

const PaymentMethodIcon = styled.img`
  display: inline;
  width: 50px;
  vertical-align: middle;
  margin: 0 5px;
`;

const FIELDS = {
  EMAIL: 'email',
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  NEWSLETTER: 'newsletter',
  PRIVACY: 'privacyConsent',
  TERMS: 'terms',
  ADDRESS: 'address',
  ZIPCODE: 'zipcode',
  CITY: 'city',
  COUNTRY: 'country',
  PHONE: 'phone',
  AMOUNT: 'amount',
};

const FIELD_COPY_MAPPING = {
  [FIELDS.EMAIL]: 'emailFieldLabel',
  [FIELDS.FIRSTNAME]: 'firstNameFieldLabel',
  [FIELDS.LASTNAME]: 'lastNameFieldLabel',
  [FIELDS.NEWSLETTER]: 'newsletterFieldLabel',
  [FIELDS.PRIVACY]: 'privacyConsentFieldLabel',
  [FIELDS.TERMS]: 'termsFieldLabel',
  [FIELDS.ADDRESS]: 'addressFieldLabel',
  [FIELDS.ZIPCODE]: 'zipcodeFieldLabel',
  [FIELDS.CITY]: 'cityFieldLabel',
  [FIELDS.COUNTRY]: 'countryFieldLabel',
  [FIELDS.PHONE]: 'phoneFieldLabel',
  [FIELDS.AMOUNT]: 'amountFieldLabel',
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
  addressFieldLabel: 'Address',
  zipcodeFieldLabel: 'Postcode',
  cityFieldLabel: 'City',
  countryFieldLabel: 'Country',
  phoneFieldLabel: 'Phone number',
  amountFieldLabel: 'Amount',
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
    amount: 0,
    paymentMethod: null,
    stage: 'form',
  };

  getCopy() {
    return { ...DEFAULT_COPY, ...this.props.copy };
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

  processSchema = s => {
    const { disabledFields } = this.props;
    const schema = { ...s, properties: { ...s.properties } };
    disabledFields.forEach(field => {
      delete schema.properties[field];
    });
    schema.required = schema.required.filter(f => disabledFields.indexOf(f) < 0);

    return this.props.processSchema(this._overrideSchemaCopy(schema), this._getHookContext());
  };

  processSubmission = sub => {
    const { disabledFields } = this.props;
    const submission = { ...sub };
    disabledFields.forEach(field => {
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
        const { campaign: c } = await this.props.wings.query(this.query() + this.fragment(), {
          selector: {
            id: { eq: this.props.id },
          },
        });
        campaign = c;
        formSchema = JSON.parse(c.submissionSchema);
        // console.log(campaign);
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
            ...(campaign.resourceType === 'node.fundraiser' && {
              amount: campaign.amounts.options[0].amount.amount,
              selectedPaymentMethod: campaign.paymentMethods[0].id,
            }),
          },
          this.maybeEmitOnLoad,
        );
      }
    });
  }

  async submit(formData) {
    const { amount, selectedPaymentMethod: paymentMethod } = this.state;

    try {
      const res = await this.props.wings.query(this.mutation(), {
        input: {
          id: this.props.id,
          data: JSON.stringify(formData),
          ...(this.props.type === 'fundraiser' && {
            amount,
            paymentMethod,
          }),
          redirectUrl: this.props.redirectUrl, // default to current URL?
        },
      });
      if (
        res.submitFundraiser &&
        res.submitFundraiser.donation &&
        res.submitFundraiser.donation.id
      ) {
        window.location.assign(res.submitFundraiser.donation.order.paymentUrl);
      } else {
        this.setState({ stage: 'confirm' });
      }
      this.confirmedContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
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

  getCurrencyCode(campaign) {
    if (!campaign) return null;
    if (!(this.props.type === 'fundraiser')) return null;
    return campaign.amounts.currencyCode;
  }

  getCurrencySymbol(currencyCode) {
    switch (currencyCode) {
      case 'GBP':
        return '£';
      default:
        return '€';
    }
  }

  getCampaign() {
    return this.state.campaign || this.props.node;
  }

  renderAmount() {
    const { amount } = this.state;
    const campaign = this.getCampaign();
    const amounts = campaign.amounts.options.map(o => o.amount.amount);
    const currencyCode = this.getCurrencyCode(campaign);
    const symbol = this.getCurrencySymbol(currencyCode);
    const { amountFieldLabel } = this.getCopy();
    return (
      <div style={{ marginBottom: '20px' }}>
        <SchemaForm._Amount
          label={amountFieldLabel}
          required
          id="amount"
          symbol={symbol}
          value={amount}
          amounts={amounts}
          onChange={v => {
            this.setState({ amount: v });
          }}
        />
      </div>
    );
  }

  handlePaymentMethodChange = e => {
    this.setState({ selectedPaymentMethod: e.target.value });
  };

  renderPaymentMethodSelect() {
    const fundraiser = this.getCampaign();
    const { paymentMethods } = fundraiser;
    return (
      <div>
        {paymentMethods.map(method => (
          <div style={{ marginTop: '10px' }}>
            <label style={{ fontSize: '16px', verticalAlign: 'middle' }}>
              <input
                type="radio"
                id={`payment-menthod-${method.id.replace('_', '-')}`}
                key={`payment-menthod-${method.id}`}
                name="payment-method"
                value={method.id}
                checked={this.state.selectedPaymentMethod === method.id}
                onChange={this.handlePaymentMethodChange}
                style={{ marginRight: '20px' }}
              />
              {method.icons.map(icon => (
                <PaymentMethodIcon src={icon.url} alt={method.title} />
              ))}
            </label>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { stage } = this.state;
    const schema = this.getFormSchema();
    const loading = !schema;
    const {
      campaignConfirmText,
      campaignConfirmTitle,
      campaignLoadingText,
      campaignErrorTitle,
      campaignErrorText,
    } = this.getCopy();

    return loading ? (
      <div style={{ textAlign: 'center' }}>
        {campaignLoadingText}
        <Loading />
      </div>
    ) : (
      <>
        {this.props.type === 'fundraiser' ? this.renderAmount() : null}
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
            {this.props.type === 'fundraiser' ? this.renderPaymentMethodSelect() : null}
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
      </>
    );
  }
}

export default withWings(CampaignForm);
