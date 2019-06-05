export default ({ intent, theme }) => {
  let color;
  switch (intent) {
    case 'success':
      color = theme.colorSuccess;
      break;
    case 'warning':
      color = theme.colorWarning;
      break;
    case 'danger':
      color = theme.colorDanger;
      break;
    case 'primary':
      color = theme.colorPrimary;
      break;
    case 'none':
    default:
      color = theme.colorSecondary;
  }
  return color;
};
