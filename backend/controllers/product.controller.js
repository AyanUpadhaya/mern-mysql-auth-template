import Product from "../models/Product.js";
import ProductService from "../services/product.service.js";

class ProductController {
  //@desc get all products
  //@method GET
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //@desc get single product
  //@method GET
  static async getProduct(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  //@desc post a product
  //@method POST
  static async createProduct(req, res) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  //@desc update a product
  //@method PUT
  static async updateProduct(req, res) {
    try {
      const updatedProduct = await ProductService.updateProduct(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  //@desc delete single product
  //@method DELETE
  static async deleteProduct(req, res) {
    try {
      const result = await ProductService.deleteProduct(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ProductController;
