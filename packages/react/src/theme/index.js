import { useTheme as _useTheme, Theme as _Theme } from '@wingscms/components';

class Theme extends _Theme {
  static instance = variables => {
    if (!Theme.__instance) Theme.__instance = new Theme(variables);
    return Theme.__instance;
  };

  get campaignForasdasmBackgroundColor() {
    return this.variables.campaignFormBackgroundColor || this.primaryColor;
  }
}

const getThemeInstance = theme =>
  theme instanceof Theme ? theme : Theme.instance(theme.variables);

export const t = cb => ({ theme, ...props }) => cb(getThemeInstance(theme), props);

export const useTheme = () => {
  const theme = _useTheme();
  return getThemeInstance(theme);
};
