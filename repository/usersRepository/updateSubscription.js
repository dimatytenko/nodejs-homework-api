const { User } = require("../../models/users");

const updateSubscription = async (id, subscription) => {
  const user = await User.findByIdAndUpdate(id, {
    subscription: subscription,
  });
  return user;
};

module.exports = updateSubscription;
