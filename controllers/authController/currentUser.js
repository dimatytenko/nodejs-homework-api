const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const currentUser = async (req, res) => {
  const user = await AuthService.currentUser(req.user.id);
  console.log(user);
  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    data: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = currentUser;
