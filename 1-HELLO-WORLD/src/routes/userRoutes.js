const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Kullanıcı listeleme
router.get('/', getUsers);

// Kullanıcı oluşturma
router.post('/', createUser);

module.exports = router;
