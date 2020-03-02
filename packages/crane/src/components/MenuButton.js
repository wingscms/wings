import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: ${({ active }) => (active ? '-300px' : '0')};
  top: 8px;
  z-index: 3000;
  @media screen and (max-width: 1250px) {
    position: relative;
    display: inline-block;
    float: right;
  }
  @media screen and (max-width: 800px) {
    top: 0;
    right: ${({ active }) => (active ? '-100vw' : '0')};
  }
`;
