import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './routes/user.route.js'

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO_URI;

mongoose
  .connect(MONGOURI)
  .then(() => console.log("DB is connected successfuly"))
  .catch((error)=> console.log("Error in connecting the dbF", error))

app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});
