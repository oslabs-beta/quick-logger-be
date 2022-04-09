const morgan = require('morgan');
const { logger } = require('./create-logger');

const loggerBeModule = {};

loggerBeModule.logger = logger;

loggerBeModule.loggerBeConfig = () => {
      
      const myStream = {
        write: (text) => {
          logger.info(text);
        },
      };

    return morgan('combined', { stream: myStream })
}

module.exports.logger = loggerBeModule.logger;
module.exports.loggerBeConfig = loggerBeModule.loggerBeConfig;
module.exports = loggerBeModule;