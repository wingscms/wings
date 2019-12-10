import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby'
import { wide, ComplexCard, FlexGrid, Loading, PaginationControls as _PaginationControls } from '@wingscms/crane';
import { useWings } from '../ctx/Wings';
import createCard from '../createCard';

const Wide = styled.div`
  ${wide};
`;

const Container = styled.div`
  margin-top:${({ theme }) => theme.largeSpacing};
  margin-bottom:${({ theme }) => theme.largeSpacing};
  @media screen and (max-width: 800px) {
    margin-top: ${({ theme }) => theme.mediumSpacing};
    margin-bottom: ${({ theme }) => theme.mediumSpacing};
  }
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: auto;
  padding: 0 20px;
`;

const PaginationControls = styled(_PaginationControls)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const getNodeQueryParams = ({ nodes = [], resourceTypes = [], type, first, after }) => {
  switch (type) {
    case 'custom':
      return {
        selector: {
          id: {
            in: nodes,
          },
        },
        first: 0,
        after: '',
      };
    default:
    case 'archive':
      return {
        selector: {
          resourceType: {
            in: resourceTypes,
          },
        },
        first,
        after,
      };
  }
};

const NodesCardView = ({ text, ...props }) => {
  console.log(props);
  const { type, resourceTypes = [], nodes: _nodes } = props;
  const wings = useWings();
  const [loading, setLoading] = useState(true);
  const [nodes, setNodes] = useState(true);
  const [pageInfo, setPageInfo] = useState({});

  const fetchNodes = ({ first = 12, after = '0' }) => {
    setLoading(true);
    wings.query(`
      query NodesCardCustom($selector: NodeSelectorInput, $first: Int, $after: String) {
        nodes(selector: $selector, first: $first, after: $after) {
          edges {
            node {
              id
              featured {
                title
                description
                image {
                  alt
                  url
                }
              }
              slug
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
            currentPage
            totalPages
          }
        }
      }
    `, getNodeQueryParams({
      type,
      nodes: _nodes.map(node => node.id),
      resourceTypes,
      first,
      after: `${after > 1 ? after - 1 : 0}`,
    })).then(res => {
      setNodes(res.nodes.edges.map(node => node.node));
      setPageInfo(res.nodes.pageInfo);
      setLoading(false);
    });
  };
  useEffect(() => fetchNodes({}), []);
  return (
    <Wide>
      <Container>
        {loading ? <Loading intent="primary" /> : (
          <FlexGrid
            divisions={4}
            margins={10}
            alignItems="stretch"
            style={{
              marginLeft: '-10px',
              marginTop: '10px',
              marginBottom: '10px',
              width: 'calc(100% + 20px)',
            }}
          >
            {nodes
              && nodes.map(node => (
                <ComplexCard
                  item={node}
                  key={`node${node.id}`}
                  title={node.featured && node.featured.title}
                  image={
                    node.featured
                    && node.featured.image
                    && node.featured.image.url
                  }
                  onClickHandler={() => {
                    navigate(node);
                  }}
                  summary={node.featured && node.featured.description}
                  size="medium"
                  bottomBackground
                  shadow
                />
              ))}
          </FlexGrid>
        )}
        {(type === 'archive' && !loading) ? <PaginationControls {...pageInfo} currentPage={pageInfo.currentPage || 1} setCurrentPage={(after) => fetchNodes({ after })} /> : null}
      </Container>
    </Wide>
  );
};

export default createCard({
  name: 'NodesCard',
  renderWith: NodesCardView,
});
