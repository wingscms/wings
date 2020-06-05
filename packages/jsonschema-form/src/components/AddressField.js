import React, { useState, useEffect } from 'react';
import Input from '../lib/components/Input';
import Label from '../lib/components/Label';

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

export default function AddressField({ schema, ...props }) {
  console.log(props);
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
      <Label htmlFor={''} label={postcode.title} required />
      <Input type="text" onChange={e => setData({ ...data, postcode: e.target.value })} />

      <Label htmlFor={''} label={number.title} required />
      <Input
        type="text"
        onChange={e => setData({ ...data, number: parseInt(e.target.value, 10) })}
      />

      <Label htmlFor={''} label={numberAddition.title} />
      <Input type="text" onChange={e => setData({ ...data, numberAddition: e.target.value })} />

      <Label htmlFor={''} label={street.title} />
      <Input type="text" disabled value={result?.street || ''} />

      <Label htmlFor={''} label={city.title} />
      <Input type="text" disabled value={result?.city || ''} />

      <Label htmlFor={''} label={state.title} />
      <Input type="text" disabled value={result?.state || ''} />
    </div>
  );
}
