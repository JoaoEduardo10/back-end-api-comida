import { RequestHandler } from "express";
import { ListProductsController } from "../../controllers/products/list-products";
import { MongoListProductsRepository } from "../../rpositories/products/list-products";

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
  res.send("creado");
};

// get products by categorys
const getProductsByCategories: RequestHandler = async (req, res) => {
  res.send("pego");
};

export { createProducts, getProductsByCategories, listProducts };
