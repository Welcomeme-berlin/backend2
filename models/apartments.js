const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
  detail: {
    type: String,
    required: false,
    minlength: 30,
  },
  date: {
    type: Date,
    required: true,
  },
  state: {
    type: String,
    required: false,
    minlength: 5,
  },
  street: {
    type: String,
    required: false,
    minlength: 10,
  },
  zipcode: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 5,
  },
  anmeldung: Boolean,
  deposite: Number,
  rent: Number,
});

apartmentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Apartment', apartmentSchema);
