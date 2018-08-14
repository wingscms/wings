import { ApolloServer } from 'apollo-server-lambda';
import { mergeSchemas } from 'graphql-tools';
import getSchema from './schema';

export default class Proxy {
  constructor({ wings, schemas = [] } = {}) {
    this.wings = wings;
    this.schemas = schemas;
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
        this.server = new ApolloServer({ schema });

        this.lambdaHandler = this.server.createHandler();
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
    console.log('proxy handler args:', args);
    try {
      await this.bootstrap();
      this.lambdaHandler(...args);
    } catch (e) {
      console.log('handler fail', e);
    }
  };
}
