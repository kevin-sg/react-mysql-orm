import type { Request, Response } from "express";

import { successHandler, errorHandler } from "@/utilities";
import { EnumHttpStatusCodes, EnumHttpStatusMessages } from "@/Global";
import { getUsers, getUserById, createUser, updateUserById, deleteUserById } from "@/user_cases";

class UserController {
  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const { users, info } = await getUsers({ order: "username", status: true });

      res
        .status(EnumHttpStatusCodes.OK)
        .json(successHandler(EnumHttpStatusMessages.OK, { data: users, info }, res.statusCode));
    } catch (err) {
      res
        .status(EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(errorHandler(EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }

  public async getUser({ params }: Request, res: Response): Promise<void> {
    try {
      const { user } = await getUserById({ id: params.id });

      res
        .status(EnumHttpStatusCodes.OK)
        .json(successHandler(EnumHttpStatusMessages.OK, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(errorHandler(EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }

  public async postUser({ body }: Request, res: Response): Promise<void> {
    try {
      const { user } = await createUser({ username: body.username, email: body.email });

      res
        .status(EnumHttpStatusCodes.CREATE)
        .json(successHandler(EnumHttpStatusMessages.CREATE, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(errorHandler(EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }

  public async updateUser({ params, body }: Request, res: Response): Promise<void> {
    try {
      const { user } = await updateUserById({ id: params.id, username: body.username });

      res
        .status(EnumHttpStatusCodes.CREATE)
        .json(successHandler(EnumHttpStatusMessages.CREATE, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(errorHandler(EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const data = await deleteUserById({ id: req.params.id });

      res.status(EnumHttpStatusCodes.OK).json(successHandler(EnumHttpStatusMessages.OK, { data }, res.statusCode));
    } catch (err) {
      res
        .status(EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(errorHandler(EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }
}

export default new UserController();
