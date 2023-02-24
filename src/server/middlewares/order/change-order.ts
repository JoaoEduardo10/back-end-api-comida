import { RequestHandler } from "express";
import { IChangeOrderParams } from "../../controllers/order/protocols";
import { Bad_Request, Not_Found } from "../../helpers/api-errors";

export const ChangeOrderMiddleware: RequestHandler<
  {
    orderId: string;
  },
  {},
  Omit<IChangeOrderParams, "id">
> = async (req, _res, next) => {
  const { status } = req.body;
  const id = req.params.orderId;

  if (id.length > 24 || id.length < 24) {
    throw new Not_Found("Adicione um id valido");
  }

  if (!status) {
    throw new Bad_Request("Adicione um status");
  }

  if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
    throw new Bad_Request(
      "Status não atualizado, use: WAITING , IN_PRODUCTION ou DONE"
    );
  }

  next();
};
