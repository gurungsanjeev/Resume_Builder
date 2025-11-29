import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGO_URI;

mongoose
  .connect(MONGOURI)
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.error("Error connecting to DB:", error));

app.use("/user", userRoute);








app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
