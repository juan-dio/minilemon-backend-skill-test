const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { validate, userValidator } = require('../validators');

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Buat user baru
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               phone:
 *                 type: string
 *                 example: "081234567890"
 *               department:
 *                 type: string
 *                 example: "IT"
 *     responses:
 *       201:
 *         description: Berhasil membuat user baru
 *         content:
 *           application/json:
 *             example:
 *               code: 201
 *               status: true
 *               message: "User created successfully"
 *               data:
 *                 user:
 *                   id: "66c8c5b5f8f4a7"
 *                   name: "John Doe"
 *                   email: "johndoe@example.com"
 *                   phone: "081234567890"
 *                   isActive: true
 *                   department: "IT"
 *       400:
 *         description: User sudah ada
 *         content:
 *           application/json:
 *             example:
 *               code: 400
 *               status: false
 *               message: "User already exists"
 *               data: null
 */
router.post('/', userValidator.createUser, validate, userController.createUser);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Ambil semua user
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Berhasil ambil daftar user
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: true
 *               message: "Users retrieved successfully"
 *               data:
 *                 users:
 *                   - id: "66c8c5b5f8f4a7"
 *                     name: "John Doe"
 *                     email: "johndoe@example.com"
 *                     phone: "081234567890"
 *                     isActive: true
 *                     department: "IT"
 *                   - id: "66c8c5b5f8f4b0"
 *                     name: "Jane Smith"
 *                     email: "janesmith@example.com"
 *                     phone: "082345678901"
 *                     isActive: true
 *                     department: "Finance"
 */
router.get('/', userController.getUsers);

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jane Smith Updated"
 *               email:
 *                 type: string
 *                 example: "jane.updated@example.com"
 *               phone:
 *                 type: string
 *                 example: "081298765432"
 *               department:
 *                 type: string
 *                 example: "Engineering"
 *     responses:
 *       200:
 *         description: Berhasil update user
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: true
 *               message: "User updated successfully"
 *               data:
 *                 user:
 *                   id: "66c8c5b5f8f4a7"
 *                   name: "Jane Smith Updated"
 *                   email: "jane.updated@example.com"
 *                   phone: "081298765432"
 *                   isActive: true
 *                   department: "Engineering"
 *       400:
 *         description: Email sudah digunakan
 *         content:
 *           application/json:
 *             example:
 *               code: 400
 *               status: false
 *               message: "Email already in use"
 *               data: null
 *       404:
 *         description: User tidak ditemukan
 *         content:
 *           application/json:
 *             example:
 *               code: 404
 *               status: false
 *               message: "User not found"
 *               data: null
 */
router.put('/:id', userValidator.updateUser, validate, userController.updateUser);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Hapus user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Berhasil hapus user
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: true
 *               message: "User deleted successfully"
 *               data: null
 *       404:
 *         description: User tidak ditemukan
 *         content:
 *           application/json:
 *             example:
 *               code: 404
 *               status: false
 *               message: "User not found"
 *               data: null
 */
router.delete('/:id', userValidator.deleteUser, validate, userController.deleteUser);

module.exports = router;