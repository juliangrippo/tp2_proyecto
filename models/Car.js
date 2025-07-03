import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Car extends Model {}

Car.init(
  {
    model: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
       is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "El model de la auto solo puede contener letras y espacios.",
        }
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        is: {
          isInt: true,
          min: 1800,
          msg: "El year de la auto solo pueden ser numeros.",
        }
      },
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "El color de la auto solo puede contener letras y espacios.",
        }
      },
    },
    plate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
      validate: {
        is: {
          args: [/^[A-Za-z0-9\s]+$/],
          msg: "El nombre de la auto solo puede contener letras, números y espacios.",
        },
      },
    },
    engineType: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "El engineType de la auto solo puede contener letras y espacios.",
        }
      },
    },
    transmission: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        is: {
          args: [/^[A-Za-z\s]+$/],
          msg: "La transmission de la auto solo puede contener letras y espacios.",
        }
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Brands",
        key: "id",
      },
      validate: {
        is: {
          isInt: true,
          msg: "El brandId de la auto solo pueden ser numeros.",
        }
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
      validate: {
        is: {
          isInt: true,
          msg: "El userId de la auto solo pueden ser numeros.",
        }
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Car",
  }
);


export default Car;