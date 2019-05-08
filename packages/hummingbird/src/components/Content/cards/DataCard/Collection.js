import React, { Component } from 'react';
import styled from 'styled-components';
import wings from '../../../../data/wings';
import HighlightedContent from '../../../HighlightedContent';
import { ensureNodeFields, patchI18n } from '../../../../../node/utils';

import wide from '../../../../styles/wide';

const { GATSBY__TEMP_I18N_DEFAULT_LOCALE: defaultLocale = 'en' } = process.env;

const processNodes = (_nodes) => {
  let nodes = _nodes.map(ensureNodeFields);
  nodes = patchI18n(nodes, defaultLocale);
  return nodes;
};

const CollectionWrapper = styled.div`
  ${wide};
  > * {
    display: block;
    width: 100%;
    max-width: 1160px;
    margin: 80px auto;
  }
`;

export default class EntryCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: [],
    };
  }

  componentWillMount() {
    wings
      .query(
        `query {
        ${this.props.items.map((x, i) =>
    (x.id || typeof x === 'string'
      ? `
          item${i}: entry(id: "${x.id || x}") {
            id
            title
            type {
              id
            }
            slug
            image {
              name
              id
              url
              alt
              caption
            }
            meta {
              key
              value
            }
            data {
              key
              data
            }
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
            createdAt
            updatedAt
          }
        `
      : ''),
  )}}`,
      )
      .then((res) => {
        const data = [];
        this.props.items.map((x, i) => {
          if (x.id || typeof x === 'string') {
            data.push(res[`item${i}`]);
          } else if (typeof x === 'object' && x.type === 'custom') {
            data.push({
              title: x.title,
              platforms: {
                all: {
                  description: x.summary,
                },
              },
              image: {
                name: x.image,
                url: x.image,
                id: x.image,
                alt: x.image,
                caption: '',
              },
              slug: x.url,
              externalLink: x.externalLink,
              type: 'custom',
            });
          }
          return null;
        });
        this.setState({ loop: processNodes(data) });
      });
  }

  render() {
    const { loop } = this.state;
    return (
      <CollectionWrapper>
        <HighlightedContent entry={{}} loop={loop} divisions={3} />
      </CollectionWrapper>
    );
  }
}
