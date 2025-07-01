import { User } from "../models/index.js";

class UserServices {
  getAllUsersService = async () => {
    const users = await User.findAll();
    return users
  };
  getUserServiceById = async (id) => {
    const user = await User.findByPk(id);
    return user;
  };

  createUserService = async (data) => {
    const { id, name } = await User.create(data);
    return { id, name };
  };
}

export default UserServices;