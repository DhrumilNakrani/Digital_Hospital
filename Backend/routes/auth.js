const express = require('express');

const router = express.Router();

const authController = require('../controllers/user-controllers');

router.post('/login',authController.postLogin);

router.post('/signup',authController.postSignup);

module.exports = router;