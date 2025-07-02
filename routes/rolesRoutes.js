import { Router } from "express";
import RoleControllers from "../controllers/roleControllers.js";
import auth from "../middlewares/auth.js";
import { adminOnly } from "../middlewares/adminOnly.js";


const rolesRoutes = Router();
const roleControllers = new RoleControllers();


rolesRoutes.get("/", roleControllers.getAllRoles);
rolesRoutes.get("/:id", roleControllers.getRoleById);

rolesRoutes.post("/", auth, adminOnly, roleControllers.createRole);
rolesRoutes.put("/:id", auth, adminOnly, roleControllers.updateRole);
rolesRoutes.delete("/:id", auth, adminOnly, roleControllers.deleteRole);


export default rolesRoutes;
