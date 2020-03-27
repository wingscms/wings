const Color = require('./Color').default;

describe('Color.fromValue()', () => {
  const tests = [
    {
      description: 'should return null if no value provided',
      input: undefined,
      expected: null,
    },
    {
      description: 'should return input if input is Color instance provided',
      input: new Color('#ff0000'),
      expected: new Color('#ff0000'),
    },
    {
      description: 'should return new Color instance if input is color string',
      input: '#ff0000',
      expected: new Color('#ff0000'),
    },
  ];
  tests.forEach(test => {
    it(test.description, () => {
      expect(Color.fromValue(test.input)).toEqual(test.expected);
    });
  });
});

describe('Color.toString()', () => {
  it('should return hex value of color', () => {
    expect(new Color('rgb(255, 0, 0)').toString()).toEqual('#FF0000');
    expect(`${new Color('rgb(255, 0, 0)')}`).toEqual('#FF0000');
  });
});
