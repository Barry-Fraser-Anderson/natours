const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys.forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

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

// Update logged-in user
exports.updateMe = catchAsync(async (req, res, next) => {
  // Create error if users POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('Password change not allowed', 400));
  }

  // Update user document
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
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

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

// Delete a user
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'deleteUser: Not yet implemented',
  });
};
