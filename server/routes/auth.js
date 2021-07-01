const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/user', AuthController.user);

module.exports = router;
