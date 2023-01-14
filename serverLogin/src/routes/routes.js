const express = require('express');
const route = express.Router();
const controllers = require('../controllers/controllers');

route.get('/get-users', controllers.getUsers);
route.post('/create-user', controllers.createUser);
route.post('/login', controllers.login);

module.exports = route;