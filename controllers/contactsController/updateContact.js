const { Contact } = require("../../models");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const body = req.body;
  const contact = await Contact.findByIdAndUpdate(
    id,
    body,
    { new: true }
  );
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      payload: { contact },
    });
  }
  return res.status(404).json({
    status: "error",
    code: 404,
    message: "Not Found",
  });
};

module.exports = updateContact;
