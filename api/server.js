const express = require('express');
require('dotenv').config() 


const carsRouter = require('../cars/cars-router.js');

const server = express();


server.use(express.json());




server.use('/api/cars', carsRouter);


server.get('/', (req, res) => {
  res.send({api: "last assignment test :) "});
});

module.exports = server;
