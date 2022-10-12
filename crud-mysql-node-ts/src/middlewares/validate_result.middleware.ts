import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import { validationHandler, errorHandler } from "@/utilities";
import { EnumHttpStatusCodes, EnumHttpStatusMessages } from "@/Global";

export async function ValidateResultField(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    const resultErrors = errors.array().map((error) => ({ msg: error.msg, param: error.param }));

    if (!errors.isEmpty()) {
      return res.status(EnumHttpStatusCodes.BAD_REQUEST).json(validationHandler(resultErrors));
    }

    next();
  } catch (err) {
    res.status(EnumHttpStatusCodes.BAD_REQUEST).json(errorHandler(EnumHttpStatusMessages.BAD_REQUEST, res.statusCode));
  }
}
