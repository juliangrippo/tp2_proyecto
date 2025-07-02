import { Brand } from "../models/index.js";

class BrandServices {
  getAllBrands = async () => {
    const brands = await Brand.findAll();
    return brands;
  };

  getBrandById = async (id) => {
    const brand = await Brand.findByPk(id);
    return brand;
  };

  createBrand = async (data) => {
    const newBrand = await Brand.create(data);
    return newBrand;
  };

  updateBrand = async (id, data) => {
    const brand = await Brand.findByPk(id);
    if (!brand) throw new Error("Brand not found");
    await brand.update(data);
    return brand;
  };

  deleteBrand = async (id) => {
    const brand = await Brand.findByPk(id);
    if (!brand) throw new Error("Brand not found");
    await brand.destroy();
    return { message: "Brand deleted successfully" };
  };
}

export default BrandServices;
