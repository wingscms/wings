import React, { useEffect } from 'react';
import { createCard } from '@wingscms/react';

export const CustomDataCard = (options = []) => {
  const _options = {};
  const addOption = (name, Comp) => {
    _options[name] = <Comp /> || <div />;
  };

  Object.keys(options).forEach(k => addOption(options[k].name, options[k].comp));

  return ({ data }) => {
    const Comp = options[data.type] || <div />;
    return <Comp {...data} />;
  };
};

export default createCard({
  name: 'DataCard',
  renderWith: () => {
    useEffect(
      () =>
        console.warn(
          '[hummingbird] No `DataCard` shadow found: to use the `DataCard`, shadow it in `src/@wingscms/hummingbird/cards/DataCard`',
        ),
      [],
    );
    return null;
  },
});
