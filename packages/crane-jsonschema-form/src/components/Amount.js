/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from '../lib/styled';
import NumberInput from './NumberInput';

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
    max-width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
    min-width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
  }
`;

const AmountButton = styled.div`
  height: 100%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

export default props => {
  if (!props.id) {
    console.log('No id for', props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  let { amounts = [] } = props;
  const { id, value, label, onChange = () => { }, required, schema, symbol = '€' } = props;
  if (schema && schema.amounts) {
    // eslint-disable-next-line prefer-destructuring
    amounts = schema.amounts;
  }
  return (
    <div>
      {!schema && label ? (
        <label htmlFor={id}>
          {label}
          {required ? '*' : ''}
        </label>
      ) : null}
      <InputRow amounts={amounts}>
        {amounts.map(x => (
          <AmountButton onClick={() => onChange(x)}>
            {symbol}{' '}
            {x}
          </AmountButton>
        ))}
        <NumberInput id={id} value={value || 0} onChange={onChange} />
      </InputRow>
    </div>
  );
};
