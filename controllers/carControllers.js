import CarServices from "../services/CarServices.js";

class CarControllers {
  carServices = new CarServices();

  getAllCarsControllers = async (req, res) => {
    const cars = await this.carServices.getAllCarsService();
    res.status(200).send({
      success: true,
      message: cars,
    });
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

      res.status(200).send({
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

  updateCarControllers(req, res) {
    res.status(200).send("updateCarControllers");
  }

  deleteCarControllers(req, res) {
    res.status(200).send("deleteCarControllers");
  }
}

export default CarControllers;
