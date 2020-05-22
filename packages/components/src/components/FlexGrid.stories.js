import React from 'react';
import { number, select } from '@storybook/addon-knobs/react';
import styled from '../lib/styled';
import { FlexGrid } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const Child = styled.div`
  display: block;
  height: 200px;
  background-color: #999;
`;

const props = () => ({
  margins: number('margins', 5),
  divisions: number('divisions', 4),
  tabletDivisions: number('tabletDivisions', 2),
  mobileDivisions: number('mobileDivisions', 1),
  justifyContent: select('justifyContent', FlexGrid.JustifyContent, FlexGrid.JustifyContent.CENTER),
  alignItems: select('alignItems', FlexGrid.AlignItems, FlexGrid.AlignItems.MIDDLE),
});

export default () => {
  // eslint-disable-next-line prefer-spread
  const exampleChildren = Array.apply(null, Array(number('exampleChildren', 4))).map(() => (
    <Child />
  ));

  return <FlexGrid {...props()}>{exampleChildren}</FlexGrid>;
};

export const wrapStory = paddingWrap;
