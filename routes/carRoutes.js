import { Router } from "express";
import CarControllers from "../controllers/carControllers.js";
import auth from "../middlewares/auth.js";
import { adminOnly } from "../middlewares/adminOnly.js";

const carControllers = new CarControllers();

const carsRoutes = Router();


carsRoutes.get("/", carControllers.getAllCarsControllers);
carsRoutes.get("/:id", carControllers.getCarControllersById);

carsRoutes.post("/", auth, adminOnly, carControllers.createCarControllers);
carsRoutes.put("/:id", auth, adminOnly, carControllers.updateCarControllers);
carsRoutes.delete("/:id", auth, adminOnly, carControllers.deleteCarControllers);

export default carsRoutes;