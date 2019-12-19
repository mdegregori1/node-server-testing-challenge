const express = require('express');
require('dotenv').config() // means we can create a dotenv file


// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');

const server = express();


server.use(express.json());



// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
  res.send("last assignment test :) ");
});

module.exports = server;
