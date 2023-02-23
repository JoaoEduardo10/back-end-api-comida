import { RequestHandler } from "express";

//  list order
const listOrder: RequestHandler = async (req, res) => {
  res.send("ok");
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
