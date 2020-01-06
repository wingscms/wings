/* eslint-disable */
import React, { Fragment } from 'react';
import styled from '../../lib/styled';
import { getValue, processValue } from './formUtils';

const StyledSelect = styled.select`
  font-size: inherit;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 100%;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  cursor: pointer;
  &:disabled {
    background-color: #eee;
    color: #555;
    cursor: not-allowed;
  }
  ${({ selectStyles }) => selectStyles || ''};
`;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    pointer-events: none;
    position: absolute;
    display: block;
    content: '';
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.formBackgroundColor};
  }
`;

export default props => {
  const {
    schema,
    id,
    options = {},
    value,
    required,
    disabled,
    readonly,
    label,
    multiple,
    formContext = {},
    onChange,
    onBlur,
    onFocus,
    placeholder,
  } = props;
  const { enumOptions = [], enumDisabled } = options;
  const emptyValue = multiple ? [] : '';
  return (
    <Wrapper>
      {!schema && label ? (
        <label htmlFor={id}>
          {label}
          {required ? '*' : ''}
        </label>
      ) : null}
      <StyledSelect
        id={id}
        multiple={multiple}
        className="form-control"
        value={typeof value === 'undefined' ? emptyValue : value}
        required={required}
        disabled={disabled || readonly}
        selectStyles={formContext.selectStyles}
        onBlur={
          onBlur &&
          (event => {
            const newValue = getValue(event, multiple);
            onBlur(id, schema ? processValue(schema, newValue) : newValue);
          })
        }
        onFocus={
          onFocus &&
          (event => {
            const newValue = getValue(event, multiple);
            onFocus(id, schema ? processValue(schema, newValue) : newValue);
          })
        }
        onChange={event => {
          const newValue = getValue(event, multiple);
          onChange(schema ? processValue(schema, newValue) : newValue);
        }}
      >
        {schema ? (
          <Fragment>
            {!multiple && schema.default === undefined && <option value="">{placeholder}</option>}
            {enumOptions.map(({ value, label }, i) => {
              const disabledOption = enumDisabled && enumDisabled.indexOf(value) !== -1;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <option key={i} value={value} disabled={disabledOption}>
                  {label}
                </option>
              );
            })}
          </Fragment>
        ) : (
            <Fragment>
              {options.map((x, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={i} value={x}>
                  {x}
                </option>
              ))}
            </Fragment>
          )}
      </StyledSelect>
    </Wrapper>
  );
};
