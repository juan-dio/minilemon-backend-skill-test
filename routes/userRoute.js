const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { validate, userValidator } = require('../validators');

router.post('/', userValidator.createUser, validate, userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userValidator.updateUser, validate, userController.updateUser);
router.delete('/:id', userValidator.deleteUser, validate, userController.deleteUser);

module.exports = router;