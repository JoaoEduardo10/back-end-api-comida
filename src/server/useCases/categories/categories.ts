import { RequestHandler } from "express";

// list categories
const listCatgories: RequestHandler = async (req, res) => {
  res.send("ok");
};

// create categories
const createCatgories: RequestHandler = async (req, res) => {
  res.send("criado");
};

export { listCatgories, createCatgories };
