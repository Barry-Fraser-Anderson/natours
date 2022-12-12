const mongoose = require('mongoose');
const validator = require('validator');

userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'An email address must be specified'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'A password must be provided'],
    minLength: [8, 'Please provide a password'],
  },
  passwordConfirm: {
    type: String,
    minLength: [8, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
