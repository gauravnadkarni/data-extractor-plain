import winston, { format, createLogger, transports } from 'winston';
import "winston-daily-rotate-file";

const CATEGORY = "Log Rotation";
const { combine, label, json } = format;

const fileRotateTransport = new transports.DailyRotateFile({
  filename: "logs/rotate-%DATE%.log",
  datePattern: "YYYY-MM",
  maxFiles: "30d",
  maxSize: "20m",
  utc:true,
});

const logger = createLogger({
    format: combine(
        winston.format.timestamp(),
        winston.format.align(),
        json()
    ),
    transports: [fileRotateTransport, new transports.Console({
        level: 'debug',
        handleExceptions: true
    })],
});

export const stream = {
    write: (message:any) => {
      logger.info(message);
    },
};

export default logger;