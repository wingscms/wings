/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { MenuContentWrapper } from '@wingscms/crane';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { makeShareUrls } from '../../../lib/utils';

const Page = styled.article`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: auto;
  padding: 10px;
  min-height: 100vh;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: all 0.1s linear;
  color: ${({ theme }) => theme.linkColor};
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  &:hover {
    color: ${({ theme }) => theme.textColor};
  }
`;

const NavLink = props => (
  <StyledLink
    style={{ display: 'inline-block', float: props.next ? 'right' : 'left' }}
    to={props.url}
  >
    {props.text}
  </StyledLink>
);

export default class ArticleDefault extends Component {
  constructor({
    location,
    pageContext: {
      additionalContext: { entry },
    },
  }) {
    super();
    this.state = {
      headers: [],
      shareUrls: makeShareUrls(entry.platforms, location.href || '', entry.meta || entry.data.seo),
    };
  }

  render() {
    const { entry } = this.props.pageContext.additionalContext;
    const { shareUrls } = this.state;
    const { pageContext } = this.props;
    const {
      index,
      first,
      last, // group,
    } = pageContext;
    const previousUrl = index - 1 === 1 ? '/' : `/${(index - 1).toString()}`;
    const nextUrl = `/${(index + 1).toString()}`;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="article">
          <Navigation
            chapters={this.state.headers}
            shareUrls={shareUrls}
            items={entry.menu && entry.menu.items}
          />
          <Page>
            <h1>Articles</h1>
            <div className="links">
              {first ? null : <NavLink url={previousUrl} text="Previous" />}
              {last ? null : <NavLink test={last} url={nextUrl} text="Next" next />}
            </div>
          </Page>
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
