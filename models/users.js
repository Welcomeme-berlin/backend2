const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  location: String,
  phone: Number,
  email: String,
  passwordHash: String,
  apartments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Apartment',
    },
  ],
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
