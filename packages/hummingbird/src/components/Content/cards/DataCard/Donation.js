import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { SchemaForm, Amount } from '@wingscms/crane';
import Button from '../../../Button';
import wings from '../../../../data/wings';

const StyledForm = styled(SchemaForm)`
  border: none;
  color: #fff;
  background-color: ${({ theme }) => theme.primaryColor};
  margin: 20px auto;
  padding: 40px;
  border-radius: 4px;
  fieldset {
    border: none;
    padding: 0;
  }
  p:first-child {
    margin-top: initial !important;
  }
`;

class Donation extends Component {
  constructor() {
    super();
    this.state = {
      formSchema: null,
      formState: {},
      amount: 10,
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.fetchSchema(this.props.fundraiserId);
  }

  async submit() {
    const { formState, amount } = this.state;
    await this.donate(formState, amount);
  }

  async fetchSchema(id) {
    const res = await wings.query(
      `
      query ($id: String) {
        fundraiser(id: $id) {
          submissionSchema
        }
      }
    `,
      { id },
    );
    this.setState({ formSchema: JSON.parse(res.fundraiser.submissionSchema) });
  }

  async donate() {
    const { formState, amount } = this.state;
    const res = await wings.query(
      `
      mutation Donate($id: String, $input: DonationInput!) {
        donation: donate(id: $id, input: $input) {
          id
          order {
            id
            paymentUrl
          }
        }
      }
    `,
      {
        id: this.props.fundraiserId,
        input: {
          data: JSON.stringify(formState),
          amount: amount * 100 || 1000,
          redirectUrl: `${window.location.origin}/payment/success`,
        },
      },
    );
    if (res.donation && res.donation.id) {
      window.location.assign(res.donation.order.paymentUrl);
    }
    return res;
  }

  render() {
    const { theme } = this.props;
    const { amount, formSchema, formState } = this.state;
    return (
      <div>
        {formSchema && (
          <StyledForm
            schema={formSchema}
            onChange={v => this.setState({ formState: v.formData })}
            onSubmit={this.submit}
            formData={formState}
            formContext={{ theme }}
          >
            <div className="form-group">
              <Amount
                id="amount"
                amounts={[5, 10, 20]}
                value={amount}
                onChange={x => this.setState({ amount: x })}
                label="Amount"
              />
            </div>
            <div className="form-group">
              <Button
                style={{ color: '#fff', width: '100%' }}
                buttonType="reverse"
                type="submit"
                className="btn btn-primary"
              />
            </div>
          </StyledForm>
        )}
      </div>
    );
  }
}

export default withTheme(Donation);
