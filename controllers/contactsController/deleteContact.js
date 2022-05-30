const contactsModel = require("../../models/contactsModel");

const deleteContact = async (req, res, next) => {
  const contacts = await contactsModel.removeContact(
    req.params.contactId
  );
  if (contacts) {
    return res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  }
  return res.status(404).json({
    status: "error",
    code: 404,
    message: "Not Found",
  });
};

module.exports = deleteContact;
