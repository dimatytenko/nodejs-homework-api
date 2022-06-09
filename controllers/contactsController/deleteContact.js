const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const deleteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const contacts = await contactsRepository.removeContact(
    id
  );
  try {
    if (contacts) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        message: "contact deleted",
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

module.exports = deleteContact;
