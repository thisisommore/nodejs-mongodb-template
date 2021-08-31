import { Router } from "express";
import { body } from "express-validator";
import { loginIn, register } from "../controllers/user-controller";
const userRouter = Router();

const validationMiddlesWares = [
  body("username").isLength({ min: 4 }),
  body("password").isLength({ min: 8 }),
];
userRouter.post("/login", validationMiddlesWares, loginIn);
userRouter.post("/register", validationMiddlesWares, register);

export default userRouter;
