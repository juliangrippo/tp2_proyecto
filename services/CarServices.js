import { Car } from "../models/index.js";

class CarServices {
  getAllCarsService = async () => {
    const cars = await Car.findAll();
    return cars;
  };

  getCarServiceById = async (id) => {
    const car = await Car.findByPk(id);
    return car;
  };

  createCarService = async (data) => {
    const newCar = await Car.create(data);
    return newCar;
  };

  updateCarService = async (id, data) => {
    const car = await Car.findByPk(id);
    if (!car) throw new Error("Car not found");
    await car.update(data);
    return car;
  };

  deleteCarService = async (id) => {
    const car = await Car.findByPk(id);
    if (!car) throw new Error("Car not found");
    await car.destroy();
    return { message: "Car deleted successfully" };
  };
}

export default CarServices;
