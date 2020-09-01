const ContactRepositoty = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    const contacts = ContactRepositoty.findAll();

    response.json(contacts);
  }
}

module.exports = new ContactController();
