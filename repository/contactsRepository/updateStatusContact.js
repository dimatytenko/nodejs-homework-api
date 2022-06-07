const { Contact } = require("../../models");

const updateStatusContact = async (contactId, status) => {
  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { favorite: status },
    { new: true }
  );

  return result;
};

module.exports = updateStatusContact;
