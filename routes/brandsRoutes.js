import { Router } from "express";
import BrandControllers from "../controllers/brandControllers.js";

const brandControllers = new BrandControllers();

const brandRoutes = Router();

brandRoutes.get("/", brandControllers.getAllBrandsControllers);
brandRoutes.get("/:id", brandControllers.getBrandControllersById);
brandRoutes.post("/", brandControllers.createBrandControllers);
brandRoutes.put("/:id", brandControllers.updateBrandControllers);
brandRoutes.delete("/:id", brandControllers.deleteBrandControllers);

export default brandRoutes;