import React, { useEffect, useState } from 'react';
import { Article } from '@wingscms/hummingbird';
import qs from 'qs';
import wings from '../../data/wings';

const QUERY = `
  query Article($id: String!) {
    entry(id: $id) {
      id
      slug
      content
      type {
        id
      }
      title
      image {
        id
        name
        key
        url
      }
      meta {
        key
        value
      }
      data {
        key
        data
      }
      menu {
        id
        name
        items {
          text
          url
          items {
            text
            url
          }
        }
      }
      status
      platforms {
        all {
          title
          description
          imageUrl
        }
        facebook {
          title
          description
          imageUrl
        }
        twitter {
          title
          description
          imageUrl
        }
        whatsapp {
          text
        }
      }
    }
  }
`;

export default (props) => {
  const {
    location: { search },
  } = props;
  const [node, setNode] = useState({ translations: [] });
  const [shouldFetch, setShouldFetch] = useState(true);
  const fetchNode = async () => {
    if (!search) return;
    const params = qs.parse(props.location.search.replace('?', ''));
    const res = await wings.query(QUERY, { id: params.id });
    setNode(res.entry);
    setShouldFetch(false);
    setTimeout(() => setShouldFetch(true), 1000);
  };
  useEffect(() => {
    if (shouldFetch) fetchNode();
    setShouldFetch(false);
  }, [shouldFetch]);

  return (
    <Article {...props} pageContext={{ ...props.pageContext, node, headers: [], preview: true }} />
  );
};
