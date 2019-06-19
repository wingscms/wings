export default ({ intent, theme, defaultColor = '#dddddd' }) => {
  switch (intent) {
    case 'success':
      return theme.successColor;
    case 'warning':
      return theme.warningColor;
    case 'danger':
      return theme.dangerColor;
    case 'secondary':
      return theme.secondaryColor;
    case 'primary':
      return theme.primaryColor;
    default:
      return defaultColor;
  }
};
