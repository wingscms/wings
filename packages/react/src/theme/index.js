import { useTheme as _useTheme, Theme as _Theme } from '@wingscms/components';

class Theme extends _Theme {
  static instance = (...args) => {
    return new Theme(...args);
  };

  get appMenuBarBackgroundColor() {
    return this.variables.appMenuBarBackgroundColor || this.appBarBackgroundColor;
  }

  get appMenuBarBurgerColor() {
    return (
      this.variables.appMenuBarBurgerColor ||
      this.contrastColor({
        colors: { light: this.burgerColor, dark: this.burgerColorDark },
        backgroundColor: this.appMenuBarBackgroundColor,
      })
    );
  }

  get appMenuBarBurgerHoverColor() {
    return this.variables.appMenuBarBurgerHoverColor || this.primaryColor;
  }

  get appMenuButtonBackgroundColor() {
    return this.variables.appMenuButtonBackgroundColor || this.primaryColor;
  }

  get appMenuButtonBackgroundHoverColor() {
    return this.variables.appMenuButtonBackgroundHoverColor || null;
  }

  get appMenuButtonTextColor() {
    return this.variables.appMenuButtonTextColor || null;
  }

  get appMenuButtonTextHoverColor() {
    return this.variables.appMenuButtonTextHoverColor || null;
  }

  get appMenuDrawerBackgroundColor() {
    return this.variables.appMenuDrawerBackgroundColor || this.drawerBackgroundColor;
  }

  get appMenuDrawerBurgerColor() {
    return (
      this.variables.appMenuDrawerBurgerColor ||
      this.contrastColor({
        colors: { light: this.burgerColor, dark: this.burgerColorDark },
        backgroundColor: this.appMenuDrawerBackgroundColor,
      })
    );
  }

  get appMenuDrawerBurgerHoverColor() {
    return this.variables.appMenuDrawerBurgerHoverColor || this.primaryColor;
  }

  get appMenuDrawerTextColor() {
    return (
      this.variables.appMenuDrawerTextColor ||
      this.contrastColor({
        backgroundColor: this.appMenuDrawerBackgroundColor,
      })
    );
  }

  get campaignFormBackgroundColor() {
    return this.variables.campaignFormBackgroundColor || this.formBackgroundColor;
  }

  get campaignFormButtonBackgroundColor() {
    return this.variables.campaignFormButtonBackgroundColor || null;
  }

  get campaignFormButtonBackgroundHoverColor() {
    return this.variables.campaignFormButtonBackgroundHoverColor || null;
  }

  get campaignFormButtonTextColor() {
    return this.variables.campaignFormButtonTextColor || null;
  }

  get campaignFormButtonTextHoverColor() {
    return this.variables.campaignFormButtonTextHoverColor || null;
  }

  get campaignFormLinkLineColor() {
    return this.variables.campaignFormLinkLineColor || this.secondaryColor;
  }

  get campaignFormLinkTextColor() {
    return this.variables.campaignFormLinkTextColor || this.formLinkTextColor;
  }

  get campaignFormTextColor() {
    return this.variables.campaignFormTextColor || this.formTextColor;
  }

  get campaignPropositionBackgroundColor() {
    return this.variables.campaignPropositionBackgroundColor || this.surfaceBackgroundColor;
  }

  get testimonialBackgroundColor() {
    return this.variables.testimonialBackgroundColor || this.surfaceBackgroundColor;
  }
}

const getThemeInstance = theme => {
  switch (true) {
    case theme instanceof Theme:
      return theme;
    case theme instanceof _Theme:
      return Theme.instance(theme.variables);
    default:
      return Theme.instance(theme);
  }
};

export const t = cb => ({ theme, ...props }) => cb(getThemeInstance(theme), props);

export const useTheme = () => {
  const theme = _useTheme();
  return getThemeInstance(theme);
};
