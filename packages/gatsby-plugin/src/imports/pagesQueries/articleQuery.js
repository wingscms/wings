export default `
{
  allWingsArticle {
    edges {
      node {
        article {
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
