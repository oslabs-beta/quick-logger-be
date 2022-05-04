# quick-logger-be 
![npm](https://img.shields.io/npm/v/quick-logger-be?style=plastic) ![NPM](https://img.shields.io/npm/l/quick-logger-be?style=plastic)

Quick-logger-be is a tool that allows developers to quickly add a logger to gather information from their backend application.

### Features:
* Pre-configured logger
* Ability to set the log level and messages
* Logs that are output to the console, written to a file, and sent to a user-provided API endpoint

## Getting Started

### Installation
```
npm i quick-logger-be
```

### Additional Set-up
In order to send your logs to an API, you will need to provide the desired API endpoint.

Create a .env file in the root directory.  See the .env.Example file for formatting.

.env file:
```javascript
LOGS_API_ENDPOINT= //insert API endpoint here
```

If you are using Webpack v.5 or later, you might also need to install the [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin).

Install the package:
```
npm install node-polyfill-webpack-plugin
```

Add the plugin to your webpack.config file.  Example:
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  \\Other rules...
  plugins: [
    new NodePolyfillPlugin()
  ]
};
```

## Usage

Configure the logger and transports.

Example:
```javascript
const { loggerBeConfig } = require('quick-logger-be');

app.use(loggerBeConfig());
```

Add the logger into your application in the places where you want to trigger a log.

Customize the message and log level (info, debug, warn, error).

Example:
```javascript
const { logger } = require('quick-logger-be');

myFunctionToWatch () => {
  //do something
  logger.info(//message string);
  logger.debug(//message string)
  logger.warn(//message string)
  logger.error(//message string)
}
```

## Contributions

Contributing to the project:  See the
[Github repo](https://github.com/oslabs-beta/quick-logger-be)

## Acknowledgements


Built with:
* [morgan](https://www.npmjs.com/package/morgan)
* [winston](https://www.npmjs.com/package/winston)
* [winston-transport-http-stream](https://www.npmjs.com/package/winston-transport-http-stream)

Authors:
* Crystal Pederson | [GitHub](https://github.com/crystalpederson) | [LinkedIn](https://www.linkedin.com/in/crystalpederson/)
* Andrés Gutiérrez | [Github](https://github.com/Agfeynman) | [LinkedIn](https://www.linkedin.com/in/andresgutierrezramirez/)
* Kylene Hohman | [Github](https://github.com/velveteen-ant) | [LinkedIn](https://www.linkedin.com/in/kylene-hohman/)
* Felicity Nguyen | [Github](https://github.com/felisity09) | [LinkedIn](https://www.linkedin.com/in/felicity09/)

## License

Distributed under the [MIT License](./LICENSE)
