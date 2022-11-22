import { LoggerService } from './logger/logger.service';
import * as dotenv from 'dotenv';
dotenv.config();

const logger = new LoggerService();

logger.log(process.env.TEST_KEY);
logger.warn('PLEASE UNCOMMIT ".env" and ".env.test" IN .gitignore');
