import color from 'color';

export default ({ backgroundColor, colors, threshold = 50 }) => {
  const lightness = color(backgroundColor).hsl().color[2];
  const contrastColor = lightness < threshold ? colors.dark : colors.light;
  return contrastColor;
};
