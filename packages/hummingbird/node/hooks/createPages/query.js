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
    articles: entries(type: "article") {
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
    pages: entries(type: "page") {
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
    events {
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
    signups {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
        }
      }
    }
    petitions {
      edges {
        node {
          ...NodeFields
          ...CampaignFields
          signatureCount
          signatureGoal
        }
      }
    }
    fundraisers {
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
