import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import _Button from './Button';

const Button = styled(_Button)`
  font-size: 0.8em;
  padding: 10px 15px;
  border-radius: 0;
`;

const ButtonGroup = styled.div`
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
`;

const getPageNumbers = ({ current, total, size: maxSize = 3 }) => {
  const size = total < maxSize ? total : maxSize;
  const margin = Math.floor(size / 2);
  const shift = !(total <= maxSize);
  const first =
    (shift &&
      (total - current < margin ? total - margin * 2 : current > margin ? current - margin : 1)) ||
    1;
  return new Array(size).fill(0).map((_, i) => first + i);
};

export default ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
  totalPages = 0,
  size,
  ...props
}) => {
  const nextPage = () => {
    if (totalPages && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage < 2) return;
    onPageChange(currentPage - 1);
  };

  const firstPage = () => onPageChange(1);

  const lastPage = () => onPageChange(totalPages);

  const goToPage = n => onPageChange(n);

  return (
    <div {...fP(props)}>
      <ButtonGroup>
        <Button onClick={firstPage} disabled={!hasPreviousPage}>
          &lt;&lt;
        </Button>
        <Button intent="primary" onClick={prevPage} disabled={!hasPreviousPage}>
          &lt;
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        {getPageNumbers({
          current: currentPage,
          total: totalPages,
          size,
        }).map((n, i) => (
          <Button
            key={`pagination-page-${i}`}
            intent={n === currentPage ? 'primary' : null}
            onClick={() => {
              if (n === currentPage) return;
              goToPage(n);
            }}
          >
            {n}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        <Button intent="primary" onClick={nextPage} disabled={!hasNextPage}>
          &gt;
        </Button>
        <Button onClick={lastPage} disabled={!hasNextPage}>
          &gt;&gt;
        </Button>
      </ButtonGroup>
    </div>
  );
};
