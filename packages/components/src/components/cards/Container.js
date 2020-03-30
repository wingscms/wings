import styled from '../../lib/styled';

export default styled.div`
  display: flex;
  position: relative;
  box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.2)' : 'none')};
  background-color: #fff;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => `${borderRadius || 4}px`};
  &.medium {
    padding-top: 130%;
  }
  &.large {
    padding-top: 36%;
    @media screen and (max-width: 645px) {
      padding-top: 130%;
    }
  }
`;
