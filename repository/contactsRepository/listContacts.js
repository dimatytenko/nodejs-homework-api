const { Contact } = require("../../models");

async function listContacts() {
  const result = await Contact.find();

  return result;
}

module.exports = listContacts;
