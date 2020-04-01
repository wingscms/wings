import React from 'react';
import styled from 'styled-components';
import { Header } from '@wingscms/components/';
import Entry from './Entry';
import Content from './Content';

const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 2em;
  max-width: 760px;
  padding: 0 20px;
  @media screen and (min-width: 800px) {
    margin-top: 3em;
  }
`;

export default ({ node, ...props }) => {
  const { image: { url, caption } = {} } = node;
  return (
    <Entry {...props}>
      <Header title={node.title} imageUrl={url} imageCaption={caption} />
      <ContentWrapper>
        <Content content={node.content} />
      </ContentWrapper>
    </Entry>
  );
};
