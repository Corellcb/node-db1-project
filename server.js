const express = require('express');

const AccountsRouter = require('./routers/accountsRouter');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

module.exports = server;