const routes = require('express').Router();
const ContactsController = require('./app/controller/ContactController');

routes.get('/contacts', ContactsController.index);

module.exports = routes;
