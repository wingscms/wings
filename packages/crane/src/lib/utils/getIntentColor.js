export default ({ intent, theme, defaultColor = '#dddddd' }) => {
  switch (intent) {
    case 'success':
      return theme.colorSuccess;
    case 'warning':
      return theme.colorWarning;
    case 'danger':
      return theme.colorDanger;
    case 'secondary':
      return theme.colorSecondary;
    case 'primary':
      return theme.colorPrimary;
    default:
      return defaultColor;
  }
};
