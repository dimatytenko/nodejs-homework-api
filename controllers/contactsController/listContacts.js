const contactsRepository = require("../../repository/contactsRepository");
const {
  HTTP_STATUS_CODE,
} = require("../../libs/constants");

const listContacts = async (req, res, next) => {
  const contacts = await contactsRepository.listContacts();
  try {
    res.json({
      status: "success",
      code: HTTP_STATUS_CODE.OK,
      payload: { contacts },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = listContacts;
