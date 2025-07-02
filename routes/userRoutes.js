import { Router } from "express";
import UserControllers from "../controllers/userControllers.js";
import auth from "../middlewares/auth.js";
import { adminOnly } from "../middlewares/adminOnly.js";

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.post("/login", userControllers.login);
userRoutes.get("/me", auth, userControllers.me);
userRoutes.get("/", userControllers.getAllUsersControllers);
userRoutes.get("/:id", userControllers.getUserControllersById);

userRoutes.post("/",auth, adminOnly, userControllers.createUserControllers);
userRoutes.put("/:id", auth, adminOnly, userControllers.updateUserControllers);
userRoutes.delete("/:id", auth, adminOnly, userControllers.deleteUserControllers);

export default userRoutes;