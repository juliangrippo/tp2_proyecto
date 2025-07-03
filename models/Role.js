import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    roleName: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: "user",
      validate: {
        is: {
          isInt: true,
          min: 1800,
          msg: "El nombre del rol solo puede contener letras y espacios.",
        }
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;