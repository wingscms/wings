export default `
  {
    allWingsCampaign {
      edges {
        node {
          id
          campaign {
            id
            petitions {
              id
              title
              slug
              status
              intro
              description
              signatureCount
            }
          }
        }
      }
    }
  }
`;
