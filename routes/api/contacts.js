const express = require("express");
const {
  schemaCreateContact,
  schemaUpdateStatusContact,
} = require("../../routes/api/contacts_validation_schemes");
const {
  validateBody,
} = require("../../middlewares/validation");
const contactsController = require("../../controllers/contactsController");
const router = express.Router();

router.get("/", contactsController.listContacts);

router.get(
  "/:contactId",
  contactsController.getContactById
);

router.post(
  "/",
  validateBody(schemaCreateContact),
  contactsController.addContact
);

router.delete(
  "/:contactId",
  contactsController.deleteContact
);

router.put(
  "/:contactId",
  validateBody(schemaCreateContact),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemaUpdateStatusContact),
  contactsController.updateStatusContact
);

module.exports = router;
