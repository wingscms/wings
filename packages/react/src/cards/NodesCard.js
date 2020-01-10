import React, { useState, useEffect, useRef } from 'react';
import styled from '../lib/styled';
import {
  wide,
  ComplexCard,
  FlexGrid,
  Loading as _Loading,
  PaginationControls as _PaginationControls,
} from '@wingscms/crane';
import useQueryString from '../hooks/queryString';
import { useWings } from '../ctx/Wings';
import createCard from '../createCard';

const Wide = styled.div`
  ${wide};
`;

const Container = styled.div`
  margin-top: ${({ theme }) => theme.largeSpacing};
  margin-bottom: ${({ theme }) => theme.largeSpacing};
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 20px 15px #fff;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Loading = styled(_Loading)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const PaginationControls = styled(_PaginationControls)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const QUERY = `
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
          ...NodeFields
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
`;

const NODE_FRAGMENT = `
  fragment NodeFields on Node {
    id
  }
`;

const scrollToTop = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: 'smooth',
  });
};

const getNodeQueryParams = ({ items, selector, type, first, after }) => {
  switch (type) {
    case 'selection':
      return {
        selector: {
          id: {
            in: items,
          },
        },
        first: 0,
        after: '',
      };
    default:
    case 'archive':
      return {
        selector,
        first,
        after,
      };
  }
};

const ItemDefault = ({ node, ...props }) => (
  <ComplexCard
    {...props}
    item={node}
    title={node.featured && node.featured.title}
    image={node.featured && node.featured.image && node.featured.image.url}
    summary={node.featured && node.featured.description}
    size="medium"
    bottomBackground
    shadow
  />
);

const NodesCardView = ({ text, ...props }) => {
  const {
    itemComponent,
    wrapItemElement = e => e,
    onNodeClick = () => {},
    nodeFragment = NODE_FRAGMENT,
    type,
    selector = {},
    items = [],
    sectionKey,
  } = props;
  const { query = {}, setQuery } = useQueryString();
  const Item = itemComponent || ItemDefault;
  const wings = useWings();
  const nodesCardContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [nodes, setNodes] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [containerHeight, setContainerHeight] = useState(0);
  const pageNumber = query[`nc${sectionKey}page`] || '1';

  const fetchNodes = async ({ first = 12, after = '0' } = {}) => {
    setContainerHeight(nodesCardContainerRef.current.offsetHeight);
    setLoading(true);

    const res = await wings
      .query(
        [QUERY, nodeFragment].join('\n'),
        getNodeQueryParams({
          type,
          items: items.map(item => item.nodeId),
          selector,
          first,
          after,
        }),
      )
      .catch(err => console.error(err));

    setNodes(res.nodes.edges.map(node => node.node));
    setPageInfo(res.nodes.pageInfo);
    setHasLoaded(true);
    setLoading(false);
    setContainerHeight(0);
  };

  useEffect(() => {
    fetchNodes({ after: `${Number(pageNumber) - 1}` });
  }, []);

  return (
    <Wide>
      <Container ref={nodesCardContainerRef} style={{ minHeight: containerHeight }}>
        {!hasLoaded ? (
          <Loading intent="primary" />
        ) : (
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
            {nodes.map(node => {
              const itemElement = (
                <Item
                  node={node}
                  onClick={e => {
                    onNodeClick(node, { event: e });
                  }}
                />
              );
              return (
                <React.Fragment key={`${node.id}`}>
                  {wrapItemElement(itemElement, { node })}
                </React.Fragment>
              );
            })}
          </FlexGrid>
        )}
        {hasLoaded && loading ? (
          <Overlay onClick={e => e.preventDefault()}>
            <Loading intent="primary" />
          </Overlay>
        ) : null}
        {type === 'archive' && hasLoaded ? (
          <PaginationControls
            hasNextPage={pageInfo.hasNextPage}
            hasPreviousPage={pageInfo.hasPreviousPage}
            totalPages={pageInfo.totalPages}
            currentPage={pageInfo.currentPage || 1}
            onPageChange={page => {
              setQuery({ [`nc${sectionKey}page`]: page });
              fetchNodes({ after: `${page > 1 ? page - 1 : 0}` });
              scrollToTop(nodesCardContainerRef.current);
            }}
          />
        ) : null}
      </Container>
    </Wide>
  );
};

export default createCard({
  name: 'NodesCard',
  renderWith: NodesCardView,
});
