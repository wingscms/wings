import styled from 'styled-components';

export default styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor || 'transparent'};
`;
