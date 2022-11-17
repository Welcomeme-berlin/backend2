const apartmentsRouter = require('express').Router();
const Apartment = require('../models/apartments');

// get ALL apartments
apartmentsRouter.get('/', (request, response) => {
  Apartment.find({}).then((apartments) => {
    response.json(apartments);
  });
});

// add an apartment
apartmentsRouter.post('/', (request, response, next) => {
  const body = request.body;

  const apartment = new Apartment({
    detail: body.content,
    anmeldung: body.anmeldung || false,
    date: new Date(),
    state: body.state,
    street: body.street,
    zipcode: body.zipcode,
    rent: body.rent,
  });

  apartment
    .save()
    .then((savedApartment) => {
      response.json(savedApartment);
    })
    .catch((error) => next(error));
});

// export/expose this module for use by other modules too
module.exports = apartmentsRouter;
