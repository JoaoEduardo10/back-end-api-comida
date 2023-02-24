import path from "node:path";

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

import multer from "multer";
import { createProductsMiddleware } from "./middlewares/products/create-products-middleware";
import { ChangeOrderMiddleware } from "./middlewares/order/change-order";
import { createOrderMiddlware } from "./middlewares/order/create-order";
import { deleteOrderMiddlware } from "./middlewares/order/delete-order";

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/categories", listCatgories);
router.post("/categories", createCategoryMiddleware, createCatgories);

router.get("/products", listProducts);
router.post(
  "/products",
  upload.single("image"),
  createProductsMiddleware,
  createProducts
);
router.get("/categories/:categoryId/products", getProductsByCategories);

router.get("/orders", listOrder);
router.post("/orders", createOrderMiddlware, createOrder);
router.patch("/orders/:orderId", ChangeOrderMiddleware, ChangeOrderStatus);
router.delete("/orders/:orderId", deleteOrderMiddlware, deleteCancelOrder);

export { router };
