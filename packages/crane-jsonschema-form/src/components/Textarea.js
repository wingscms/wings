import React from 'react';
import styled from '../lib/styled';

const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  font-size: inherit;
`;

export default props => {
  const {
    id,
    options = {},
    placeholder,
    value,
    required,
    disabled,
    readonly,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const _onChange = ({ target: { val } }) => onChange(val === '' ? options.emptyValue || '' : val);
  return (
    <StyledTextarea
      id={id}
      className="form-control"
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      rows={options.rows}
      onBlur={onBlur && (event => onBlur(id, event.target.value))}
      onFocus={onFocus && (event => onFocus(id, event.target.value))}
      onChange={_onChange}
    />
  );
};
