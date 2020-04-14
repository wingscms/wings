import React from 'react';
import styled from 'styled-components';
import { Header } from '@wingscms/components';
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

export default ({ children, node, headerType, ...props }) => {
  const { image, title, content } = node;
  const { url, caption } = image || {};
  return (
    <div {...props}>
      <Header title={title} imageUrl={url} imageCaption={caption} type={headerType} />
      <ContentWrapper>
        <Content content={content} />
      </ContentWrapper>
      {children}
    </div>
  );
};
