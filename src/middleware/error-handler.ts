import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/http";

const ErrorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  const error: ErrorResponse = {
    success: false,
    status: 500,
    error: err.message,
  };
  res.status(500).json(error).end();
  next();
};

export default ErrorHandlerMiddleware;
