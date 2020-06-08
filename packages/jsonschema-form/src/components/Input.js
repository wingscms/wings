import React from 'react';
import classnames from 'classnames';
import Input from '../lib/components/Input';
import Label from '../lib/components/Label';

function BaseInput(props) {
  if (!props.id) {
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    id,
    value,
    readonly,
    className,
    disabled,
    autofocus,
    label,
    onBlur,
    onFocus,
    options,
    required,
    schema,
    formContext = {},
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

  const getOnChangeValue = v => {
    switch (inputProps.type) {
      case 'number':
        return v == null ? 0 : Number(v);
      default:
        return v == null ? '' : v;
    }
  };

  const _onChange = ({ target: { value: v } }) => {
    const emptyValue = options && options.emptyValue ? options.emptyValue : '';
    props.onChange(v === '' ? emptyValue : getOnChangeValue(v));
  };

  const getInputValue = () => {
    switch (inputProps.type) {
      case 'number':
        return value == null ? '0' : value.toString();
      default:
        return value == null ? '' : value;
    }
  };

  return (
    <div>
      {!schema && label ? <Label htmlFor={id} label={label} required={required} /> : null}
      <Input
        id={id}
        className={classnames('form-control', className)}
        readOnly={readonly}
        disabled={disabled}
        value={getInputValue()}
        theme={formContext.theme}
        inputStyles={formContext.inputStyles}
        error={rawErrors && rawErrors.length}
        {...inputProps}
        autoFocus={autofocus}
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
