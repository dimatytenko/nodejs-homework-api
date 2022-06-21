const registration = require("../controllers/authController/registration");
const AuthService = require("../services/auth");
const { HttpCode } = require("../libs/constants");

describe("Auth", () => {
  let req, res;
  beforeEach(() => {
    req = {
      body: {
        email: "user@mail.com",
        subscription: "start",
        avatarURL:
          "https://avatars.dicebear.com/v2/avatar/jdenticon.png",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn((data) => data),
    };
    AuthService.create = jest.fn((data) => data);
  });

  it("signup new user", async () => {
    const result = await registration(req, res);
    console.log(result);
    // expect(AuthService.create).toHaveBeenCalled();
    // expect(AuthService.create).toHaveBeenCalledWith(
    //   req.body
    // );
    expect(result.code).toBe(HttpCode.CREATED);
    expect(result.status).toBe("success");
  });
});
