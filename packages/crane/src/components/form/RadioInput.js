import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import randomString from '../../util/randomString';

const StyledInput = styled.input`
  background-color: #f1f1f1;
  margin: 5px 10px 10px 0;
  border: 0;
  border-radius: 3px;
  font-size: 18px;
  display: inline-block;
  width: auto;
  height: auto;
  vertical-align: top;
`;

const Label = styled.label`
  display: inline-block;
  width: calc(100% - 40px);
  font-size: 15px;
  line-height: 22px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export default class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: `${randomString()}-${props.name}`,
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { labelText, name, titleText, value, required } = this.props;
    const { _id } = this.state;
    const id = this.props.id || _id;
    // const Label = labelComp || StyledLabel;
    return (
      <div className="crane-radio-input">
        {titleText ? (
          <Title htmlFor={name}>
            {titleText}
            {required ? '*' : ''}
          </Title>
        ) : null}
        <StyledInput type="radio" name={name} id={id} value={value} {...this.props} />
        {labelText ? (
          <Label htmlFor={id}>
            {labelText}
            {required ? '*' : ''}
          </Label>
        ) : null}
      </div>
    );
  }
}
