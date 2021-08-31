import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import cors from "cors";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
//Check env variables which are required to run application
if (!process.env.MONGO_DB_URI) {
  console.error("Environment variable MONGO_DB_URI not found");
  process.exit(1);
}
if (!process.env.TOKEN_KEY) {
  console.error("Environment variable TOKEN_KEY not found");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listing on ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed");
    console.error(err);
  });
