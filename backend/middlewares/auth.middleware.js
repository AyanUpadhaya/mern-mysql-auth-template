import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../models/User.js";

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token =
      req.cookies.accessToken || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    try {
      const decoded = jwt.verify(token, config.accessTokenSecret);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  },

  checkRefreshToken: async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token required" });
    }

    const user = await User.findByRefreshToken(refreshToken);

    if (!user) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    try {
      jwt.verify(refreshToken, config.refreshTokenSecret);
      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
  },
};

export default authMiddleware;
