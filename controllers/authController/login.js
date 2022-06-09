const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const login = async (req, res) => {
  const token = await AuthService.login(req.body);
  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    data: { token },
  });
};

module.exports = login;
