import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

export default async (wings) => {
  const link = new HttpLink({
    fetch: (uri, options) =>
      fetch(wings.endpoint, {
        ...options,
        headers: { ...options.headers, ...wings.authHeaders() },
      }),
  });

  const schema = await introspectSchema(link);
  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });
  return executableSchema;
};
