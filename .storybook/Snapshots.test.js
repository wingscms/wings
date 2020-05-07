import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import path from 'path';
import { act } from 'react-dom/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

const wait = waitTime =>
  new Promise(resolve => {
    setTimeout(resolve, waitTime);
  });

initStoryshots({
  asyncJest: true,
  test: async ({ story, context, done }) => {
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
    };

    if (!waitTime) {
      testSnapshot();
    } else {
      await act(async () => {
        await wait(waitTime);
        tree.update();
        testSnapshot();
      });
    }

    done();
  },
});
