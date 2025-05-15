import pool from "../config/db.js";

class Product {
  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
  }
}

export default Product;
