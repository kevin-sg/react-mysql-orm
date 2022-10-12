import { type ValidationChain, check } from "express-validator";

import { isUserById, isUserByEmail } from "@/middlewares";

export const validateFieldOfUserById: ValidationChain[] = [check("id").custom(isUserById)];

export const validateFieldOfCreateUser: ValidationChain[] = [
  check("username").notEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Email is required"),
  check("email").custom(isUserByEmail),
];
