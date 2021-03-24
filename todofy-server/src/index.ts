import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TestResolver } from './resolvers';
import { Logger, LogLevel } from './logger';
import { __port__, __prod__ } from './utils/constants';
import { databaseOptions } from './database';
import { createConnection } from 'typeorm';

const logger = new Logger('Todofy | ');

const main = async () => {
  try {
    const options = await databaseOptions();
    const connection = await createConnection(options);

    logger.log(
      LogLevel.INFO,
      'Successfully connected to database: ' + connection.name
    );

    const app = express();
    app.use(
      cors({
        origin: __prod__ ? '' : 'http://localhost:3000',
        credentials: true,
      })
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [TestResolver],
        validate: false,
      }),
      introspection: true,
      playground: true,
      context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({
      app,
      cors: false,
    });

    app.listen(__prod__ ? __port__ : 5000, () => {
      logger.log(
        LogLevel.INFO,
        'Successfully started Todofy Server on port ' + __port__
      );
    });
  } catch (error) {
    return error;
  }
};

main().catch((error) => {
  logger.log(
    LogLevel.ERROR,
    'There has been an error while trying to initialize Todofy Server ' + error
  );
});
