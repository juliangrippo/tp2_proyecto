import { Router } from "express";
import BrandControllers from "../controllers/brandControllers.js";
import auth  from "../middlewares/auth.js";
import { adminOnly } from "../middlewares/adminOnly.js";


const brandControllers = new BrandControllers();

const brandRoutes = Router();

brandRoutes.get("/", brandControllers.getAllBrandsControllers);
brandRoutes.get("/:id", brandControllers.getBrandControllersById);

brandRoutes.post("/",  auth, adminOnly, brandControllers.createBrandControllers);
brandRoutes.put("/:id",  auth, adminOnly, brandControllers.updateBrandControllers);
brandRoutes.delete("/:id", auth, adminOnly, brandControllers.deleteBrandControllers);

export default brandRoutes;