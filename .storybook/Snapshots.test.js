import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const mockTypes = ['MainContainerOuter', 'FormContainer'];

initStoryshots({
  test: snapshotWithOptions(),
});

// {
//   createNodeMock: element => {

//     // if (element.type === TextareaThatUsesRefs) {
//     //   return document.createElement('textarea');
//     // }
//   },
// }
