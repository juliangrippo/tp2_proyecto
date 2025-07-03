import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Brand extends Model {}

Brand.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "El name de la marca solo puede contener letras y espacios.",
        }
      },
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "El country de la marca solo puede contener letras y espacios.",
        }
      },
    },
    foundedYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        is: {
          isInt: true,
          min: 1800,
          msg: "El country de la marca solo puede contener letras y espacios.",
        }
      },
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