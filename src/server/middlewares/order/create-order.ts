import { RequestHandler } from "express";
import { ICreateOderParams } from "../../controllers/order/protocols";
import { Bad_Request } from "../../helpers/api-errors";

export const createOrderMiddlware: RequestHandler<
  {},
  {},
  Omit<ICreateOderParams, "id">
> = async (req, res, next) => {
  const { products, table } = req.body;

  if (!table) {
    throw new Bad_Request("adicone um table");
  }

  if (!products) {
    throw new Bad_Request("adicone os ou um Products");
  }

  if (products.length <= 0) {
    throw new Bad_Request("adicone os ou um Products: porduct e quantity");
  }

  products.map(({ product, quantity }) => {
    if (!product) {
      throw new Bad_Request("adicone um Product");
    }
    if (!quantity) {
      throw new Bad_Request("adicone uma quantyidade");
    }
  });

  next();
};
