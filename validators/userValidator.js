const { check, param } = require('express-validator');

const createUser = [
  check('name')
    .notEmpty().withMessage('Name is required'),
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
  check('phone')
    .notEmpty().withMessage('Phone number is required')
    .isNumeric().withMessage('Phone number must contain only numbers')
    .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 digits'),
  check('department')
    .notEmpty().withMessage('Department is required')
];

const updateUser = [
  param('id')
    .isMongoId().withMessage('Invalid user ID'),
  check('name')
    .optional()
    .notEmpty().withMessage('Name is required'),
  check('email')
    .optional()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
  check('phone')
    .optional()
    .notEmpty().withMessage('Phone number is required')
    .isNumeric().withMessage('Phone number must contain only numbers')
    .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 digits'),
  check('department')
    .optional()
    .notEmpty().withMessage('Department is required')
];

const deleteUser = [
  param('id')
    .isMongoId().withMessage('Invalid user ID')
];

module.exports = {
  createUser,
  updateUser,
  deleteUser
};
