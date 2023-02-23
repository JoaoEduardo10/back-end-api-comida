import { RequestHandler } from "express";
import { ListProductsByCategoryControlle } from "../../controllers/categories/list-products-by-category";
import { CreateProductsController } from "../../controllers/products/create-products";
import { ListProductsController } from "../../controllers/products/list-products";
import { MongoListProductosByCategory } from "../../repositories/category/list-products-by-categorys";
import { MongoCreateProductsRepository } from "../../repositories/products/create-products";
import { MongoListProductsRepository } from "../../repositories/products/list-products";

// list produts
const listProducts: RequestHandler = async (req, res) => {
  const mongoListProductsRepository = await new MongoListProductsRepository();

  const listProductsController = await new ListProductsController(
    mongoListProductsRepository
  );

  const { body, statusCode } = await listProductsController.handle(req);

  res.status(statusCode).json(body);
};

// create products
const createProducts: RequestHandler = async (req, res) => {
  const mongoCreateProductsRepository =
    await new MongoCreateProductsRepository();

  const createProductsController = await new CreateProductsController(
    mongoCreateProductsRepository
  );

  const { body, statusCode } = await createProductsController.handle(req);

  res.status(statusCode).json(body);
};

// get products by categorys
const getProductsByCategories: RequestHandler = async (req, res) => {
  const mongoListProductsByCategoryRepository =
    await new MongoListProductosByCategory();

  const listProdustByCategoryController =
    await new ListProductsByCategoryControlle(
      mongoListProductsByCategoryRepository
    );

  const { body, statusCode } = await listProdustByCategoryController.handle(
    req
  );

  res.status(statusCode).json(body);
};

export { createProducts, getProductsByCategories, listProducts };
