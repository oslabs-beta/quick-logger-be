const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, json } = format;
const HttpStreamTransport = require('winston-transport-http-stream');
require('dotenv').config();

const myFormat = printf(({ level, message, label }) => {
  const logInfo = {
    level,
    message: `${message}`,
    label: `${label}`,
  };
  return JSON.stringify(logInfo);
});

const logger = createLogger({
  level: 'debug',
  format: combine(myFormat, timestamp(), json()),
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: 'app.log',
      level: 'debug',
    }),
    new HttpStreamTransport({
      url: process.env.LOGS_API_ENDPOINT
    })
  ],
});

const myStream = {
  write: (text) => {
    logger.info(text);
  },
};
module.exports = { logger, myStream };
