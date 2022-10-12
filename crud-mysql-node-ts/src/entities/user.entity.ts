import { DataTypes } from 'sequelize';

import { ConnectToSequelize } from "@/database";
import { type TUserModelAttributes, EnumEntityKey } from "@/Global";

const User: TUserModelAttributes = ConnectToSequelize.intance.configSequelize.define(
  EnumEntityKey.USER,
  {
    id        : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    username  : { type: DataTypes.STRING,  allowNull: false },
    email     : { type: DataTypes.STRING,  allowNull: false, unique: true },
    status    : { type: DataTypes.BOOLEAN, allowNull: true,  defaultValue: 1 },
    createdAt : { type: DataTypes.DATE,    allowNull: false },
    updatedAt : { type: DataTypes.DATE,    allowNull: false },
  },
  { freezeTableName: true },
);

export default User;
