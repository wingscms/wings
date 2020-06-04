import styled, { css } from '../styled';

export default styled.input`
  font-size: inherit;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 100%;
  background-color: #fff;
  &:disabled {
    background-color: #eee;
    color: #555;
    cursor: not-allowed;
  }
  ${({ inputStyles }) => inputStyles || ''} &[type='color'] {
    min-height: 36px;
  }
  ${({ error }) =>
    !error
      ? null
      : css`
          background-color: #ffcfcf;
        `};
`;
