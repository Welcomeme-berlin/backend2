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
  location: {
    type: String,
    required: false,
    minlength: 15,
  },
  zipcode: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 5,
  },
  anmeldung: Boolean,
  furnished: Boolean,
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
