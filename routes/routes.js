import { Router } from "express";
import userRoutes from "./userRoutes.js";
import rolesRoutes from "./rolesRoutes.js";
import carsRoutes from "./carsRoutes.js";
import brandsRoutes from "./brandsRoutes.js";

const routes= Router()

routes.use("/users",userRoutes)
routes.use("/roles", rolesRoutes)
routes.use("/cars", carsRoutes)
routes.use("/brands", brandsRoutes)


export default routes