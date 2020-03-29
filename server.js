const https = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = https.createServer(app);

server.listen(port || NODE_ENV);