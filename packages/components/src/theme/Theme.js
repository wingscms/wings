import Color from './Color';
import defaultTheme from './defaultTheme';

export default class Theme {
  static Intent = {
    NONE: 'none',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
  };

  static instance = (...args) => {
    return new Theme(...args);
  };

  Intent = Theme.Intent;
  defaultConfig = defaultTheme;

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

  calc(str, cb) {
    const [val, unit] = this.separateUnit(str);
    return [cb(val), unit].join('');
  }

  separateUnit(str) {
    const val = /([0-9])*/.exec(str)[0];
    const unit = str.substr(val.length, str.length - 1);
    return [val, unit];
  }

  get burgerColor() {
    return this.variables.burgerColor || this.iconColor;
  }

  get burgerHoverColor() {
    return this.variables.burgerColor || this.iconHoverColor;
  }

  get counterBackgroundColor() {
    return this.variables.counterBackgroundColor || this.backgroundColor;
  }

  get counterTextColor() {
    return this.variables.counterTextColor || this.textColor;
  }

  get drawerBackgroundColor() {
    return this.variables.drawerBackgroundColor || this.elementBackgroundColor;
  }

  get expandableBackgroundColor() {
    return this.variables.expandableBackgroundColor || this.elementBackgroundColor;
  }

  get extraLargeSpacing() {
    return this.variables.extralargeSpacing || this.calc(this.mediumSpacing, ms => ms * 4);
  }

  get extraSmallSpacing() {
    return this.variables.extraSmallSpacing || this.calc(this.mediumSpacing, ms => ms / 4);
  }

  get formBackgroundColor() {
    return this.variables.formBackgroundColor || this.primaryColor;
  }

  get formLinkTextColor() {
    return (
      this.variables.formLinkTextColor ||
      this.contrastColor({
        backgroundColor: this.formBackgroundColor,
      })
    );
  }

  get formTextColor() {
    return (
      this.variables.formTextColor ||
      this.contrastColor({
        backgroundColor: this.formBackgroundColor,
      })
    );
  }

  get headingColor() {
    return this.variables.headingColor || this.textColor;
  }

  get headingColorDark() {
    return this.variables.headingColorDark || this.textColorDark;
  }

  get iconHoverColor() {
    return this.variables.iconHoverColor || this.primaryColor;
  }

  get landingSectionBackgroundColor() {
    return this.variables.landingSectionBackgroundColor || this.primaryColor;
  }

  get landingSectionTitleColor() {
    return this.variables.landingSectionTitleColor || this.textColor;
  }

  get landingSectionTitleBackgroundColor() {
    return this.variables.landingSectionTitleBackgroundColor || null;
  }

  get largeSpacing() {
    return this.variables.largeSpacing || this.calc(this.mediumSpacing, ms => ms * 2);
  }

  get linkColor() {
    return this.variables.linkColor || this.primaryColor;
  }

  get navigationIconColor() {
    return this.variables.navigationIconColor || this.iconColor;
  }

  get navigationIconColorDark() {
    return this.variables.navigationIconColorDark || this.iconColorDark;
  }

  get navigationLanguagePickerHoverColor() {
    return this.variables.navigationLanguagePickerHoverColor || this.primaryColor;
  }

  get navigationLanguagePickerIconColor() {
    return (
      this.variables.navigationLanguagePickerIconColor ||
      this.contrastColor({
        backgroundColor: this.navigationLanguagePickerColor,
        colors: {
          light: this.navigationIconColor,
          dark: this.navigationIconColorDark,
        },
      })
    );
  }

  get navigationMenuBackgroundColor() {
    return this.variables.navigationMenuBackgroundColor || this.backgroundColor;
  }

  get progressBarColor() {
    return this.variables.progressBarColor || this.primaryColor;
  }

  get progressBarBackgroundColor() {
    return this.variables.progressBarColor || this.elementBackgroundColor;
  }

  get shareButtonBackgroundColor() {
    return this.variables.shareButtonBackgroundColor || this.primaryColor;
  }

  get shareButtonBackgroundHoverColor() {
    return this.variables.shareButtonBackgroundHoverColor || this.secondaryColor;
  }

  get shareButtonIconColor() {
    return this.variables.shareButtonIconColor || this.iconColor;
  }

  get shareButtonIconHoverColor() {
    return this.variables.shareButtonIconHoverColor || this.iconColor;
  }

  get smallSpacing() {
    return this.variables.smallSpacing || this.calc(this.mediumSpacing, ms => ms / 2);
  }

  get titleTransform() {
    return this.uppercaseTitles ? 'uppercase' : 'none';
  }
}
