import { RequestHandler } from "express";
import { Bad_Request } from "../../helpers/api-errors";
import { IProducts } from "../../models/protocols";

export const createProductsMiddleware: RequestHandler<
  {},
  {},
  Omit<IProducts, "id">
> = async (req, _res, next) => {
  const { category, description, name, price } = req.body;

  if (!req.file?.filename) {
    throw new Bad_Request("adicione uma image");
  }

  if (!category || !description || !name || !price) {
    throw new Bad_Request(
      "Envie todos os campos: category,description,name,price"
    );
  }

  next();
};
