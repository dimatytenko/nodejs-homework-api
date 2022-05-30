const contactsModel = require("../../models/contactsModel");

const listContacts = async (req, res, next) => {
  const contacts = await contactsModel.listContacts();
  res.json({
    status: "success",
    code: 200,
    payload: { contacts },
  });
};

module.exports = listContacts;
