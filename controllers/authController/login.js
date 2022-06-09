const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const login = async (req, res) => {
  const { token, user } = await AuthService.login(req.body);
  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    },
  });
};

module.exports = login;
