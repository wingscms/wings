import wings from '../wings';
import schemas from '../schemas';

const MUTATION = `
  mutation ($name: String!, $key: String!, $locations: [String!]!, $definition: String!) {
    createSchema(input: { name: $name, key: $key, locations: $locations, definition: $definition }) {
      id
      name
    }
  }
`;

wings
  .query(
    `
    query {
      schemas {
        id,
        key
      }
    }
  `,
  )
  .then((current = { shemas: [] }) => {
    Object.keys(schemas).forEach((s) => {
      const { name, key, locations, definition } = schemas[s];
      if (!current.schemas.find(x => x.key === key)) {
        wings
          .query(MUTATION, {
            name,
            key,
            locations,
            definition: JSON.stringify(definition, null, 2),
          })
          .then(res => console.log(res))
          .catch(err => console.log(err.response.errors[0].message));
      } else {
        console.log(
          `Schema with key '${key}' already exists. You should run the update script instead.`,
        );
      }
    });
  })
  .catch(err => console.log(err));
