import { Role } from "../models/index.js";

class RoleServices {
  getAllRolesService = async () => {
    const roles = await Role.findAll();
    return roles;
  };

  getRoleServiceById = async (id) => {
    const role = await Role.findByPk(id);
    return role;
  };

  createRoleService = async (data) => {
    const newRole = await Role.create(data);
    return newRole;
  };

  updateRoleService = async (id, data) => {
    const role = await Role.findByPk(id);
    if (!role) throw new Error("Role not found");

    await role.update(data);
    return role;
  };


  deleteRoleService = async (id) => {
    const role = await Role.findByPk(id);
    if (!role) throw new Error("Role not found");

    await role.destroy();
    return { message: "Role deleted successfully" };
  };
}

export default RoleServices;
