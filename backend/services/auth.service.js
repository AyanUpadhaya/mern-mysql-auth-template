import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import config from "../config/config.js";

class AuthService {
  static async register(userData) {
    const { email, password } = userData;
    const existingUser = await User.findByEmail(email);

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ ...userData, password: hashedPassword });
  }

  static async login(email, password) {
    const user = await User.findByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const tokens = this.generateTokens(user);
    await User.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      user: { id: user.id, name: user.name, email: user.email },
      tokens,
    };
  }

  static generateTokens(user) {
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      config.accessTokenSecret,
      { expiresIn: config.accessTokenExpiry }
    );

    const refreshToken = jwt.sign(
      { id: user.id, email: user.email },
      config.refreshTokenSecret,
      { expiresIn: config.refreshTokenExpiry }
    );

    return { accessToken, refreshToken };
  }

  static async refreshAccessToken(refreshToken) {
    const user = await User.findByRefreshToken(refreshToken);

    if (!user) {
      throw new Error("Invalid refresh token");
    }

    try {
      const decoded = jwt.verify(refreshToken, config.refreshTokenSecret);
      const newAccessToken = jwt.sign(
        { id: decoded.id, email: decoded.email },
        config.accessTokenSecret,
        { expiresIn: config.accessTokenExpiry }
      );

      return newAccessToken;
    } catch (error) {
      throw new Error("Invalid refresh token");
    }
  }

  static async logout(userId) {
    await User.updateRefreshToken(userId, null);
  }
}

export default AuthService;
