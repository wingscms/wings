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
