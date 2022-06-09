const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const { favorite } = req.body;
  const contact =
    await contactsRepository.updateStatusContact(
      id,
      favorite
    );

  try {
    if (contact) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        payload: { contact },
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
