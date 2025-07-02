import { User } from "../models/index.js";
import { generateToken, verifyToken } from "../utils/jwt.js";  

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

  login = async (data) => {
      const { mail, pass } = data;
      const user = await User.findOne({
        where: { mail },
      });
      if (!user) throw new Error("User not found");
      const comparePass = await user.compare(pass);
      if (!comparePass) throw new Error("User not found");

      const payload = {
        id: user.id,
        name: user.name,
      };

      const token= generateToken(payload)
      return token;
  };

   me=async (token) => {
    const user= verifyToken(token)
    return user
  }

}

export default UserServices;