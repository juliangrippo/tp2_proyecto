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
      const { name, mail, pass } = req.body;
      const user = await this.userServices.createUserService({
        name,
        mail,
        pass,
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
  updateUserControllers(req, res) {
    res.status(200).send("updateUserControllers");
  }
  deleteUserControllers(req, res) {
    res.status(200).send("deleteUserControllers");
  }
}


export default UserControllers;