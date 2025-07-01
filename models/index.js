import Role from "./Role.js";
import User from "./User.js";
import Brand from "./Brand.js";
import Car from "./Car.js";

Role.hasMany(User, {
     foreignKey:"roleId"
})
User.belongsTo(Role, {
     foreignKey:"roleId"
})

Car.belongsTo(Brand, {
  foreignKey: {
    name: "brandId",
    allowNull: false,
  },
  as: "brand",
});

Brand.hasMany(Car, {
  foreignKey: "brandId",
  as: "cars",
});

export {User, Role, Car, Brand}