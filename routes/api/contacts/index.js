const express = require("express");
const {
  schemaCreateContact,
  schemaUpdateStatusContact,
} = require("./contacts_validation_schemes");
const {
  validateBody,
  validateIdContact,
} = require("../../../middlewares/validation");
const {
  contactsController,
} = require("../../../controllers");
const router = express.Router();
const guard = require("../../../middlewares/guard");

router.get("/", guard, contactsController.listContacts);

router.get(
  "/:contactId",
  guard,
  validateIdContact(),
  contactsController.getContactById
);

router.post(
  "/",
  guard,
  validateBody(schemaCreateContact),
  contactsController.addContact
);

router.delete(
  "/:contactId",
  guard,
  validateIdContact(),
  contactsController.deleteContact
);

router.put(
  "/:contactId",
  guard,
  validateIdContact(),
  validateBody(schemaCreateContact),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  guard,
  validateIdContact(),
  validateBody(schemaUpdateStatusContact),
  contactsController.updateStatusContact
);

module.exports = router;
