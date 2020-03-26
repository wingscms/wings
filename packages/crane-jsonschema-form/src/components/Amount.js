import React from 'react';
import styled from '../lib/styled';
import { default as _NumberInput } from './NumberInput';

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
    max-width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
    min-width: ${({ amounts }) => `${100 / (amounts.length + 1.5)}%`};
  }
`;

const NumberInputSymbol = styled.div`
  position: relative;
  &:before {
    color: #000;
    content: '${({ symbol }) => symbol}';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const NumberInput = styled(_NumberInput)`
  padding-left: 28px;
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
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  let { amounts = [] } = props;
  const { id, value, label, min = 0, onChange = () => {}, required, schema, symbol = '€' } = props;
  amounts.concat([value]).forEach(a => {
    if (typeof a !== 'number') {
      throw new Error(`props value/amounts should only be numbers`);
    }
  });
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
            {symbol} {x / 100}
          </AmountButton>
        ))}
        <NumberInputSymbol symbol={symbol}>
          <NumberInput
            id={id}
            value={(value > min ? value : min) / 100}
            onChange={v => onChange((v > min ? v : min) * 100)}
          />
        </NumberInputSymbol>
      </InputRow>
    </div>
  );
};
