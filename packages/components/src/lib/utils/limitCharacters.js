export default function limitCharacters(str, { limit = 150, suffix, subtractSuffix }) {
  const _suffix = suffix && typeof suffix === 'string' ? suffix : '';
  const _limit = subtractSuffix ? limit - suffix.length : limit;
  return str.length < _limit ? str : `${str.substring(0, _limit + 1)}${_suffix}`;
}
