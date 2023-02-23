import { Router } from "express";
import { createCategoryMiddleware } from "./middlewares/categories/create-category-middleware";
import {
  createCatgories,
  listCatgories,
} from "./useCases/categories/categories";
import {
  ChangeOrderStatus,
  createOrder,
  deleteCancelOrder,
  listOrder,
} from "./useCases/order/order";
import {
  createProducts,
  getProductsByCategories,
  listProducts,
} from "./useCases/products/products";

const router = Router();

router.get("/categories", listCatgories);
router.post("/categories", createCategoryMiddleware, createCatgories);

router.get("/products", listProducts);
router.post("/products", createProducts);
router.get("/categories/:categoryId/products", getProductsByCategories);

router.get("/orders", listOrder);
router.post("/orders", createOrder);
router.patch("/orders/:orderId", ChangeOrderStatus);
router.delete("/orders/:oderId", deleteCancelOrder);

export { router };
