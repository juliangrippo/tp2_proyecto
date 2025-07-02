import RoleServices from "../services/RoleServices.js";

class RoleControllers {
  roleServices = new RoleServices();

  getAllRoles = async (req, res) => {
    try {
      const roles = await this.roleServices.getAllRolesService();
      res.status(200).json({ success: true, roles });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.getRoleServiceById(id);
      if (!role) {
        return res.status(404).json({ success: false, message: "Role not found" });
      }
      res.status(200).json({ success: true, role });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  createRole = async (req, res) => {
    try {
      const { roleName } = req.body;
      const role = await this.roleServices.createRoleService({ roleName });
      res.status(201).json({ success: true, role });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  updateRole = async (req, res) => {
    try {
      const { id } = req.params;
      const { roleName } = req.body;
      const updated = await this.roleServices.updateRoleService(id, { roleName });
      res.status(200).json({ success: true, role: updated });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.roleServices.deleteRoleService(id);
      res.status(200).json({ success: true, ...result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}

export default RoleControllers;
