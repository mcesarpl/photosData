import { ServerFactory } from './factories/ServerFactory';
import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./config/${env}.env` });

const server = ServerFactory.create();

server.init();