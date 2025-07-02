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
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Brands",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Car",
  }
);


export default Car;