const express = require("express");
const guard = require("../../../middlewares/guard");
const { authController } = require("../../../controllers");
const {
  wrapper: wrapperError,
} = require("../../../middlewares/error-handler");
const {
  validateBody,
} = require("../../../middlewares/validation");
const {
  schemaAuthUser,
} = require("./authentification_validation_schemes");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemaAuthUser),
  wrapperError(authController.registration)
);

router.post(
  "/login",
  validateBody(schemaAuthUser),
  wrapperError(authController.login)
);

router.post(
  "/logout",
  guard,
  wrapperError(authController.logout)
);

router.post(
  "/current",
  guard,
  wrapperError(authController.currentUser)
);

router.patch(
  "/",
  guard,
  wrapperError(authController.updateSubscription)
);

module.exports = router;
