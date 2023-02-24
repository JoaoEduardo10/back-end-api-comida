import { RequestHandler } from "express";
import { Not_Found } from "../../helpers/api-errors";

export const deleteOrderMiddlware: RequestHandler<{ orderId: string }> = async (
  req,
  res,
  next
) => {
  const id = req.params.orderId;

  if (id.length > 24 || id.length < 24) {
    throw new Not_Found("id invalido");
  }

  next();
};
