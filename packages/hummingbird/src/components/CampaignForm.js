import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SchemaForm } from '@wingscms/crane';
import { FormattedMessage } from 'react-intl';
import _Button from './Button';
import wings from '../data/wings';

const PETITION_QUERY = `
  query ($id: String!) {
    campaign: petition(id: $id) {
      id
      title
      submissionSchema
      signatureCount
      signatureGoal
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
    }
  }
`;

const FUNDRAISER_MUTATION = `
  mutation Donate($id: String, $input: DonationInput!) {
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

// TODO: move to @wingscms/react (needs a provider for Wings client first)
export default class CampaignForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    processSchema: PropTypes.func,
    processSubmission: PropTypes.func,
    onLoad: PropTypes.func,
    disabledFields: PropTypes.array,
    schemaFormProps: PropTypes.object,
  };
  static defaultProps = {
    onSubmit: null,
    processSchema: s => s,
    processSubmission: s => s,
    onLoad: v => console.log('onLoad', v),
    disabledFields: [],
    schemaFormProps: {},
  };

  state = {
    campaign: null,
    fetching: false,
    formSchema: null,
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
    const schema = this.props.formSchema || this.state.formSchema;
    return schema ? this.processSchema(schema) : schema;
  }

  processSchema = (s) => {
    const { disabledFields } = this.props;
    const schema = { ...s, properties: { ...s.properties } };
    disabledFields.forEach((field) => {
      delete schema.properties[field];
    });
    schema.required = schema.required.filter(f => disabledFields.indexOf(f) < 0);
    return this.props.processSchema(schema);
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
    if (this.props.submitText) return this.props.submitText;
    switch (this.props.type) {
      case 'event':
        return 'Attend';
      case 'petition':
        return 'Sign';
      case 'fundraiser':
        return 'Donate';
      default:
        return 'Submit';
    }
  }

  maybeFetch() {
    if (this.getFormSchema() || !this.query() || this.state.fetching) return;
    this.setState({ fetching: true }, async () => {
      let campaign;
      let formSchema;
      try {
        const { campaign: c } = await wings.query(this.query(), { id: this.props.id });
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
          ...(this.props.type === 'donation' && {
            amount: amount * 100 || 1000,
          }),
          redirectUrl: this.props.redirectUrl, // default to current URL?
        },
      });
      if (res.donation && res.donation.id) {
        window.location.assign(res.donation.order.paymentUrl);
      }
    } catch (err) {
      console.error(err);
    }
  }

  handleSubmit = async ({ formData: fd }, event) => {
    try {
      const formData = this.processSubmission(fd);
      if (this.props.onSubmit) {
        await this.submit(formData);
        this.props.onSubmit(formData, event);
        return;
      }
      await this.submit(formData);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { fetching } = this.state;
    const schema = this.getFormSchema();
    const loading = !schema || fetching;
    return loading ? (
      <FormattedMessage
        id="hummingbird.CampaignForm.loading.text"
        description="Form loading message"
        defaultMessage="loading"
      />
    ) : (
      <SchemaForm
        id="campaign-form"
        autoValidate={false}
        {...this.props.schemaFormProps}
        schema={schema}
        onSubmit={this.handleSubmit.bind(this)}
      >
        {this.props.children || <Button>{this.getSubmitText()}</Button>}
      </SchemaForm>
    );
  }
}
