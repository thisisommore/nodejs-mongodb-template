import { Request } from "express";

export default interface ICustomRequest extends Request {
  user: {
    id: string;
  };
}
