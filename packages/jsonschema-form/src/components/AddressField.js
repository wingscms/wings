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

export default function AddressField({ schema, idSchema, errorSchema, onChange, ...props }) {
  console.log(props);
  const {
    properties: { postcode, number, numberAddition, street, city, state },
    country,
  } = schema;
  const [data, _setData] = useState({ postcode: '', number: -1, numberAddition: '' });
  const [result, setResult] = useState();
  const { postcode: _postcode, number: _number, numberAddition: _numberAddition } = data;

  const setData = (...args) => {
    setResult(null);
    _setData(...args);
    onChange(...args);
  };

  const updateAddress = async () => {
    const res = await fetchAddress({
      postcode: _postcode,
      number: _number,
      numberAddition: _numberAddition,
    });
    setResult({ ...res, state: res.province });
    onChange({
      postcode: _postcode,
      number: _number,
      numberAddition: _numberAddition,
      street: res.street,
      city: res.city,
      state: res.province,
      country,
    });
  };

  useEffect(() => {
    if (_postcode === '' || _number === -1) return;
    updateAddress();
  }, [_postcode, _number, _numberAddition]);

  return (
    <div>
      <Label htmlFor={idSchema.postcode.$id} label={postcode.title} required />
      <Input
        error={Object.keys(errorSchema).length}
        id={idSchema.postcode.$id}
        type="text"
        onChange={e => {
          setData({ ...data, postcode: e.target.value });
        }}
      />

      <Label htmlFor={idSchema.number.$id} label={number.title} required />
      <Input
        error={Object.keys(errorSchema).length}
        id={idSchema.number.$id}
        type="text"
        onChange={e => {
          setData({ ...data, number: parseInt(e.target.value, 10) });
        }}
      />

      <Label htmlFor={idSchema.numberAddition.$id} label={numberAddition.title} />
      <Input
        error={Object.keys(errorSchema).length}
        id={idSchema.numberAddition.$id}
        type="text"
        onChange={e => {
          setData({ ...data, numberAddition: e.target.value });
        }}
      />

      {Object.keys(errorSchema).length && (
        <ul>
          <li>address is invalid</li>
        </ul>
      )}

      <Label htmlFor={idSchema.street.$id} label={street.title} />
      <Input id={idSchema.street.$id} type="text" value={result?.street || ''} disabled />

      <Label htmlFor={idSchema.city.$id} label={city.title} />
      <Input id={idSchema.city.$id} type="text" value={result?.city || ''} disabled />

      <Label htmlFor={idSchema.state.$id} label={state.title} />
      <Input id={idSchema.state.$id} type="text" value={result?.state || ''} disabled />
    </div>
  );
}
