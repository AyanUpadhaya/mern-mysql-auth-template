import pool from "../config/db.js";

class Product {
  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
  }
  static async findById(id) {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      throw new Error("Product not found");
    }
    return rows[0];
  }

  static async create(productData) {
    const { name, description, price, stock } = productData;
    const [result] = await pool.query(
      "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
      [name, description, price, stock]
    );
    return result;
  }

  static async findByIdAndUpdate(id, productData) {
    const { name, description, price, stock } = productData;
    const [result] = await pool.query(
      "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
      [name, description, price, stock, id]
    );
    return result;
  }
  static async findByIdAndDelete(id){
    return await pool.query("DELETE FROM products WHERE id = ?", [id]);
  }
}

export default Product;
