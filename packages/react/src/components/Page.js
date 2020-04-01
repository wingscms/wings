import React from 'react';
import styled from 'styled-components';
import Entry from './Entry';
import Content from './Content';

import Header from './Header';

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
  return (
    <Entry {...props}>
      <Header title={node.title} image={node.image} />
      <ContentWrapper>
        <Content content={node.content} />
      </ContentWrapper>
    </Entry>
  );
};
