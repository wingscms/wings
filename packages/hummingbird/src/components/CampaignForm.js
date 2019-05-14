import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SchemaForm } from '@wingscms/crane';
import Button from './Button';
import wings from '../data/wings';

const PETITION_QUERY = `
query ($id: String!) {
  campaign: petition(id: $id) {
    id
    title
    submissionSchema
    signatureCount
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

const FUNDRAISER_QUERY = `
  query ($id: String) {
    campaign: fundraiser(id: $id) {
      id
      title
      submissionSchema
    }
  }
`;

// TODO: move to @wingscms/react (needs a provider for Wings client first)
export default class CampaignForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    processSchema: PropTypes.func,
    onLoad: PropTypes.func,
  };
  static defaultProps = {
    onSubmit: () => {},
    processSchema: s => s,
    onLoad: v => console.log('onLoad', v),
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

  getFormSchema() {
    const schema = this.props.formSchema || this.state.formSchema;
    return schema ? this.processSchema(schema) : schema;
  }

  processSchema = (s) => {
    const schema = { ...s, properties: { ...s.properties } };
    delete schema.properties.privacyConsent;
    delete schema.properties.terms;
    return this.props.processSchema(schema);
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
    if (this.getFormSchema() || this.state.fetching) return;
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

  // async submit() {
  //   const { formState, amount } = this.state;
  //   const res = await wings.query(
  //     `
  //     mutation Donate($id: String, $input: DonationInput!) {
  //       donation: donate(id: $id, input: $input) {
  //         id
  //         order {
  //           id
  //           paymentUrl
  //         }
  //       }
  //     }
  //   `,
  //     {
  //       id: this.props.fundraiserId,
  //       input: {
  //         data: JSON.stringify(formState),
  //         amount: amount * 100 || 1000,
  //         redirectUrl: `${window.location.origin}/payment/success`,
  //       },
  //     },
  //   );
  //   if (res.donation && res.donation.id) {
  //     window.location.assign(res.donation.order.paymentUrl);
  //   }
  //   return res;
  // }

  handleSubmit = (...args) => {
    debugger;
    // e.preventDefault();
    this.props.onSubmit(...args);
  };

  render() {
    const schema = this.getFormSchema();
    return !schema ? (
      'loading'
    ) : (
      <SchemaForm schema={schema} onSubmit={this.handleSubmit}>
        {this.props.children || <Button>{this.getSubmitText()}</Button>}
      </SchemaForm>
    );
  }
}
