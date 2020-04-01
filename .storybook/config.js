import { configure, storiesOf, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { capitalCase } from 'change-case';
import './styles.css';

function loadStories() {
  const r = require.context('../packages', true, /^(?:\.\/[^\/]+)\/src\/.*\.stories\.jsx?$/);
  r.keys().forEach(m => {
    const storyMod = r(m);
    const mSplit = m.split('/');
    const [, pkg, _, __, folder, story] = mSplit;
    if (mSplit[mSplit.length - 1] !== (story || folder) || !m.startsWith(`./${pkg}/src/components`))
      return;

    const storyNameParts = [pkg, folder, story].filter(v => !!v);
    if (storyNameParts.length === 3) storyNameParts[1] = capitalCase(storyNameParts[1]);
    storyNameParts[storyNameParts.length - 1] = storyNameParts[storyNameParts.length - 1].replace(
      /\.stories\.jsx?/,
      '',
    );
    const storyName = storyNameParts.join('/');

    const stories = storiesOf(storyName, module).addDecorator(withKnobs);
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
