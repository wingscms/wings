import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { SchemaForm, Amount, Loading } from '@wingscms/crane';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import _Button from '../Button';
import wings from '../../data/wings';
import { patchSchema, parseJSON } from '../../../lib/utils';

const PETITION_QUERY = `
  query ($id: String!) {
    campaign: petition(id: $id) {
      id
      title
      submissionSchema
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

const FIELDS = {
  EMAIL: 'email',
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  NEWSLETTER: 'newsletter',
  PRIVACY: 'privacyConsent',
  TERMS: 'terms',
};

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

const messages = defineMessages({
  defaultSubmit: {
    id: 'hummingbird.CampaignForm.submit.text',
    description: 'Campaign form default submit button label',
    defaultMessage: 'Submit',
  },
  eventSubmit: {
    id: 'hummingbird.CampaignForm.eventSubmit.text',
    description: 'Campaign form event submit button label',
    defaultMessage: 'Attend',
  },
  fundraiserSubmit: {
    id: 'hummingbird.CampaignForm.fundraiserSubmit.text',
    description: 'Campaign form fundraiser submit button label',
    defaultMessage: 'Donate',
  },
  petitionSubmit: {
    id: 'hummingbird.CampaignForm.petitionSubmit.text',
    description: 'Campaign form petition submit button label',
    defaultMessage: 'Sign',
  },
  [FIELDS.EMAIL]: {
    id: 'hummingbird.CampaignForm.emailField.label',
    description: 'Campaign form email field label',
    defaultMessage: 'Email address',
  },
  [FIELDS.FIRSTNAME]: {
    id: 'hummingbird.CampaignForm.firstNameField.label',
    description: 'Campaign form first name field label',
    defaultMessage: 'First name',
  },
  [FIELDS.LASTNAME]: {
    id: 'hummingbird.CampaignForm.lastNameField.label',
    description: 'Campaign form last name field label',
    defaultMessage: 'Last name',
  },
  [FIELDS.NEWSLETTER]: {
    id: 'hummingbird.CampaignForm.newsletterField.label',
    description: 'Campaign form newsletter checkbox label',
    defaultMessage: 'Stay up to date',
  },
  [FIELDS.PRIVACY]: {
    id: 'hummingbird.CampaignForm.privacyConsentField.label',
    description: 'Campaign form privacy consent checkbox label',
    defaultMessage: 'Agree to our privacy policy',
  },
  [FIELDS.TERMS]: {
    id: 'hummingbird.CampaignForm.termsField.label',
    description: 'Campaign form terms checkbox label',
    defaultMessage: 'Agree to our terms & conditions',
  },
});

// TODO: move to @wingscms/react (needs a provider for Wings client first)
class CampaignForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['petition', 'event', 'fundraiser']).isRequired,
    onSubmit: PropTypes.func,
    processSchema: PropTypes.func,
    processSubmission: PropTypes.func,
    onLoad: PropTypes.func,
    disabledFields: PropTypes.array,
    schemaFormProps: PropTypes.object,
    nodeFragment: PropTypes.string,
    campaignFragment: PropTypes.string,
    node: PropTypes.shape({ submissionSchema: PropTypes.string }),
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
  };

  state = {
    campaign: null,
    fetching: false,
    formSchema: null,
    amount: 500,
    stage: 'form',
  };

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
      parseJSON(this.props.node.submissionSchema, { defaultValue: null }) ||
      this.state.formSchema;
    return schema ? this.processSchema(schema, this.props.node) : schema;
  }

  localizeSchema(schema) {
    const { intl } = this.props;
    const fields = Object.values(FIELDS).filter(
      f => Object.keys(schema.properties).indexOf(f) > -1,
    );
    const fieldDefs = fields.reduce(
      (defs, field) => ({
        ...defs,
        [field]: { title: intl.formatMessage(messages[field]) },
      }),
      {},
    );
    return patchSchema(schema, fieldDefs);
  }

  processSchema = (s, node) => {
    const { disabledFields } = this.props;
    const schema = { ...s, properties: { ...s.properties } };
    disabledFields.forEach((field) => {
      delete schema.properties[field];
    });
    schema.required = schema.required.filter(f => disabledFields.indexOf(f) < 0);

    return this.props.processSchema(this.localizeSchema(schema), node);
  };

  processSubmission = (sub) => {
    const { disabledFields } = this.props;
    const submission = { ...sub };
    disabledFields.forEach((field) => {
      submission[field] = true;
    });
    return this.props.processSubmission(submission);
  };

  getSubmitText() {
    const { intl, type, submitText = '' } = this.props;
    if (submitText) return submitText;
    switch (type) {
      case 'event':
        return intl.formatMessage(messages.eventSubmit);
      case 'petition':
        return intl.formatMessage(messages.petitionSubmit);
      case 'fundraiser':
        return intl.formatMessage(messages.fundraiserSubmit);
      default:
        return intl.formatMessage(messages.defaultSubmit);
    }
  }

  fragment() {
    return [this.props.nodeFragment, this.props.campaignFragment].join('\n');
  }

  maybeFetch() {
    if (this.props.formSchema || this.state.formSchema || this.state.fetching) {
      return;
    }
    this.setState({ fetching: true }, async () => {
      let campaign;
      let formSchema;
      try {
        const { campaign: c } = await wings.query(this.query() + this.fragment(), {
          id: this.props.id,
        });
        campaign = c;
        formSchema = JSON.parse(c.submissionSchema);
      } catch {
        console.error(
          "Couldn't fetch submission schema for campaign",
          this.props.type,
          this.props.id,
        );
      } finally {
        this.setState(
          {
            fetching: false,
            formSchema,
            campaign,
          },
          this.maybeEmitOnLoad,
        );
      }
    });
  }

  async submit(formData) {
    const { amount } = this.state;
    try {
      const res = await wings.query(this.mutation(), {
        id: this.props.id,
        input: {
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
    } catch (err) {
      console.error(err);
    }
  }

  handleSubmit = async ({ formData: fd }, event, node) => {
    try {
      const formData = this.processSubmission(fd);
      if (this.props.onSubmit) {
        const onSubmitRes = await this.props.onSubmit(formData, event, node);
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
    const { theme } = this.props;
    const { amount, stage } = this.state;
    const schema = this.getFormSchema();
    const loading = !schema;
    return loading ? (
      <div style={{ textAlign: 'center' }}>
        <FormattedMessage
          id="hummingbird.Campaign.loading.text"
          description="Form loading message"
          defaultMessage="loading"
        />
        ...
        <Loading theme={theme} />
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
            node={this.props.node}
            formData={this.state.formData}
            onChange={({ formData }) => this.setState({ formData })}
            onSubmit={(formData, event) => this.handleSubmit(formData, event, this.props.node)}
          >
            {this.props.children || <Button>{this.getSubmitText()}</Button>}
          </SchemaForm>
        )}
        {!(stage === 'confirm') ? null : (
          <div>
            <FormattedMessage
              id="hummingbird.Campaign.confirm.title"
              description="Title of campaign confirmation."
              defaultMessage="We’re almost there!"
              tagName="h1"
            />
            <FormattedMessage
              id="hummingbird.Campaign.confirm.text"
              description="Body of campaign confirmation."
              defaultMessage="We have sent you an email with a confirmation link to make sure all signatures are genuine. If you follow that link, your signature will count. Thanks!"
              tagName="p"
            />
          </div>
        )}
        {!(stage === 'error') ? null : (
          <div>
            <FormattedMessage
              id="hummingbird.Campaign.error.title"
              description="Title of campaign error."
              defaultMessage="Oops!"
              tagName="h1"
            />
            <FormattedMessage
              id="hummingbird.Campaign.error.text"
              description="Body of campaign error."
              defaultMessage="Something went wrong with the submitting the form. Try again or report the issue to us."
              tagName="p"
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default injectIntl(withTheme(CampaignForm));
