const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const addContact = async (req, res, next) => {
  const body = req.body;
  const contact = await contactsRepository.addContact(body);
  res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    payload: { contact },
  });
};

module.exports = addContact;
