import qs from 'qs';

export default () => {
  const query = qs.parse(
    typeof window === 'undefined' ? '' : document.location.search.replace('?', ''),
  );
  const updateQuery = q => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(history.state, null, ['?', qs.stringify(q)].join(''));
  };
  return {
    query,
    updateQuery,
    setQuery(q) {
      updateQuery({
        ...query,
        ...q,
      });
    },
  };
};
