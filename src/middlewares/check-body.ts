import { RequestHandler } from "express";
import { validationResult } from "express-validator";

const checkBody: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(442)
      .send(
        "Values are not valid, please check your input fields and try again"
      )
      .end();
  } else {
    return next();
  }
};

export default checkBody;
