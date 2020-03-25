import React, { useState } from 'react';
import { number } from '@storybook/addon-knobs/react';
import { PaginationControls } from '..';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = number('total pages', 5);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return (
    <PaginationControls
      style={{ width: '100%', display: 'flex' }}
      hasNextPage={hasNextPage}
      hasPreviousPage={hasPreviousPage}
      totalPages={totalPages}
      currentPage={currentPage || 1}
      onPageChange={setCurrentPage}
      size={number('size', 3)}
    />
  );
};
