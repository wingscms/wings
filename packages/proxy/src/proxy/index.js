import { ApolloServer } from 'apollo-server-lambda';
import { mergeSchemas } from 'graphql-tools';
import getSchema from './schema';

export default class Proxy {
  constructor({ wings, schemas = [], apolloOpts = {} } = {}) {
    this.wings = wings;
    this.schemas = schemas;
    this.apolloOpts = apolloOpts;
    this.handler = (...args) =>
      this.bootstrap().then(() => this.lambdaHandler(...args));
  }

  async bootstrap() {
    if (this.pBootstrap) return this.pBootstrap;

    this.pBootstrap = new Promise(async (res, rej) => {
      console.log('bootstrapping Wings proxy');
      try {
        const wingsSchema = await getSchema(this.wings);

        const schema = mergeSchemas({
          schemas: [wingsSchema, ...this.schemas],
        });
        this.server = new ApolloServer({
          schema,
          context:
            this.context ||
            (({ event, context }) => ({ handler: { event, context } })),
          ...this.apolloOpts,
        });

        this.lambdaHandler = this.server.createHandler();
        this.bootstrapped = true;
        res();
      } catch (e) {
        rej(e);
      }
    });
    return this.pBootstrap;
  }

  createHandler({ context } = {}) {
    this.context = context;
    return this.handler;
  }
}
