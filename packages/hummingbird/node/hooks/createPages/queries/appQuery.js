module.exports = `
{
  wings {
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
}`;
