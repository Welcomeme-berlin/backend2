const apartmentsRouter = require('express').Router();
const Apartment = require('../models/apartments');
// const multer = require('multer');

// get ALL apartments
apartmentsRouter.get('/', (request, response) => {
  Apartment.find({}).then((apartments) => {
    response.json(apartments);
  });
});

// add an apartment
apartmentsRouter.post('/', (request, response, next) => {
  const { body } = request;

  const apartment = new Apartment({
    detail: body.detail,
    anmeldung: body.anmeldung || false,
    date: new Date(),
    location: body.location,
    zipcode: body.zipcode,
    deposite: body.deposite,
    rent: body.rent,
    furnished: body.furnished || false,
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
