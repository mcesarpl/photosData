import { ServerFactory } from './factories/ServerFactory';
import * as dotenv from 'dotenv';
import ElasticServer from './services/ElasticServer';
import Logger from './services/Logger';
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./config/${env}.env` });

const server = ServerFactory.create();
server.init();

Logger.create();
const logger = Logger.logger;

ElasticServer.init().then(() => {
  logger.info(`Server listening on port ${process.env.EXPRESS_PORT}...`);
});
