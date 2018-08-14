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

    this.pBootstrap = new Promise(async (res, rej) => {
      console.log('bootstrapping Wings proxy');
      try {
        const schema = mergeSchemas({
          schemas: [await getSchema(), ...this.schemas],
        });
        this.server = new ApolloServer({ schema });

        this.lambdaHandler.createHandler();
        this.bootstrapped = true;
        res();
      } catch (e) {
        rej(e);
      }
    });
    return this.pBootstrap;
  }

  createHandler() {
    return this.handler;
  }

  handler = async (...args) => {
    await this.bootstrap();
    return this.lambdaHandler(...args);
  };
}
