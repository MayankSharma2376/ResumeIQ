import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("🔥 ERROR:", err);
  console.error("🔥 STACK:", err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;