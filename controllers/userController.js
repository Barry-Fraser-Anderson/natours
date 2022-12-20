const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all users
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

// Create a user
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'createUser: Not yet implemented',
  });
};

// Get specified user
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'getUser: Not yet implemented',
  });
};

// Modify a user
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'updateUser: Not yet implemented',
  });
};

// Delete a user
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'deleteUser: Not yet implemented',
  });
};
