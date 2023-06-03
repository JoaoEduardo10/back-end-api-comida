import { Category } from "../../../src/server/models/mongo-models/Category";
import { Products } from "../../../src/server/models/mongo-models/Products";
import { serverTest } from "../../jest.setup";

describe("listProductsRouter", () => {
  beforeEach(async () => {
    const category = await Category.create({ icon: "test.png", name: "test" });
    await Products.create({
      category: category._id,
      description: "test",
      imagePath: "test.png",
      price: 23,
      ingredients: [{ icon: "qeuijo.png", name: "queijo", id: "1234" }],
      name: "test",
    });
  });

  it("should fetch the list of categories in the api and return a status code 200", async () => {
    const { body, statusCode } = await serverTest.get("/products");

    expect(body.length).toBe(1);
    expect(statusCode).toBe(200);
  });
});
