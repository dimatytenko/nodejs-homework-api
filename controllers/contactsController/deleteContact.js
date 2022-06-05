const contactsRepository = require("../../repository/contactsRepository");
const {
  HTTP_STATUS_CODE,
} = require("../../libs/constants");

const deleteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const contacts = await contactsRepository.removeContact(
    id
  );
  try {
    if (contacts) {
      return res.json({
        status: "success",
        code: HTTP_STATUS_CODE.OK,
        message: "contact deleted",
      });
    } else {
      return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
        status: "error",
        code: HTTP_STATUS_CODE.NOT_FOUND,
        message: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = deleteContact;
