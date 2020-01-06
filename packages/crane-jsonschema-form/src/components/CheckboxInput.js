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
  font-size: 16px;
  display: inline-table;
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
    border-radius: 4px;
  }
  &.checked:after {
    background-color: #000;
    content: '\u2713';
    color: #fff;
    padding: 0;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
`;

// JSON schema forms behaviour
function schemaRequiresTrueValue(schema) {
  if (schema.const) {
    return true;
  }
  if (schema.enum && schema.enum.length === 1 && schema.enum[0] === true) {
    return true;
  }
  if (schema.anyOf && schema.anyOf.length === 1) {
    return schemaRequiresTrueValue(schema.anyOf[0]);
  }
  if (schema.oneOf && schema.oneOf.length === 1) {
    return schemaRequiresTrueValue(schema.oneOf[0]);
  }
  if (schema.allOf) {
    return schema.allOf.some(schemaRequiresTrueValue);
  }
}

export default props => {
  let { required } = props;
  const { schema, id, value, disabled, readonly, label, onBlur, onFocus, onChange } = props;

  required = schema ? schemaRequiresTrueValue(schema) : required;

  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema && schema.description && <p>{schema.description}</p>}
      <StyledInput
        {...props}
        type="checkbox"
        id={id}
        checked={typeof value === 'undefined' ? false : value}
        required={required}
        disabled={disabled || readonly}
        onChange={event => onChange(event.target.checked)}
        onBlur={onBlur && (event => onBlur(id, event.target.checked))}
        onFocus={onFocus && (event => onFocus(id, event.target.checked))}
      />
      <StyledLabel
        className={value ? 'checked' : ''}
        htmlFor={id}
        dangerouslySetInnerHTML={{ __html: `${label}${required ? '*' : ''}` }}
      />
    </div>
  );
};
