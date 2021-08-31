import { RequestHandler } from "express";
import { IncomingHttpHeaders } from "http";
import jsonwebtoken from "jsonwebtoken";

interface AuthHeaders extends IncomingHttpHeaders {
  token: string;
}

const verifyToken: RequestHandler = (req, res, next) => {
  const { token } = req.headers as AuthHeaders;

  if (!token) return res.status(403).send("Token not found in header");

  try {
    const decoded = jsonwebtoken.verify(token, process.env.TOKEN_KEY as string);
    (req as any).user = decoded;
    return next();
  } catch (error) {
    return res.status(401).send("Token is invalid");
  }
};

export default verifyToken;
