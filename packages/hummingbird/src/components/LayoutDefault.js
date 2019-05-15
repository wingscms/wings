import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper as _MenuContentWrapper } from '@wingscms/crane';
import DefaultFooter from './Footer';

const Main = styled.main`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const MenuContentWrapper = styled(_MenuContentWrapper)`
  .slide-menu.chapters {
    position: fixed;
    z-index: 50;
  }
  &.chaptersOpen {
    .slide-menu.chapters {
      position: fixed;
      margin-left: 300px;
      top: 0;
      height: 100vh;
    }
  }
  @media screen and (max-width: 800px) {
    .slide-menu.chapters {
      left: -100vw;
    }
    &.chaptersOpen {
      margin-left: 100vw;
      padding-right: 100vw;
      width: calc(100% + 100vw);
      .slide-menu.chapters {
        margin-left: 100vw;
      }
    }
  }
`;
export default class Layout extends Component {
  static defaultProps = {
    footer: DefaultFooter,
  };

  render() {
    const { children, footer: Footer } = this.props;
    return (
      <React.Fragment>
        <Main>
          <MenuContentWrapper id="content-wrapper">
            {children}
            <Footer />
          </MenuContentWrapper>
        </Main>
      </React.Fragment>
    );
  }
}
