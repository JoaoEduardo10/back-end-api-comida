import { RequestHandler } from "express";
import { ListOrderController } from "../../controllers/order/list-order";
import { MongoListOrderRepository } from "../../repositories/order/list-order";

//  list order
const listOrder: RequestHandler = async (req, res) => {
  const mongoListOrder = await new MongoListOrderRepository();

  const listOrderController = await new ListOrderController(mongoListOrder);

  const { body, statusCode } = await listOrderController.handle(req);

  res.status(statusCode).json(body);
};

// creat order
const createOrder: RequestHandler = async (req, res) => {
  res.send("ok");
};

// Change Order status
const ChangeOrderStatus: RequestHandler = async (req, res) => {
  res.send("ok");
};

// delete Cancel order
const deleteCancelOrder: RequestHandler = async (req, res) => {
  res.send("ok");
};

export { ChangeOrderStatus, deleteCancelOrder, listOrder, createOrder };
