const apartmentsRouter = require('express').Router();
const Apartment = require('../models/apartments');

// get ALL apartments
apartmentsRouter.get('/', (request, response) => {
  Apartment.find({}).then((notes) => {
    response.json(notes);
  });
});

// export/expose this module for use by other modules too
module.exports = apartmentsRouter;
