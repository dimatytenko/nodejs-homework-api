const contactsRepository = require("../../repository/contactsRepository");
const {
  HTTP_STATUS_CODE,
} = require("../../libs/constants");

const listContacts = async (req, res, next) => {
  const contacts = await contactsRepository.listContacts();
  res.json({
    status: "success",
    code: HTTP_STATUS_CODE.OK,
    payload: { contacts },
  });
};

module.exports = listContacts;
