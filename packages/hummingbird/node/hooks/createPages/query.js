module.exports = `
fragment NodeFields on Wings_Node {
  id
  title
  resourceType
  slug
  featured {
    title
    description
    image {
      url
    }
  }
  locale {
    id
    name
    primary
  }
  image {
    id
    name
    caption
    alt
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
  nodeType
  platforms {
    search {
      title
      description
    }
    facebook {
      title
      description
      image {
        url
      }
    }
    twitter {
      title
      description
      image {
        url
      }
    }
    whatsapp {
      text
    }
    meta {
      tag
      attributes {
        key
        value
      }
    }
  }
}

fragment CampaignFields on Wings_Campaign {
  intro
  description
  submissionSchema
  settings {
    legal {
      terms {
        url
      }
      privacyPolicy {
        url
      }
    }
  }
}

{
  wings {
    articles: entries(selector: { typeId: { eq: "article" } }, first: 0) {
      edges {
        node {
          ...NodeFields
          content
          type {
            id
          }
        }
      }
    }
    pages: entries(selector: { typeId: { eq: "page" } }, first: 0) {
      edges {
        node {
          ...NodeFields
          content
          type {
            id
          }
        }
      }
    }
    events(first: 0) {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
          schedule {
            start
            end
          }
          location {
            name
            street
            city
            zip
            country
          }
          fee {
            amount {
              amount
              currency {
                id
                name
                symbol
              }
            }
          }
          attendeeCount
        }
      }
    }
    signups(first: 0) {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
        }
      }
    }
    petitions(first: 0) {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
          signatureCount
          signatureGoal
        }
      }
    }
    fundraisers(first: 0) {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
          target {
            amount
            currency {
              id
              name
              symbol
            }
          }
          amounts {
            options {
              amount {
                amount
                currency {
                  id
                  name
                  symbol
                }
              }
            }
          }
          raised {
            amount
            currency {
              id
              name
              symbol
            }
          }
          paymentMethods {
            id
            title
            icons {
              url
            }
          }
        }
      }
    }
    currentApp {
      ... on Wings_WebApp {
        home {
          node {
            id
          }
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
      }
    }
  }
  site {
    siteMetadata {
      siteTitle
      siteUrl
    }
  }
}
`;
