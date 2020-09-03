import { renderToStaticMarkup } from 'react-dom/server';
import MobiledocReactRenderer from '..';

const tt = [
  {
    name: 'basic',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [],
      sections: [[1, 'p', [[0, [], 0, 'Hello world!']]]],
    },
    expected: '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]">Hello world!</p></div>',
  },
  {
    name: 'link',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['a', ['href', 'https://wings.dev']]],
      sections: [[1, 'p', [[0, [], 0, 'A link '], [0, [0], 1, 'Hello world!']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]">A link <a href="https://wings.dev">Hello world!</a></p></div>',
  },
  {
    name: 'bold',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['strong']],
      sections: [[1, 'p', [[0, [0], 1, 'Hello world!']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]"><strong>Hello world!</strong></p></div>',
  },
  {
    name: 'italic',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['em']],
      sections: [[1, 'p', [[0, [0], 1, 'Hello world!']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]"><em>Hello world!</em></p></div>',
  },
  {
    name: 'underline',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['u']],
      sections: [[1, 'p', [[0, [0], 1, 'Hello world!']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]"><u>Hello world!</u></p></div>',
  },
  {
    name: 'strikethrough',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['s']],
      sections: [[1, 'p', [[0, [0], 1, 'Hello world!']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]"><s>Hello world!</s></p></div>',
  },
  {
    name: 'nested markup',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['strong'], ['em']],
      sections: [[1, 'p', [[0, [], 0, 'Some '], [0, [0], 0, 'nested '], [0, [1], 2, 'markup']]]],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]">Some <strong>nested <em>markup</em></strong></p></div>',
  },
  {
    name: 'complex nested markup',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [['strong'], ['em']],
      sections: [
        [
          1,
          'p',
          [
            [0, [], 0, 'Some '],
            [0, [0], 0, 'nested '],
            [0, [1], 2, 'markup '],
            [0, [], 0, 'then normal'],
          ],
        ],
      ],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]">Some <strong>nested <em>markup </em></strong>then normal</p></div>',
  },
  {
    name: 'muiltiple paragraphs',
    md: {
      version: '0.3.0',
      atoms: [],
      cards: [],
      markups: [],
      sections: [
        [1, 'p', [[0, [], 0, 'This is the first paragraph.']]],
        [1, 'p', [[0, [], 0, 'This is the second paragraph.']]],
      ],
    },
    expected:
      '<div class="Mobiledoc"><p _mobiledocInfo="[object Object]">This is the first paragraph.</p><p _mobiledocInfo="[object Object]">This is the second paragraph.</p></div>',
  },
];

describe('Mobiledoc renderer', () => {
  describe('0.3', () => {
    describe('basic formatting', () => {
      for (let i = 0; i < tt.length; i++) {
        const t = tt[i];
        it(t.name, () => {
          const rendered = new MobiledocReactRenderer({}).render(t.md);
          expect(renderToStaticMarkup(rendered)).toBe(t.expected);
        });
      }
    });
  });
});
