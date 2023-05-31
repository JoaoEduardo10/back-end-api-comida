import "dotenv/config";
import supertest from "supertest";
import { server } from "../src/server/server";

import { Category } from "../src/server/models/mongo-models/Category";
import { Order } from "../src/server/models/mongo-models/Order";
import { Products } from "../src/server/models/mongo-models/Products";

import { mongooseCloseDataBase, mongooseConnectMock } from "./mongoMock";

const serverTest = supertest(server);

beforeAll(async () => {
  await mongooseConnectMock();
});

afterEach(() => {
  Category.deleteMany();
  Order.deleteMany();
  Products.deleteMany();
});

afterAll(async () => {
  await mongooseCloseDataBase();
  jest.resetAllMocks();
});

export { serverTest };
