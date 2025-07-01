import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Car extends Model {}

Car.init(
  {
    model: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    plate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    engineType: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    transmission: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Car",
  }
);


export default Car;