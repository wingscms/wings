import { useTheme as _useTheme } from '../lib/styled';
export { default } from './Theme';

export const t = cb => ({ theme, ...props }) =>
  cb(theme instanceof Theme ? theme : Theme.instance(), props);

export const useTheme = () => {
  const theme = _useTheme();
  return theme instanceof Theme ? theme : Theme.instance();
};
