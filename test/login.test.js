const login = require("../controllers/authController/login");
const AuthService = require("../services/auth");
const { HttpCode } = require("../libs/constants");

describe("Auth", () => {
  let req, res;
  beforeEach(() => {
    req = {
      body: {
        // token: "token",
        user: {
          email: "ww",
          subscription: "start",
        },
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn((data) => data),
    };

    AuthService.login = jest.fn((data) => data);
  });

  test("login user", async () => {
    result = await login(req, res);

    expect(result.code).toBe(HttpCode.OK);
    expect(result.data.token);
  });
});
