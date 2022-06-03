const contactsRepository = require("../../repository/contactsRepository");
const {
  HTTP_STATUS_CODE,
} = require("../../libs/constants");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const body = req.body;
  const contact = await contactsRepository.updateContact(
    id,
    body
  );
  if (contact) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODE.OK,
      payload: { contact },
    });
  }
  return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
    status: "error",
    code: HTTP_STATUS_CODE.NOT_FOUND,
    message: "Not Found",
  });
};

module.exports = updateContact;
