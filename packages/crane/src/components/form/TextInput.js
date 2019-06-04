import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import randomString from '../../lib/utils/randomString';

const StyledInput = styled.input`
  background-color: #f1f1f1;
  width: 100%;
  margin: 0 0 1rem 0;
  border: 0;
  height: 62px;
  border-radius: 3px;
  padding: 0 1rem;
  font-size: 22px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  & + input {
    margin-top: 6px;
  }
`;

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: `${randomString()}-${props.name}`,
      value: '',
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { autocomplete, labelComp, labelText, name, required } = this.props;
    const { _id, value } = this.state;
    const id = this.props.id || _id;
    const Label = labelComp || StyledLabel;
    return (
      <div>
        {labelText ? (
          <Label htmlFor={id}>
            {labelText}
            {!required || '*'}
          </Label>
        ) : null}
        <StyledInput
          name={name}
          id={id}
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
          autoComplete={autocomplete || name}
          {...this.props}
        />
      </div>
    );
  }
}
