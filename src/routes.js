const routes = require('express').Router();
const ContactsController = require('./app/controller/ContactController');

routes.get('/contacts', ContactsController.index);
routes.get('/contacts/:id', ContactsController.show);
routes.delete('/contacts/:id', ContactsController.delete);
module.exports = routes;
