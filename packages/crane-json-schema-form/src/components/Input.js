/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled, { css } from '../../lib/styled';

const StyledInput = styled.input`
  font-size: inherit;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 100%;
  background-color: #fff;
  &:disabled {
    background-color: #eee;
    color: #555;
    cursor: not-allowed;
  }
  ${({ inputStyles }) => inputStyles || ''} &[type='color'] {
    min-height: 36px;
  }
  ${({ error }) =>
    !error
      ? null
      : css`
          background-color: #ffcfcf;
        `};
`;

function BaseInput(props) {
  if (!props.id) {
    console.log('No id for', props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    id,
    value,
    readonly,
    disabled,
    autofocus,
    label,
    onBlur,
    onFocus,
    options,
    required,
    schema,
    formContext = {},
    registry,
    rawErrors,
    ...inputProps
  } = props;
  if (options && options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    if (schema && schema.type === 'number') {
      inputProps.type = 'number';
      inputProps.step = 'any';
    } else if (schema && schema.type === 'integer') {
      inputProps.type = 'number';
      inputProps.step = '1';
    } else {
      inputProps.type = 'text';
    }
  }

  if (schema && schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  const _onChange = ({ target: { value: v } }) => {
    const emptyValue = options && options.emptyValue ? options.emptyValue : '';
    props.onChange(v === '' ? emptyValue : v);
  };
  return (
    <div>
      {!schema && label ? (
        <label htmlFor={id}>
          {label}
          {required ? '*' : ''}
        </label>
      ) : null}
      <StyledInput
        id={id}
        className={`form-control ${props.className}`}
        readOnly={readonly}
        disabled={disabled}
        value={value == null ? '' : value}
        theme={formContext.theme}
        inputStyles={formContext.inputStyles}
        error={rawErrors && rawErrors.length}
        {...inputProps}
        onChange={_onChange}
        onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
        onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
      />
    </div>
  );
}

BaseInput.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

export default BaseInput;
