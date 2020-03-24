import { configure, storiesOf, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import './styles.css';

function loadStories() {
  const r = require.context('../packages', true, /^(?:\.\/[^\/]+)\/src\/.*\.stories\.jsx?$/);
  r.keys().forEach(m => {
    console.log(m);
    const parts = m.split('/');
    const pkg = parts[1];
    const name = parts[parts.length - 1].replace(/\.stories\.jsx?/, '');

    const storyMod = r(m);
    const stories = storiesOf([pkg, name].join('/'), module).addDecorator(withKnobs);
    Object.keys(storyMod).forEach(variant => stories.add(variant, storyMod[variant]));
  });
}

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
});

configure(loadStories, module);
