import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

export default wings =>
  new Promise((res) => {
    const link = new HttpLink({
      fetch: (uri, options) =>
        fetch(wings.endpoint, {
          ...options,
          headers: { ...options.headers, ...wings.authHeaders() },
        }),
    });
    introspectSchema(link).then((schema) => {
      const executableSchema = makeRemoteExecutableSchema({
        schema,
        link,
      });

      res(executableSchema);
    });
  });
