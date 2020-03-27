const { default: defaultTheme } = require('./defaultTheme');
const { default: Color } = require('./Color');
const { default: Theme } = require('./index.js');

describe('Theme', () => {
  it('should be instantiated with default theme values', () => {
    const theme = new Theme();
    Object.keys(defaultTheme).forEach(v => {
      expect(theme[v]).toEqual(
        /Color(?:Dark)?$/.test(v) ? new Color(defaultTheme[v]) : defaultTheme[v],
      );
    });
  });
});

describe('Theme.separateUnit', () => {
  const theme = new Theme();
  it('should separate the unit from the value and return an array', () => {
    expect(theme.separateUnit(theme.mediumSpacing)).toEqual(['40', 'px']);
    expect(theme.separateUnit('5rem')).toEqual(['5', 'rem']);
    expect(theme.separateUnit('79%')).toEqual(['79', '%']);
  });
});
