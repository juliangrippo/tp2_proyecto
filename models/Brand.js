import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Brand extends Model {}

Brand.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    foundedYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Brand",
  }
);

export default Brand;