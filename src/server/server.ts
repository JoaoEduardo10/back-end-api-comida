import "express-async-errors";
import express from "express";
import "dotenv/config";
import { router } from "./router";
import { globalsErrors } from "./middlewares/globals-errors";
import path from "node:path";

const server = express();

server.use(express.json());
server.use(router);
server.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "..", "uploads"))
);

server.use(globalsErrors);

export { server };
