const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const addContact = async (req, res, next) => {
  const body = req.body;
  const contact = await contactsRepository.addContact(body);
  try {
    res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      payload: { contact },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = addContact;
