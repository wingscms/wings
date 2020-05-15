import { useTheme as _useTheme, Theme as _Theme } from '@wingscms/components';

class Theme extends _Theme {
  static instance = (...args) => {
    return new Theme(...args);
  };

  get campaignFormBackgroundColor() {
    return this.variables.campaignFormBackgroundColor || this.formBackgroundColor;
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

  get chapterBackgroundColor() {
    return this.variables.chapterBackgroundColor || this.primaryColor;
  }

  get chapterItemColor() {
    return (
      this.variables.chapterItemColor ||
      this.contrastColor({
        backgroundColor: this.chapterBackgroundColor,
      })
    );
  }

  get chapterItemNumberColor() {
    return (
      this.variables.chapterItemNumberColor ||
      this.contrastColor({
        backgroundColor: this.chapterBackgroundColor,
      })
    );
  }

  get chapterIntroColor() {
    return (
      this.variables.chapterIntroColor ||
      this.contrastColor({
        backgroundColor: this.chapterBackgroundColor,
      })
    );
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
