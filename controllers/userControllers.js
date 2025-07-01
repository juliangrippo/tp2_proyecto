import UserServices from "../services/UserServices.js";

class UserControllers {
    UserServices = new UserServices();
    
    getAllUsersControllers = (req, res) => {
        const users = this.userServices.getAllUsersService();
        res.status(200).send({
        success: true,
        message: users,
        });
    };

  getUserControllersById = (req, res) => {
    const { id } = req.params;
    const user = this.userServices.getUserServiceById(id);
    res.status(200).send({
      success: true,
      message: user,
    });
  };

  createUserControllers = (req, res) => {
    const newUser = req.body;
    const user = this.userServices.createUserService(newUser);
    res.status(201).send({
      success: true,
      message: "User created successfully",
      data: user,
    });
  };

  updateUserControllers = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = this.userServices.updateUserService(id, updateData);
    res.status(200).send({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  };

  deleteUserControllers = (req, res) => {
    const { id } = req.params;
    const result = this.userServices.deleteUserService(id);
    res.status(200).send({
      success: true,
      message: result,
    });
  };
}

export default UserControllers;