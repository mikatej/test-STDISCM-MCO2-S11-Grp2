//routes.js
const router = require('express').Router();
// const controller = require('../controllers/controller.js');
// const inventoryController = require('../controllers/InventoryController.js');
const express = require('express');
const { isPrivate, isPublic } = require('../middlewares/checkAuth');
const app = express();

// Controllers
const controller = require('../controllers/controller.js');
const signupController = require('../controllers/RegisterController.js');

// Routes
router.get('/', isPublic, controller.getFirstPage);
router.get('/home', isPrivate,  controller.getHomePage);

// Signup
router.get('/signup', isPublic, signupController.getRegisterPage);
router.post('/addUser', isPublic, signupController.postSignUp);

module.exports = router;