import app from "./app.js";
import dotenv from "dotenv";
import notifyConnection from "./utils/notifyConnection.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

notifyConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
