module.exports = `
fragment NodeFields on Wings_Node {
  id
  title
  resourceType
  slug
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
            amount
            currencyCode
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
            currencyCode
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
