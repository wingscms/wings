import wings from '../wings';
import schemas from '../schemas';

const MUTATION = `
  mutation ($id: String!, $name: String!, $key: String!, $locations: [String!]!, $definition: String!) {
    updateSchema(id: $id, input: { name: $name, key: $key, locations: $locations, definition: $definition }) {
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
      const { id } = current.schemas.length > 0 ? current.schemas.find(x => x.key === key) : {};
      if (id) {
        wings
          .query(MUTATION, {
            id,
            name,
            key,
            locations,
            definition: JSON.stringify(definition, null, 2),
          })
          .then(res => console.log(res))
          .catch(err => console.log(err.response.errors[0].message));
      } else {
        console.log(`Schema with key '${key}' does not exist. You must create it before updating.`);
      }
    });
  })
  .catch(err => console.log(err));
