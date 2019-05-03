/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import _Link, { navigate } from 'gatsby-link';
import { ComplexCard, FlexGrid, MenuContentWrapper } from '@wingscms/crane';
import _Content from '../../components/Content';
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

const Link = styled(_Link)`
  text-decoration: none;
  transition: all 0.1s linear;
  color: ${({ theme }) => theme.linkColor};
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  &:hover {
    color: ${({ theme }) => theme.textColor};
  }
`;

const LinksWrapper = styled.div`
  margin: 40px 0;
  display: block;
  min-height: 40px;
`;

const NavLink = props => (
  <Link style={{ display: 'inline-block', float: props.next ? 'right' : 'left' }} to={props.url}>
    {props.text}
  </Link>
);

const Links = ({ previousUrl, nextUrl }) => (
  <LinksWrapper>
    {!previousUrl ? null : <NavLink url={previousUrl} text="Previous" />}
    {!nextUrl ? null : <NavLink url={nextUrl} text="Next" next />}
  </LinksWrapper>
);

const Title = styled.h1`
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.headingColor};
  display: block;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto 20px;
  max-width: 100%;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 50px;
  }
`;

const Content = styled(_Content)`
  p:first-child {
    margin-top: 2em;
    @media screen and (min-width: 800px) {
      margin-top: 3em;
    }
  }
`;

const HighlightedArticles = styled.div`
  margin: 40px auto;
`;

export default class ArchiveDefault extends Component {
  getShareUrls = () => {
    const {
      location,
      pageContext: {
        additionalContext: { entry },
      },
    } = this.props;
    return makeShareUrls(entry.platforms, location.href || '', entry.meta);
  };

  getNavigationUrls = () => {
    const {
      pageContext: { first, last, index, pathPrefix },
    } = this.props;
    const prev = ['', pathPrefix, index === 2 ? null : index - 1].filter(e => e !== null).join('/');
    const next = ['', pathPrefix, index + 1].join('/');
    return {
      previous: first ? null : prev,
      next: last ? null : next,
    };
  };

  render() {
    const {
      pageContext: {
        group,
        additionalContext: { entry },
      },
    } = this.props;
    const { previous: previousUrl, next: nextUrl } = this.getNavigationUrls();
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper">
          <Navigation shareUrls={this.getShareUrls()} items={entry.menu && entry.menu.items} />
          <Page className="page archive">
            <Title>{entry.title}</Title>
            {entry.content ? (
              <Content className="article-body" id="article-body" content={entry.content} />
            ) : null}
            <HighlightedArticles>
              <FlexGrid
                divisions={3}
                margins={10}
                alignItems="stretch"
                style={{
                  marginLeft: '-10px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  width: 'calc(100% + 20px)',
                }}
              >
                {group &&
                  group.map(node => (
                    <ComplexCard
                      item={node}
                      key={`node${node.id}`}
                      title={node.title}
                      image={
                        node.platforms &&
                        node.platforms.facebook &&
                        node.platforms.facebook.imageUrl &&
                        node.platforms.facebook.imageUrl
                          ? node.platforms.facebook.imageUrl
                          : node.image && node.image.url
                      }
                      onClickHandler={() => {
                        navigate(node.slug);
                      }}
                      summary={
                        node.platforms && node.platforms.all && node.platforms.all.description
                      }
                      author={(node.meta && node.meta.author) || null}
                      publishDate={(node.meta && node.meta.pubDate) || null}
                      startDate={(node.schedule && node.schedule.start) || null}
                      signatureCount={node.signatureCount}
                      location={
                        node.location && node.location.name ? { name: node.location.name } : null
                      }
                      size="medium"
                      bottomBackground
                      shadow
                    />
                  ))}
              </FlexGrid>
            </HighlightedArticles>
            <Links previousUrl={previousUrl} nextUrl={nextUrl} />
          </Page>
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
