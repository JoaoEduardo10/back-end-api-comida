import { RequestHandler } from "express";
import { CreateOrderController } from "../../controllers/order/create-order";
import { ListOrderController } from "../../controllers/order/list-order";
import { MongoCreateOrderRepository } from "../../repositories/order/create-order";
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
  const mongoCreateOrder = await new MongoCreateOrderRepository();

  const createOrderController = await new CreateOrderController(
    mongoCreateOrder
  );

  const { body, statusCode } = await createOrderController.handle(req);

  res.status(statusCode).json(body);
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
