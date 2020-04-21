import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

initStoryshots({
  asyncJest: true,
  test: ({ story, context, done }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);
    const storyElement = story.render();

    const tree = shallow(storyElement);

    const waitTime = story.parameters.snapshotDelay;

    // TODO: pretty html
    const testSnapshot = () => {
      if (snapshotFilename) {
        expect(tree.html()).toMatchSpecificSnapshot(snapshotFilename);
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
