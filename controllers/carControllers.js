import CarServices from "../services/CarServices.js";

class CarControllers {
  carServices = new CarServices();

  getAllCarsControllers = async (req, res) => {
    try {
      const cars = await this.carServices.getAllCarsService();
      res.status(200).send({
        success: true,
        message: cars,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  getCarControllersById = async (req, res) => {
    try {
      const { id } = req.params;
      const car = await this.carServices.getCarServiceById(id);

      if (!car) {
        return res.status(404).send({
          success: false,
          message: "Car not found",
        });
      }

      res.status(200).send({
        success: true,
        message: car,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  createCarControllers = async (req, res) => {
    try {
      const {
        model,
        year,
        color,
        plate,
        engineType,
        transmission,
        brandId,
        userId,
      } = req.body;

      const car = await this.carServices.createCarService({
        model,
        year,
        color,
        plate,
        engineType,
        transmission,
        brandId,
        userId,
      });

      res.status(201).send({
        success: true,
        message: car,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateCarControllers = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedCar = await this.carServices.updateCarService(id, data);

      res.status(200).send({
        success: true,
        message: updatedCar,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteCarControllers = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.carServices.deleteCarService(id);

      res.status(200).send({
        success: true,
        message: result.message,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default CarControllers;
