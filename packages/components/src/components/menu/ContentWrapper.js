import styled from '../../lib/styled';

export default styled.div`
  width: 100vw;
  display: block;
  position: relative;
  transition: 0.2s all ease-in-out;
  &:before {
    content: '';
    z-index: -10;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.2s background-color linear;
  }
  &.chapters {
    position: fixed;
  }
  &.chaptersOpen {
    margin-left: 0;
    padding-left: 0;
    width: calc(100% + 300px);
    transition: 0.2s all ease-in-out;
  }
  &.navOpen {
    margin-left: ${props => (props.left ? '-300px' : '-300px')};
    padding-right: ${props => (props.left ? '300px' : '300px')};
    width: calc(100% + 300px);
    &:before {
      display: block;
      position: absolute;
      height: 100%;
      width: 100vw;
      top: 0;
      content: '';
      z-index: 99999;
      background-color: rgba(0, 0, 0, 0.2);
      transition: 0.2s background-color linear;
    }
  }
  &.fixed {
    height: 100vh;
    overflow: hidden;
  }
  @media screen and (max-width: 800px) {
    &.navOpen {
      margin-left: -100vw;
      padding-right: 100vw;
      width: calc(100% + 100vw);
    }
  }
`;
