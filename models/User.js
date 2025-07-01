import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING(50),
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      mail: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;