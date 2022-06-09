const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const listContacts = async (req, res, next) => {
  const contacts = await contactsRepository.listContacts();
  try {
    res.json({
      status: "success",
      code: HttpCode.OK,
      payload: { contacts },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = listContacts;
