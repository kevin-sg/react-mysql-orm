import type { Optional, ModelDefined } from "sequelize";

export interface IUserAttributes {
  id: number;
  username: string;
  email?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export type TUserCreationAttributes = Optional<IUserAttributes, "id">;
export type TUserModelAttributes = ModelDefined<IUserAttributes, TUserCreationAttributes>;
