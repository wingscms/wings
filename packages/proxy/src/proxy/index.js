import { ApolloServer } from 'apollo-server-lambda';
import { mergeSchemas } from 'graphql-tools';
import getSchema from './schema';

export default class Proxy {
  constructor({ wings, schemas = [] } = {}) {
    this.wings = wings;
    this.schemas = schemas;
  }

  bootstrap() {
    if (this.pBootstrap) return this.pBootstrap;

    this.pBootstrap = new Promise((res, rej) => {
      console.log('bootstrapping Wings proxy');
      getSchema(this.wings)
        .then((wingsSchema) => {
          const schema = mergeSchemas({
            schemas: [wingsSchema, ...this.schemas],
          });
          this.server = new ApolloServer({ schema });

          this.lambdaHandler.createHandler();
          this.bootstrapped = true;
          res();
        })
        .catch(rej);
    });
    return this.pBootstrap;
  }

  createHandler() {
    return this.handler;
  }

  handler = (...args) =>
    new Promise((r) => {
      this.bootstrap().then(() => r(this.lambdaHandler(...args)));
    });
}
