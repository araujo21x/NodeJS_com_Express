const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) return response.status(404).json({ error: 'Not Found' });

    return response.status(200).json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) return response.status(404).json({ error: 'Not Found' });
    await ContactRepository.deleteById(id);
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
