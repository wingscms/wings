import React, { useState, useEffect } from "react";

const debounce = (fn, t = 1000) => {
  let timeout;
  let firstRun = true;
  return (...args) => new Promise((r, rej) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const res = await fn(...args);
        r(res);
        firstRun = false;
      } catch (e) {
        rej(e);
      }
    }, firstRun ? 0 : t);
  });
};

const fetchAddress = debounce(async ({ postcode, housenumber }) => {
  const res = await fetch("https://api.wings.dev/_/validate-postcode", {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      postcode,
      number: housenumber,
    }),
  });
  console.log(res);
  return res.json();
});


export default function AddressField(props) {
  const [data, _setData] = useState({ postcode: "", housenumber: -1 });
  const [result, setResult] = useState();
  const { postcode, housenumber } = data;
  
  const setData = (...args) => {
    setResult(null);
    _setData(...args);
  };

  const updateAddress = async () => {
    const res = await fetchAddress({ postcode, housenumber });
    setResult({...res, state: res.province});
  };

  useEffect(() => {
    if (postcode === "" || housenumber === -1) return;
    updateAddress();
  }, [postcode, housenumber]);
  console.log(result);
  return (
    <div>
      <div>
        postcode
        <input
          type="text"
          onChange={(e) => setData({ ...data, postcode: e.target.value })}
        />
      </div>

      <div>
        house
        <input
          type="text"
          onChange={(e) =>
            setData({ ...data, housenumber: parseInt(e.target.value, 10) })
          }
        />
      </div>

      <div>
        street
        <input
          type="text"
          disabled
          value={result?.street || ''}
        />
      </div>
      <div>
        city
        <input
          type="text"
          disabled
          value={result?.city || ''}
        />
      </div>
      <div>
        state
        <input
          type="text"
          disabled
          value={result?.state || ''}
        />
      </div>
    </div>
  );
}
