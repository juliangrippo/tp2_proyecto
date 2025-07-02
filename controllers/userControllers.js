import UserServices from "../services/UserServices.js";

class UserControllers {
  userServices = new UserServices();

  getAllUsersControllers = async (req, res) => {
    const users = await this.userServices.getAllUsersService();
    res.status(200).send({
      success: true,
      message: users,
    });
  };

  getUserControllersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await this.userServices.getUserServiceById(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
    }
  };

  createUserControllers = async (req, res) => {
    try {
      const { name, mail, pass, roleId } = req.body;
      const user = await this.userServices.createUserService({
        name,
        mail,
        pass,
        roleId
      });
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;
      const token = await this.userServices.login({ mail, pass });
      res.cookie("login", token);
      res.status(200).send({
        success: true,
        message: "logged",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  me = async (req, res) => {
    try {
      const {login}=req.cookies
      const user=  await this.userServices.me(login)
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  
  updateUserControllers = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const user = await this.userServices.getUserServiceById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      await user.update(data);

      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  deleteUserControllers = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await this.userServices.getUserServiceById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      await user.destroy();

      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

}


export default UserControllers;