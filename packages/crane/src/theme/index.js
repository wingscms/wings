/* eslint-disable no-use-before-define */
import color from 'color';
import defaultTheme from './defaultTheme';
import { separateUnit } from '../lib/utils';
import { useTheme as _useTheme } from '../lib/styled';

export const t = cb => ({ theme, ...props }) =>
  cb(theme instanceof Theme ? theme : Theme.instance(), props);

export const useTheme = () => {
  const theme = _useTheme();
  return theme instanceof Theme ? theme : Theme.instance();
};

export default class Theme {
  static instance = () => {
    if (!Theme._instance) Theme._instance = new Theme();
    return Theme._instance;
  };

  constructor(variables = {}) {
    this.setVariables({ ...defaultTheme, ...variables });
  }

  setVariables(variables) {
    this.variables = {};
    Object.keys(variables).forEach(v => {
      if (!this[v]) this[v] = variables[v];
      this.variables[v] = variables[v];
    });
  }

  Intent = {
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    SECONDARY: 'secondary',
    PRIMARY: 'primary',
    NONE: 'none',
  };

  contrastColor({
    backgroundColor,
    colors: { light = this.textColor, dark = this.textColorDark } = {},
    threshold = this.contrastLuminanceThreshold,
  }) {
    const lightness = color(backgroundColor).hsl().color[2];
    return lightness < threshold ? dark : light;
  }

  intentColor(intent) {
    switch (intent) {
      case this.Intent.SUCCESS:
        return this.successColor;
      case this.Intent.WARNING:
        return this.warningColor;
      case this.Intent.DANGER:
        return this.dangerColor;
      case this.Intent.SECONDARY:
        return this.secondaryColor;
      case this.Intent.PRIMARY:
        return this.primaryColor;
      default:
      case this.Intent.NONE:
        return this.noneColor;
    }
  }

  get largeSpacing() {
    return (
      this.variables.largeSpacing
      || `${separateUnit(this.mediumSpacing)[0] * 2}${separateUnit(this.mediumSpacing)[1]}`
    );
  }

  get linkColor() {
    return this.variables.linkColor || this.primaryColor;
  }

  get titleTransform() {
    return this.uppercaseTitles ? 'uppercase' : 'none';
  }
}
