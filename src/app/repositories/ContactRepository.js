const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucas@example.com',
    phone: '991919191',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Joao',
    email: 'Joao@example.com',
    phone: '991919191',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => {
      const foundContact = contacts.find((contact) => contact.id === id);
      resolve(foundContact);
    });
  }

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.find((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
