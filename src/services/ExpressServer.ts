import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import routes from '../routes/router';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

class ExpressApp {
  private app = express();

  midddlewares() {
    const whitelist = [
      'http://localhost',
    ];

    const corsOptions = {
      origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    };

    const apiLimiter = rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minutes
      max: 120,
      statusCode: StatusCodes.TOO_MANY_REQUESTS,
      message: ReasonPhrases.TOO_MANY_REQUESTS,
    });

    this.app.use(cors(corsOptions));
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      if (req.header('authorization') === process.env.AUTHORIZATION_TOKEN) {
        next();
      } else {
        res.status(StatusCodes.UNAUTHORIZED).send({
          message: ReasonPhrases.UNAUTHORIZED,
        });
      }
    });

    this.app.use('/', apiLimiter);
  }

  routes() {
    this.app.use(routes);
  }

  async init() {
    this.midddlewares();
    this.routes();
    this.app.listen(process.env.EXPRESS_PORT);
  }
}

export default ExpressApp;
