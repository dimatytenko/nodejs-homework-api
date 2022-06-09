const contactsRepository = require("../../repository/contactsRepository");
const { HttpCode } = require("../../libs/constants");

const getContactById = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await contactsRepository.getContactById(
    id
  );
  try {
    if (contact) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        payload: { contact },
      });
    } else {
      res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: `Not found contact id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = getContactById;
