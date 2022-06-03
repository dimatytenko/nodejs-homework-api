const contactsRepository = require("../../repository/contactsRepository");
const {
  HTTP_STATUS_CODE,
} = require("../../libs/constants");

const addContact = async (req, res, next) => {
  const body = req.body;
  const contact = await contactsRepository.addContact(body);
  res.status(HTTP_STATUS_CODE.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODE.CREATED,
    payload: { contact },
  });
};

module.exports = addContact;
