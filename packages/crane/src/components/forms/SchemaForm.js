import React from 'react';
import styled from '../../lib/styled';
import Form from 'react-jsonschema-form';
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

const StyledForm = styled(Form)`
  fieldset {
    border: 0;
  }
  .form-group {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const defaultWidgets = {
  AmountWidget: Amount,
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

export default (props) => {
  const { children } = props;
  let { widgets = {} } = props;

  widgets = {
    ...defaultWidgets,
    ...widgets,
  };
  return (
    <StyledForm
      ErrorList={() => null}
      transformErrors={errors =>
        errors.map((error) => {
          if (error.name === 'required') {
            error.message = 'this field is required'; // eslint-disable-line no-param-reassign
          } else {
            error.message = ''; // eslint-disable-line no-param-reassign
          }
          return error;
        })
      }
      {...props}
      widgets={widgets}
    >
      {children}
    </StyledForm>
  );
};
