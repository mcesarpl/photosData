import winston from 'winston';
import { ElasticsearchTransport, ElasticsearchTransformer  } from 'winston-elasticsearch';

class Logger {
  public logger: winston.Logger;

  public create() {
    const esTransportOpts = {
      level: 'info',
      transformer: (logData) => {
        const transformed = ElasticsearchTransformer(logData);
        return transformed;
      },
      clientOpts: { node: process.env.ELASTIC_SERVER },
    };
    const esTransport = new ElasticsearchTransport(esTransportOpts);
    const logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
        esTransport,
      ],
    });

    this.logger = logger;
  }
}

export default new Logger();