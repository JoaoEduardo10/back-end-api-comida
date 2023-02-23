import { RequestHandler } from "express";
import { Bad_Request } from "../../helpers/api-errors";
import { IProducts } from "../../models/protocols";

export const createProductsMiddleware: RequestHandler<
  {},
  {},
  Omit<IProducts, "id">
> = async (req, res, next) => {
  const allFildsOfProducst: (keyof Omit<IProducts, "id">)[] = [
    "category",
    "description",
    "imagePath",
    "ingredients",
    "name",
    "price",
  ];

  for (const fileds of allFildsOfProducst) {
    if (!req?.body?.[fileds]) {
      throw new Bad_Request(
        "Envie todos os campos" + allFildsOfProducst.map((key) => key)
      );
    }
  }
};
