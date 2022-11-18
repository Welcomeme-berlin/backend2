const bcrypt = require('bcrypt'); //to hash user  password
const usersRouter = require('express').Router();
const User = require('../models/users');

usersRouter.post('/', async (request, response) => {
  const { username, firstname, lastname, location, phone, email, password } =
    request.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    firstname,
    lastname,
    location,
    phone,
    email,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

//return all users
usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

module.exports = usersRouter;
