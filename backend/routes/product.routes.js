import express from "express";
import ProductController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware.verifyToken, ProductController.getAllProducts);
router.get("/:id", authMiddleware.verifyToken, ProductController.getProduct);
router.post("/", authMiddleware.verifyToken, ProductController.createProduct);
router.put("/:id", authMiddleware.verifyToken, ProductController.updateProduct);
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  ProductController.deleteProduct
);

export default router;
