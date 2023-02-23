import { RequestHandler } from "express";
import { CreateCategoryController } from "../../controllers/categories/create-category";
import { ListCategoryController } from "../../controllers/categories/list-category";
import { MongoCreateCategoryRepository } from "../../repositories/category/create-category";
import { MongoListCategoryRepository } from "../../repositories/category/list-category";

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
  const mongoCreateCategoryRepository =
    await new MongoCreateCategoryRepository();

  const createCategoryController = await new CreateCategoryController(
    mongoCreateCategoryRepository
  );

  const { body, statusCode } = await createCategoryController.handle(req);

  res.status(statusCode).json(body);
};

export { listCatgories, createCatgories };
