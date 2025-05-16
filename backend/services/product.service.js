import Product from "../models/Product.js";

class ProductService {
  static async getAllProducts() {
    return await Product.findAll();
  }
  static async getProductById(id) {
    return await Product.findById(id);
  }
  static async createProduct(productData) {
    const result = await Product.create(productData);
    return { id: result.insertId, ...productData };
  }
  static async updateProduct(id, productData) {
    const result = await findByIdAndUpdate(id, productData);
    if (result.affectedRows === 0) {
      throw new Error("Product not found");
    }
    return { id, ...productData };
  }

  static async deleteProduct(id) {
    const result = await Product.findByIdAndDelete(id);
    if (result.affectedRows === 0) {
      throw new Error("Product not found");
    }
    return { message: "Product deleted successfully" };
  }
}

export default ProductService;
