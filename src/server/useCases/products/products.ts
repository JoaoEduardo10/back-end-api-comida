import { RequestHandler } from "express";
// list produts

const listProducts: RequestHandler = async (req, res) => {
  res.send("ok");
};

// create products
const createProducts: RequestHandler = async (req, res) => {
  res.send("creado");
};

// get products by categorys
const getProductsByCategories: RequestHandler = async (req, res) => {
  res.send("pego");
};

export { createProducts, getProductsByCategories, listProducts };
