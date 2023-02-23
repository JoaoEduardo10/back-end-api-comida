import { RequestHandler } from "express";
import { CreateProductsController } from "../../controllers/products/create-products";
import { ListProductsController } from "../../controllers/products/list-products";
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
  res.send("pego");
};

export { createProducts, getProductsByCategories, listProducts };
