module.exports = `
{
  wings {
    nodes: entries(type: "page") {
      edges {
        node {
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
    }
  }
}`;
