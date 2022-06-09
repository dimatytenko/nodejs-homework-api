const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const body = req.body;
  const contact = await contactsRepository.updateContact(
    id,
    body
  );
  try {
    if (contact) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        message: "contact updated",
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = updateContact;
