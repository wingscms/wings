import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import randomString from '../../util/randomString';

const StyledSelect = styled.select`
  background-color: #f1f1f1;
  margin: 5px 10px 10px 0;
  border: 0;
  border-radius: 3px;
  font-size: 18px;
  display: inline-block;
  width: 100%;
  height: 50px;
  vertical-align: top;
`;

const Label = styled.label`
  display: inline-block;
  width: calc(100% - 40px);
  font-size: 18px;
  line-height: 22px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export default class TextInput extends Component {
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
    const { labelText, name, titleText, required, options } = this.props;
    const { _id } = this.state;
    const id = this.props.id || _id;
    // const Label = labelComp || StyledLabel;
    return (
      <div>
        {titleText ? (
          <Title htmlFor={name}>
            {titleText}
            {required ? '*' : ''}
          </Title>
        ) : null}
        {labelText ? (
          <Label htmlFor={id}>
            {labelText}
            {required ? '*' : ''}
          </Label>
        ) : null}
        <StyledSelect type="checkbox" name={name} id={id} {...this.props}>
          {options ? options.map(o => <option value={o}>{o}</option>) : null}
        </StyledSelect>
      </div>
    );
  }
}
