const app = require('./app');
const http = require('http');

// Create HTTP server.
const server = http.createServer(app);