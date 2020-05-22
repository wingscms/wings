import React, { useState } from 'react';
import { number } from '@storybook/addon-knobs/react';
import { PaginationControls } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const DefaultStoryWithHook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PaginationControls
      currentPage={currentPage}
      totalPages={number('totalPages', 10)}
      size={number('size', 3)}
      onPageChange={page => setCurrentPage(page)}
    />
  );
};

export default () => <DefaultStoryWithHook />;

export const wrapStory = paddingWrap;
