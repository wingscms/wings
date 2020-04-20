import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const mockTypes = ['MainContainerOuter', 'FormContainer'];

initStoryshots({
  test: snapshotWithOptions(),
});
