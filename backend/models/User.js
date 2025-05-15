import pool from "../config/db.js";

class User {
  static async findByEmail(email) {
    const QUERY = `SELECT *  FROM users WHERE email = ?`;
    let client;

    try {
      client = await pool.getConnection();
      const [rows] = await client.query(QUERY, [email]);
      return rows[0];
    } catch (error) {
      console.error("Error occurred while getting user by email:", error);
      throw error;
    } finally {
      if (client) client.release();
    }
  }

  static async create(user) {
    const { name, email, password } = user;
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    return { id: result.insertId, name, email };
  }

  static async updateRefreshToken(userId, refreshToken) {
    await pool.query("UPDATE users SET refresh_token = ? WHERE id = ?", [
      refreshToken,
      userId,
    ]);
  }

  static async findByRefreshToken(refreshToken) {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE refresh_token = ?",
      [refreshToken]
    );
    return rows[0];
  }
}

export default User;
