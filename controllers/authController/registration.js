const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const registration = async (req, res) => {
  const user = await AuthService.create(req.body);
  return res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    data: { ...user },
  });
};

module.exports = registration;
