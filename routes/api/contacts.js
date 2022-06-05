const express = require("express");
const {
  schemaCreateContact,
  schemaUpdateStatusContact,
} = require("../../routes/api/contacts_validation_schemes");
const {
  validateBody,
  validateIdContact,
} = require("../../middlewares/validation");
const contactsController = require("../../controllers/contactsController");
const router = express.Router();

router.get("/", contactsController.listContacts);

router.get(
  "/:contactId",
  validateIdContact(),
  contactsController.getContactById
);

router.post(
  "/",
  validateBody(schemaCreateContact),
  contactsController.addContact
);

router.delete(
  "/:contactId",
  validateIdContact(),
  contactsController.deleteContact
);

router.put(
  "/:contactId",
  validateIdContact(),
  validateBody(schemaCreateContact),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateIdContact(),
  validateBody(schemaUpdateStatusContact),
  contactsController.updateStatusContact
);

module.exports = router;
