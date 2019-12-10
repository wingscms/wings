import React from 'react';
import styled from 'styled-components';
import { default as _Button } from './Button';

const Button = styled(_Button)`
  font-size: .6em;
  padding: 10px;
`;

const getPageNumbers = ({ current, total, size: maxSize = 7 }) => {
  const size = total < maxSize ? total : maxSize;
  const margin = Math.floor(size / 2);
  const shift = !(total <= maxSize);
  const first =
    (shift &&
      (total - current < margin
        ? total - margin * 2
        : current > margin
          ? current - margin
          : 1)) ||
    1;
  return new Array(size).fill(0).map((_, i) => first + i);
};

export default ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  setCurrentPage,
  totalPages = 0,
  ...props
}) => {
  console.log({ currentPage, hasNextPage, hasPreviousPage, setCurrentPage, totalPages });
  const nextPage = () => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage < 2) return;
    setCurrentPage(currentPage - 1);
  };

  const firstPage = () => setCurrentPage(1);

  const lastPage = () => setCurrentPage(totalPages);

  const goToPage = n => setCurrentPage(n);

  return (
    <div {...props}>
      <Button
        onClick={firstPage}
        disabled={!hasPreviousPage}
      >
        first
      </Button>
      <Button
        intent="primary"
        onClick={prevPage}
        disabled={!hasPreviousPage}
        icon="chevron-left"
      >
        prev
      </Button>
      {getPageNumbers({
        current: currentPage,
        total: totalPages,
      }).map(n => (
        <Button intent={n === currentPage ? 'primary' : null} onClick={() => goToPage(n)}>
          {n}
        </Button>
      ))}
      <Button
        intent="primary"
        onClick={nextPage}
        disabled={!hasNextPage}
        icon="chevron-right"
      >
        next
      </Button>
      <Button
        onClick={lastPage}
        disabled={!hasNextPage}
        icon="double-chevron-right"
      >
        last
      </Button>
    </div>
  );
};
