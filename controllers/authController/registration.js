const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const registration = async (req, res) => {
  const user = await AuthService.create(req.body);
  console.log(user);
  return res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    data: {
      email: user.email,
      subscription: user.subscription,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = registration;
