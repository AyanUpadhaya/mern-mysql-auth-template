import Product from "../models/Product.js";

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default ProductController;
