import { Sequelize } from "sequelize";

import { environmentVariables as environment } from "@/Global";

class ConnectToSequelize {
  public configSequelize: Sequelize;

  private static _intance: ConnectToSequelize;

  private constructor() {
    this.configSequelize = new Sequelize(environment.DB_NAME, environment.DB_USERNAME, environment.DB_PASSWORD, {
      host: environment.DB_HOST,
      dialect: environment.DB_DIALECT as "mysql",
      logging: false,
    });
  }

  public static get intance() {
    return this._intance || (this._intance = new this());
  }

  public async syncModels(): Promise<void> {
    try {
      await this.configSequelize.sync();
      // eslint-disable-next-line no-console
      console.log("\x1b[36m", "Connection has been established successfully.");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("\x1b[31m", "Unable to connect to the database:", err);
      process.exit(1);
    }
  }
}

export default ConnectToSequelize;
