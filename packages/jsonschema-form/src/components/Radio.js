/* eslint-disable */
import React from 'react';
import styled from '../lib/styled';

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledLabel = styled.label`
  position: relative;
  user-select: none;
  height: 20px;
  padding-left: 30px;
  &:after {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    z-index: 1;
    border-radius: 100%;
  }
  &.checked:after {
    background-color: #000;
    content: '\u2022';
    color: #fff;
    padding: 0;
    font-size: 30px;
    line-height: 22px;
    text-align: center;
  }
`;

export default props => {
  const {
    schema,
    options,
    value,
    required,
    disabled,
    readonly,
    onBlur,
    onFocus,
    onChange,
    id,
  } = props;

  const { enumOptions = [], enumDisabled } = options;
  return (
    <div className="field-radio-group" id={id}>
      {schema
        ? enumOptions.map((option, i) => {
            const name = Math.random().toString();
            const checked = option.value === value;
            const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
            const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
            return (
              <div key={i} className={`radio ${disabledCls}`} style={{ margin: '10px 0' }}>
                <StyledInput
                  id={name}
                  type="radio"
                  checked={checked}
                  name={name}
                  required={required}
                  value={option.value}
                  disabled={disabled || itemDisabled || readonly}
                  onChange={_ => onChange(option.value)}
                  onBlur={onBlur && (event => onBlur(id, event.target.value))}
                  onFocus={onFocus && (event => onFocus(id, event.target.value))}
                />
                <StyledLabel htmlFor={name} className={`${checked ? 'checked ' : ''}`}>
                  {option.label}
                </StyledLabel>
              </div>
            );
          })
        : options.map((option, i) => {
            const name = Math.random().toString();
            const checked = option === value;
            const itemDisabled = enumDisabled && enumDisabled.indexOf(option) !== -1;
            const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
            return (
              <div
                key={i}
                className={`radio ${checked ? 'checked ' : ''}${disabledCls}`}
                style={{ margin: '10px 0' }}
              >
                <StyledInput
                  id={name}
                  type="radio"
                  checked={checked}
                  name={name}
                  required={required}
                  value={option}
                  disabled={disabled || itemDisabled || readonly}
                  onChange={_ => onChange(option)}
                  onBlur={onBlur && (event => onBlur(id, event.target.value))}
                  onFocus={onFocus && (event => onFocus(id, event.target.value))}
                />
                <StyledLabel htmlFor={name} className={`${checked ? 'checked ' : ''}`}>
                  {option}
                </StyledLabel>
              </div>
            );
          })}
    </div>
  );
};
