import express, { type Application } from "express";
import morgan from "morgan";
import cors from "cors";

import { UserRoute } from "@/routes";
import { ConnectToSequelize } from "@/database";
import { environmentVariables as environment, EnumPathRoute } from "@/Global";

class Server {
  private app: Application;
  private port: number;

  public constructor() {
    this.app = express();
    this.port = environment.HOST_PORT;

    // Conntect to DB
    this.connectToDB();

    // Middleware
    this.middlaware();

    // Routes
    this.routes();
  }

  private async connectToDB() {
    await ConnectToSequelize.intance.syncModels();
  }

  private middlaware() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(EnumPathRoute.USER, UserRoute);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log("\x1b[32m", `Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
