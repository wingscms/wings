export default `
  {
    allWingsCampaignEvent {
      edges {
        node {
          id
          event {
            id
            title
            slug
            intro
            description
            image {
              url
            }
            schedule {
              start
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
            platforms {
              all {
                title
                description
                medium {
                  url
                }
              }
              facebook {
                title
                description
                medium {
                  url
                }
              }
              twitter {
                title
                description
                medium {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
