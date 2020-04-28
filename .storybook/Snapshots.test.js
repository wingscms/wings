import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import path from 'path';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

initStoryshots({
  asyncJest: true,
  test: ({ story, context, done }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFilename = path.join(
      path.dirname(converter.getSnapshotFileName(context)),
      [context.id.split('--')[0], '.storyshot'].join(''),
    );

    const tree = mount(story.render());

    const waitTime = story.parameters.snapshotDelay;

    const testSnapshot = () => {
      if (snapshotFilename) {
        expect(toJson(tree)).toMatchSnapshot();
      }
      done();
    };

    if (!waitTime) {
      testSnapshot();
    } else {
      setTimeout(() => {
        tree.update();
        testSnapshot();
      }, waitTime);
    }
  },
});
