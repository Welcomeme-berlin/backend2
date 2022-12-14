const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./utils/config');

const app = express();
const usersRouter = require('./controllers/users'); // handles requests made of users
const apartmentsRouter = require('./controllers/apartments'); // routes to resources  SHOULD NOT BE NOTES
const middleware = require('./utils/middleware'); // new entrant from config
const logger = require('./utils/logger');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/apartments', apartmentsRouter); // should also change
app.use('/api/users', usersRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
