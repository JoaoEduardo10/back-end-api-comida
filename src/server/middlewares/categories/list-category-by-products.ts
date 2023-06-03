import { RequestHandler } from "express";
import { Not_Found } from "../../helpers/api-errors";
import { Category } from "../../models/mongo-models/Category";

const listCategoryByProductsMiddleware: RequestHandler<{
  categoryId: string;
}> = async (req, _res, next) => {
  const { categoryId } = req.params;

  if (categoryId.length !== 24) {
    throw new Not_Found("id invalido!");
  }

  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error("Não existe categorias com esse id");
  }

  next();
};

export { listCategoryByProductsMiddleware };
