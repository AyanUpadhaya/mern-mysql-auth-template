import pool from "../config/db.js";

async function notifyConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully");
    connection.release();
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1); // Stop the app if DB fails to connect
  }
}

export default notifyConnection;
