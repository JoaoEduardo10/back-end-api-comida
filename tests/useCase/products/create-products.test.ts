/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Category } from "../../../src/server/models/mongo-models/Category";
import { serverTest } from "../../jest.setup";
import path from "node:path";

describe("createProducts", () => {
  const products = {
    description: "test",
    name: "pizza",
    price: 22,
    ingredients: [{ icon: "test.png", name: "peperone" }],
  } as any;

  it("should create a products", async () => {
    const img = path.resolve(
      __dirname,
      "./img/1677174050285-quatro-queijos.png"
    );

    const category = await Category.create({ icon: "test 1", name: "test" });

    products.category = category.id;

    const response = await serverTest
      .post("/products")
      .set("Content-Type", "multipart/form-data")
      .field("category", products.category)
      .field("name", products.name)
      .field("description", products.description)
      .field("price", products.price)
      .attach("image", img, { filename: img });

    expect(response.statusCode).toBe(201);
    expect(response.body).toBeTruthy();
  });
});
