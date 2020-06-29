import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Button as _Button } from '@wingscms/components';
import SchemaForm from '@wingscms/jsonschema-form';
import deepmerge from 'deepmerge';

import styled from '../../lib/styled';
import { t } from '../../theme';

import { withWings } from '../../ctx/Wings';
import { withIntl } from '../../ctx/Intl';

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
    color: ${t(_ => _.primaryColor)};
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
    onUpdate: () => {},
    onLoad: () => {},
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
    submitLoading: false,
  };

  getCopy() {
    const { copy, intl, node } = this.props;
    const messages = {
      eventSubmitText: intl.formatMessage('wings.CampaignForm.eventSubmit.text'),
      fundraiserSubmitText: intl.formatMessage('wings.CampaignForm.fundraiserSubmit.text'),
      signupSubmitText: intl.formatMessage('wings.CampaignForm.signupSubmit.text'),
      petitionSubmitText: intl.formatMessage('wings.CampaignForm.petitionSubmit.text'),
      emailFieldLabel: intl.formatMessage('wings.CampaignForm.emailField.label'),
      firstNameFieldLabel: intl.formatMessage('wings.CampaignForm.firstNameField.label'),
      lastNameFieldLabel: intl.formatMessage('wings.CampaignForm.lastNameField.label'),
      addressFieldLabel: intl.formatMessage('wings.CampaignForm.addressField.label'),
      zipcodeFieldLabel: intl.formatMessage('wings.CampaignForm.zipcodeField.label'),
      cityFieldLabel: intl.formatMessage('wings.CampaignForm.cityField.label'),
      countryFieldLabel: intl.formatMessage('wings.CampaignForm.countryField.label'),
      phoneFieldLabel: intl.formatMessage('wings.CampaignForm.phoneField.label'),
      amountFieldLabel: intl.formatMessage('wings.CampaignForm.amountField.label'),
      newsletterFieldLabel: intl.formatMessage('wings.CampaignForm.newsletterField.label'),
      termsFieldLabel: intl.formatMessage('wings.CampaignForm.termsField.label', {
        // TODO: use Link component instead of vanilla <a>
        a: str => (
          <a href={node?.settings?.legal?.terms?.url || '/terms'} target="_blank">
            {str}
          </a>
        ),
      }),
      privacyConsentFieldLabel: intl.formatMessage('wings.CampaignForm.privacyConsentField.label', {
        a: str => (
          <a href={node?.settings?.legal?.privacyPolicy?.url || '/privacy'} target="_blank">
            {str}
          </a>
        ),
      }),
      campaignConfirmTitle: intl.formatMessage('wings.CampaignForm.confirm.title'),
      campaignConfirmText: intl.formatMessage('wings.CampaignForm.confirm.text'),
      campaignLoadingText: intl.formatMessage('wings.CampaignForm.loading.text'),
      campaignErrorTitle: intl.formatMessage('wings.CampaignForm.error.title'),
      campaignErrorText: intl.formatMessage('wings.CampaignForm.error.text'),
      campaignErrorButtonText: intl.formatMessage('wings.CampaignForm.error.buttonText'),
    };
    return { ...messages, ...copy };
  }

  componentDidMount() {
    this.maybeFetch();
  }

  componentDidUpdate() {
    this.maybeFetch();
    this.props.onUpdate();
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
    if (submitText) return submitText;
    const {
      signupSubmitText,
      eventSubmitText,
      petitionSubmitText,
      fundraiserSubmitText,
    } = this.getCopy();
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
        return 'Submit';
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
      } catch (e) {
        // eslint-disable-next-line no-console
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
      this.setState({ submitLoading: true });
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
        const paymentUrl = res.submitFundraiser.donation.order.paymentUrl;
        if (!paymentUrl) this.setState({ stage: 'error' });
        else window.location.assign(paymentUrl);
      } else {
        this.setState({ stage: 'confirm' });
      }
      this.confirmedContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
    } finally {
      this.setState({ submitLoading: false });
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
      console.error(err); // eslint-disable-line no-console
      this.setState({ stage: 'error' });
    }
  };

  getCurrencySymbol(fundraiser) {
    const amounts = fundraiser.amounts.options;
    return amounts.length ? amounts[0].amount.currency.symbol : '';
  }

  getCampaign() {
    return this.state.campaign || this.props.node;
  }

  renderAmount() {
    const { amount } = this.state;
    const campaign = this.getCampaign();
    const amounts = campaign.amounts.options.map(o => o.amount.amount);
    const symbol = this.getCurrencySymbol(campaign);
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
        {paymentMethods.map((method, idx) => (
          <div style={{ marginTop: '10px' }} key={idx}>
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
              {method.icons.map((icon, idx) => (
                <PaymentMethodIcon src={icon.url} alt={method.title} key={idx} />
              ))}
            </label>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { stage, submitLoading } = this.state;
    const schema = this.getFormSchema();
    const loading = !schema;
    const {
      campaignConfirmText,
      campaignConfirmTitle,
      campaignLoadingText,
      campaignErrorTitle,
      campaignErrorText,
      campaignErrorButtonText,
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
            {this.props.children || (
              <Button loading={submitLoading} intent="primary">
                {this.getSubmitText()}
              </Button>
            )}
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
            <Button onClick={() => this.setState({ stage: 'form' })}>
              {campaignErrorButtonText}
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default withIntl(withWings(CampaignForm));
