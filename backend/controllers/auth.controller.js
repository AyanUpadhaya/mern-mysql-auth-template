import AuthService from "../services/auth.service.js";
import config from "../config/config.js";

class AuthController {
  static async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const { user, tokens } = await AuthService.login(email, password);

      res.cookie("accessToken", tokens.accessToken, config.cookieOptions);
      res.cookie("refreshToken", tokens.refreshToken, config.cookieOptions);

      res.json({ user, tokens });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  // get new access token user refreshAccessToken service
  static async refreshToken(req, res) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const newAccessToken = await AuthService.refreshAccessToken(refreshToken);
      res.cookie("accessToken", newAccessToken, config.cookieOptions);
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      res.status(403).json({ message: error.message });
    }
  }

  static async logout(req, res) {
    try {
      await AuthService.logout(req.user.id);
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      res.json({ message: "Logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getCurrentUser(req, res) {
    try {
      const user = req.user;
      res.json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthController;
