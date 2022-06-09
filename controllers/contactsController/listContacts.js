const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const listContacts = async (req, res, next) => {
  const contacts = await contactsRepository.listContacts();
  res.json({
    status: "success",
    code: HttpCode.OK,
    payload: { contacts },
  });
};

module.exports = listContacts;
