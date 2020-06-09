import React from 'react';
import Form from 'react-jsonschema-form';
import styled from '../lib/styled';
import Amount from './Amount';
import Checkbox from './CheckboxInput';
import ColorInput from './ColorInput';
import DateInput from './DateInput';
import EmailInput from './EmailInput';
import HiddenInput from './HiddenInput';
import Input from './Input';
import PasswordInput from './PasswordInput';
import Radio from './Radio';
import RangeInput from './RangeInput';
import Select from './Select';
import Textarea from './Textarea';
import URLInput from './URLInput';
import AddressField from './AddressField';

const StyledForm = styled(Form)`
  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
  .form-group {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const defaultWidgets = {
  CheckboxWidget: Checkbox,
  ColorWidget: ColorInput,
  DateWidget: DateInput,
  EmailWidget: EmailInput,
  HiddenWidget: HiddenInput,
  PasswordWidget: PasswordInput,
  RangeWidget: RangeInput,
  RadioWidget: Radio,
  SelectWidget: Select,
  TextWidget: Input,
  TextareaWidget: Textarea,
  URLWidget: URLInput,
};

const defaultFields = {
  address: AddressField,
};

const createUiSchema = schema => {
  return Object.keys(schema.properties).reduce((uiSchema, key) => {
    const _uiSchema = { ...uiSchema };
    if (schema.properties[key].fieldType === 'address') {
      _uiSchema[key] = {
        'ui:field': 'address',
      };
    }
    return _uiSchema;
  }, {});
};

const override = (v, ...args) => (typeof v === 'function' ? v(...args) : v);

export default function SchemaForm({
  widgets = v => v,
  fields = v => v,
  uiSchema = v => v,
  ...props
}) {
  return (
    <StyledForm
      ErrorList={() => null}
      transformErrors={errors =>
        errors.map(error => {
          if (error.name === 'required') {
            error.message = 'this field is required'; // eslint-disable-line no-param-reassign
          } else {
            error.message = ''; // eslint-disable-line no-param-reassign
          }
          return error;
        })
      }
      {...props}
      widgets={override(widgets, defaultWidgets)}
      fields={override(fields, defaultFields)}
      uiSchema={override(uiSchema, createUiSchema(props.schema))}
    />
  );
}

SchemaForm._Amount = Amount;
