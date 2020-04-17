import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const mockTypes = ['MainContainerOuter', 'FormContainer'];

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: element => {
      console.log(element);
      // if (element.type === TextareaThatUsesRefs) {
      //   return document.createElement('textarea');
      // }
    },
  }),
});
