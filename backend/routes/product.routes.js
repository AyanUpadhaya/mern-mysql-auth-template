import express from "express";
import ProductController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware.verifyToken, ProductController.getAllProducts);

export default router;
