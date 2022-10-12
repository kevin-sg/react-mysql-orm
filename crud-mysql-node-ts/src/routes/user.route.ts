import express, { type IRouter } from "express";

import { UserController } from "@/controllers";
import { validateFieldOfUserById, ValidateResultField, validateFieldOfCreateUser } from "@/middlewares";

class UserRoute {
  public userRoute: IRouter;

  public constructor() {
    this.userRoute = express.Router();

    this.routeGet();
    this.routeGetById();
    this.routePost();
    this.routePut();
    this.routeDelete();
  }

  // GET /api/user
  private routeGet() {
    this.userRoute.get("/", UserController.getUsers);
  }

  // GET /api/user/:id
  private routeGetById() {
    this.userRoute.get("/:id", validateFieldOfUserById, ValidateResultField, UserController.getUser);
  }

  // POST /api/user
  private routePost() {
    this.userRoute.post("/", validateFieldOfCreateUser, ValidateResultField, UserController.postUser);
  }

  // PUT /api/user/:id
  private routePut() {
    this.userRoute.put("/:id", validateFieldOfUserById, ValidateResultField, UserController.updateUser);
  }

  // DELETE /api/user/:id
  private routeDelete() {
    this.userRoute.delete("/:id", validateFieldOfUserById, ValidateResultField, UserController.deleteUser);
  }
}

export default new UserRoute().userRoute;
