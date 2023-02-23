import "express-async-errors";
import express from "express";
import "dotenv/config";
import { router } from "./router";
import { globalsErrors } from "./middlewares/globals-errors";

const server = express();

server.use(express.json());
server.use(router);

server.use(globalsErrors);

export { server };
