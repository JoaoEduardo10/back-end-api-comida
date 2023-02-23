import { RequestHandler } from "express";
import { ListCategoryController } from "../../controllers/categories/list-category";
import { MongoListCategoryRepository } from "../../rpositories/category/list-category";

// list categories
const listCatgories: RequestHandler = async (req, res) => {
  const mongoListCategoryRepository = await new MongoListCategoryRepository();

  const listCategoryController = await new ListCategoryController(
    mongoListCategoryRepository
  );

  const { body, statusCode } = await listCategoryController.handle(req);

  res.status(statusCode).json(body);
};

// create categories
const createCatgories: RequestHandler = async (req, res) => {
  res.send("criado");
};

export { listCatgories, createCatgories };
