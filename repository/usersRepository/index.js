const findById = require("./findUserById");
const findByEmail = require("./findUserByEmail");
const create = require("./createUser");
const updateToken = require("./updateToken");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  updateSubscription,
  updateAvatar,
};
