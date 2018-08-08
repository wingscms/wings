export default `
  {
    allWingsEntry {
      edges {
        node {
          entry {
            id
            title
            slug
            content
            image {
              url
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
