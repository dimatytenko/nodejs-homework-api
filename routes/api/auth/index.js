const express = require("express");
const guard = require("../../../middlewares/guard");
const { authController } = require("../../../controllers");
const {
  wrapper: wrapperError,
} = require("../../../middlewares/error-handler");
const router = express.Router();

router.post(
  "/signup",
  wrapperError(authController.registration)
);

router.post("/login", wrapperError(authController.login));

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

module.exports = router;
