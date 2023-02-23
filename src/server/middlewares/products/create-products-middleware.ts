import { RequestHandler } from "express";
import { Bad_Request } from "../../helpers/api-errors";
import { IProducts } from "../../models/protocols";

export const createProductsMiddleware: RequestHandler<
  {},
  {},
  Omit<IProducts, "id">
> = async (req, _res, next) => {
  const allFildsOfProducst: (keyof Omit<IProducts, "id" | "imagePath">)[] = [
    "category",
    "description",
    "ingredients",
    "name",
    "price",
  ];

  if (!req.file?.filename) {
    throw new Bad_Request("adicione uma image");
  }

  for (const fileds of allFildsOfProducst) {
    if (!req?.body?.[fileds]) {
      throw new Bad_Request(
        "Envie todos os campos" + allFildsOfProducst.map((key) => key)
      );
    }
  }

  next();
};
