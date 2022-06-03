const { Contact } = require("../../models");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
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
