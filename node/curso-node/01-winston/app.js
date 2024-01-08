const buildLogger = require('./plugins/winston.plugin');

const logger = buildLogger('app.js');
logger.log('hola mundo');
logger.log('errorr');