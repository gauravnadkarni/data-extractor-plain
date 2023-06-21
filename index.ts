import express, { Express } from 'express';
import dotenv from 'dotenv';
import logger, {stream as loggerStream} from './utilities/logger';
import morgan from 'morgan';

dotenv.config();
const app: Express = express();
app.use(morgan('combined', { stream: loggerStream}));

import routes from './routes';

const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`); 
});