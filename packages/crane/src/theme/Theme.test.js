import Theme from './index';

describe('Theme.separateUnit', () => {
  const theme = new Theme({ mediumSpacing: '3rem' });
  it('should separate the unit from the value and return an array', () => {
    expect(theme.separateUnit(theme.mediumSpacing)).toEqual(['3', 'rem']);
    expect(theme.separateUnit('5rem')).toEqual(['5', 'rem']);
    expect(theme.separateUnit('79%')).toEqual(['79', '%']);
  });
});

describe('Theme.calc', () => {
  const theme = new Theme({ mediumSpacing: '3rem' });
  it('should separate the unit from the value and return an array', () => {
    expect(theme.calc(theme.mediumSpacing, val => val * 2)).toEqual('6rem');
    expect(theme.calc('10px', val => val / 2)).toEqual('5px');
    expect(theme.calc('60%', val => val / 4)).toEqual('15%');
  });
});
