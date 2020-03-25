/* eslint-disable no-use-before-define */
import Color from './Color';
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
  static Intent = {
    NONE: 'none',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
  };

  static instance = () => {
    if (!Theme._instance) Theme._instance = new Theme();
    return Theme._instance;
  };

  Intent = Theme.Intent;

  constructor(variables = {}) {
    this.setVariables({ ...defaultTheme, ...variables });
  }

  getVariableValue(name, v) {
    if (/Color(?:Dark)?$/.test(name)) return Color.fromValue(v);
    return v;
  }

  setVariables(variables) {
    this.variables = {};
    Object.keys(variables).forEach(v => {
      if (!this[v]) this[v] = this.getVariableValue(v, variables[v]);
      this.variables[v] = this.getVariableValue(v, variables[v]);
    });
  }

  contrastColor({
    backgroundColor,
    colors: { light = this.textColor, dark = this.textColorDark } = {},
    threshold = this.contrastLuminanceThreshold,
  }) {
    const lightness = this.color(backgroundColor).hsl().color[2];
    return lightness < threshold ? dark : light;
  }

  color(value) {
    return Color.fromValue(value);
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
