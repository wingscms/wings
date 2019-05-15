import React from 'react';
import { ComplexCard, SimpleCard, FlexGrid } from '@wingscms/crane';
import { mediaUrl } from '@wingscms/sdk';
import { navigate } from 'gatsby-link';
import styled from 'styled-components';

const HighlightedArticles = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: auto;
  padding: 10px;
  margin: ${({ image }) => (image ? '-300px auto 40px auto' : '0 auto 40px auto')};
`;

export default ({ entry, loop, featured, divisions }) => (
  <HighlightedArticles image={entry.image && entry.image.url}>
    {featured &&
      featured.map(node => (
        <SimpleCard
          item={node}
          key={`node${node.id}`}
          title={node.title}
          image={
            node.platforms &&
            node.platforms.facebook &&
            node.platforms.facebook.imageUrl &&
            node.platforms.facebook.imageUrl
              ? mediaUrl(node.platforms.facebook.imageUrl, { width: 625 })
              : node.image && node.image.url && mediaUrl(node.image.url, { width: 625 })
          }
          onClickHandler={() => {
            if (node.meta.featuredUrl) {
              window.location.assign(node.meta.featuredUrl);
            } else {
              if (node.externalLink) {
                window.location.assign(node.path ? node.path : node.slug);
              }
              navigate(node.path ? node.path : node.slug);
            }
          }}
          summary={node.platforms && node.platforms.all && node.platforms.all.description}
          author={node.meta && node.meta.author ? node.meta.author : null}
          publishDate={node.meta && node.meta.pubDate ? node.meta.pubDate : null}
          startDate={node.schedule && node.schedule.start ? node.schedule.start : null}
          signatureCount={node.signatureCount}
          signatureMax={node.meta && node.meta.signatureMax ? node.meta.signatureMax : null}
          location={node.location}
          size="large"
          bottomBackground
          shadow
        />
      ))}
    <FlexGrid
      divisions={divisions || 3}
      margins={10}
      alignItems="stretch"
      style={{
        marginLeft: '-10px',
        marginTop: '10px',
        marginBottom: '10px',
        width: 'calc(100% + 20px)',
      }}
    >
      {loop &&
        loop.map(node => (
          <ComplexCard
            item={node}
            key={`node${node.id}`}
            title={node.title}
            image={
              node.platforms &&
              node.platforms.facebook &&
              node.platforms.facebook.imageUrl &&
              node.platforms.facebook.imageUrl
                ? mediaUrl(node.platforms.facebook.imageUrl, { width: 625 })
                : node.image && node.image.url && mediaUrl(node.image.url, { width: 625 })
            }
            onClickHandler={() => {
              if (node.meta.featuredUrl) {
                window.location.href = node.meta.featuredUrl;
              } else {
                if (node.externalLink) {
                  window.location.assign(node.path ? node.path : node.slug);
                }
                navigate(node.path ? node.path : node.slug);
              }
            }}
            summary={node.platforms.all.description}
            author={node.meta && node.meta.author ? node.meta.author : null}
            publishDate={node.meta && node.meta.pubDate ? node.meta.pubDate : null}
            startDate={(node.schedule && node.schedule.start) || null}
            signatureCount={node.signatureCount}
            location={node.location && node.location.name ? { name: node.location.name } : null}
            size="medium"
            bottomBackground
            shadow
          />
        ))}
    </FlexGrid>
  </HighlightedArticles>
);
