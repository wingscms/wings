import color from 'color';

export default ({ backgroundColor, theme, threshold = 30 }) => {
  const lightness = color(backgroundColor).hsl().color[2];
  const textColor = lightness < threshold ? theme.colorTextLight : theme.colorText;
  return textColor;
};
