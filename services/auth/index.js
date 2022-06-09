const jwt = require("jsonwebtoken");
const usersRepository = require("../../repository/users");
const { HttpCode } = require("../../libs/constants");
const {
  CustomError,
} = require("../../middlewares/error-handler");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async create(body) {
    const user = await usersRepository.findByEmail(
      body.email
    );
    if (user) {
      throw new CustomError(
        HttpCode.CONFLICT,
        "User already exists"
      );
    }
    const newUser = await usersRepository.create(body);
    return {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    };
  }

  async login({ email, password }) {
    const user = await this.getUser(email, password);
    if (!user) {
      throw new CustomError(
        HttpCode.UNAUTHORIZED,
        "Invalid email or password"
      );
    }
    const token = this.generateToken(user);
    await usersRepository.updateToken(user.id, token);
    return { token };
  }

  async logout(id) {
    await usersRepository.updateToken(id, null);
  }

  async getUser(email, password) {
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      return null;
    }
    const isValid = await user?.isValidPassword(password);
    if (!isValid) {
      return null;
    }
    return user;
  }

  generateToken(user) {
    const payload = {
      id: user.id,
    };
    console.log(SECRET_KEY);
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "2h",
    });
    return token;
  }
}

module.exports = new AuthService();
