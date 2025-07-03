import BrandServices from "../services/BrandServices.js";

class BrandControllers {
  brandServices = new BrandServices();

  getAllBrandsControllers = async (req, res) => {
    const brands = await this.brandServices.getAllBrands();

    const brandsData = brands.map((brand) => ({
      name: brand.name,
      country: brand.country,
      foundedYear: brand.foundedYear,
      description: brand.description,
    }));

    res.status(200).send({
      success: true,
      message: brandsData,
    });
  };

  getBrandControllersById = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await this.brandServices.getBrandById(id);

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
      const { name, country, foundedYear, description } = req.body;


      const brand = await this.brandServices.createBrand({
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

  updateBrandControllers = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedBrand = await this.brandServices.updateBrand(id, data);

      res.status(200).send({
        success: true,
        message: updatedBrand,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteBrandControllers = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await this.brandServices.deleteBrand(id);

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

export default BrandControllers;
