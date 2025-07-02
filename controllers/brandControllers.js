import BrandServices from "../services/BrandServices.js";

class BrandControllers {
  brandServices = new BrandServices();

  getAllBrandsControllers = async (req, res) => {
    const brands = await this.brandServices.getAllBrandsService();
    res.status(200).send({
      success: true,
      message: brands,
    });
  };

  getBrandControllersById = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await this.brandServices.getBrandServiceById(id);

      if (!brand) {
        return res.status(404).send({
          success: false,
          message: "Brand not found",
        });
      }

      res.status(200).send({
        success: true,
        message: brand,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  createBrandControllers = async (req, res) => {
    try {
      const { name, country, foundedYear, description } =
        req.body;

      const brand = await this.brandServices.createBrandService({
        name,
        country,
        foundedYear,
        description,
      });

      res.status(200).send({
        success: true,
        message: brand,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateBrandControllers(req, res) {
    res.status(200).send("updateBrandControllers");
  }

  deleteBrandControllers(req, res) {
    res.status(200).send("deleteBrandControllers");
  }
}

export default BrandControllers;
