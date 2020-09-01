const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Lucas',
    email: 'lucas@example.com',
    phone: '991919191',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactRepository();
