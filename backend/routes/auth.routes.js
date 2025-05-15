import express from "express";
import AuthController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

//check refresh token is valid and
// then allow user to get new access token
router.post(
  "/refresh-token",
  authMiddleware.checkRefreshToken,
  AuthController.refreshToken
);
router.post("/logout", authMiddleware.verifyToken, AuthController.logout);
//get current user info
router.get("/me", authMiddleware.verifyToken, AuthController.getCurrentUser);

export default router;
