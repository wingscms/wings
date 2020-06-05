import React, { useState, useEffect } from 'react';
import Input from '../lib/components/Input';

const debounce = (fn, t = 1000) => {
  let timeout;
  let firstRun = true;
  return (...args) =>
    new Promise((r, rej) => {
      clearTimeout(timeout);
      timeout = setTimeout(
        async () => {
          try {
            const res = await fn(...args);
            r(res);
            firstRun = false;
          } catch (e) {
            rej(e);
          }
        },
        firstRun ? 0 : t,
      );
    });
};

const fetchAddress = debounce(async ({ postcode, number }) => {
  const res = await fetch('https://api.wings.dev/_/validate-postcode', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      postcode,
      number,
    }),
  });
  return res.json();
});

export default function AddressField({ schema }) {
  console.log(schema);
  const {
    properties: { postcode, number, numberAddition, street, city, state },
  } = schema;
  const [data, _setData] = useState({ postcode: '', number: -1, numberAddition: '' });
  const [result, setResult] = useState();
  const { postcode: _postcode, number: _number, numberAddition: _numberAddition } = data;

  const setData = (...args) => {
    setResult(null);
    _setData(...args);
  };

  const updateAddress = async () => {
    const res = await fetchAddress({
      postcode: _postcode,
      number: _number,
      numberAddition: _numberAddition,
    });
    setResult({ ...res, state: res.province });
  };

  useEffect(() => {
    if (_postcode === '' || _number === -1) return;
    updateAddress();
  }, [_postcode, _number, _numberAddition]);

  return (
    <div>
      <label>
        {postcode.title}
        {}
      </label>
      <Input type="text" onChange={e => setData({ ...data, postcode: e.target.value })} />

      <label>{number.title}</label>
      <Input
        type="text"
        onChange={e => setData({ ...data, number: parseInt(e.target.value, 10) })}
      />

      <label>{numberAddition.title}</label>
      <Input type="text" onChange={e => setData({ ...data, numberAddition: e.target.value })} />

      <label>{street.title}</label>
      <Input type="text" disabled value={result?.street || ''} />

      <label>{city.title}</label>
      <Input type="text" disabled value={result?.city || ''} />

      <label>{state.title}</label>
      <Input type="text" disabled value={result?.state || ''} />
    </div>
  );
}
