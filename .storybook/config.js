import { configure, storiesOf, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { capitalCase } from 'change-case';
import './styles.css';

function loadStories() {
  const r = require.context('../packages', true, /^(?:\.\/[^\/]+)\/src\/.*\.stories\.jsx?$/);
  r.keys().forEach(m => {
    const parts = m.split('/');
    const pkg = parts[1];
    const name = parts[parts.length - 1].replace(/\.stories\.jsx?/, '');

    const storyMod = r(m);
    const stories = storiesOf([pkg, name].join('/'), module).addDecorator(withKnobs);
    Object.keys(storyMod).forEach(variant => stories.add(capitalCase(variant), storyMod[variant]));
  });
}

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      const idA = a[0];
      const idB = b[0];
      const [componentA, storyA] = idA.split('--');
      const [componentB, storyB] = idB.split('--');

      if (componentA === componentB && storyA === 'default') return -1;
      if (componentA === componentB && storyB === 'default') return 1;
      if (idA < idB) return -1;
      if (idA > idB) return 1;
      return 0;
    },
  },
});

configure(loadStories, module);
