import color from 'color';

export default ({ backgroundColor, theme, threshold = 30 }) => {
  const lightness = color(backgroundColor).hsl().color[2];
  const contrastColor = lightness < threshold ? theme.colorTextDark : theme.colorText;
  return contrastColor;
};
