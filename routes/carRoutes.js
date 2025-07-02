import { Router } from "express";
import CarControllers from "../controllers/carControllers.js";

const carControllers = new CarControllers();

const carRoutes = Router();

carRoutes.get("/", carControllers.getAllCarsControllers);
carRoutes.get("/:id", carControllers.getCarControllersById);
carRoutes.post("/", carControllers.createCarControllers);
carRoutes.put("/:id", carControllers.updateCarControllers);
carRoutes.delete("/:id", carControllers.deleteCarControllers);

export default carRoutes;