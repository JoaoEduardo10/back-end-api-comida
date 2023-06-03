import { Products } from "../../../src/server/models/mongo-models/Products";
import { Category } from "../../../src/server/models/mongo-models/Category";
import { MongoListProductsRepository } from "../../../src/server/repositories/products/list-products";

describe("MongoListProductsRepository", () => {
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

  it("should fetch the products from the database", async () => {
    const repository = new MongoListProductsRepository();

    const products = await repository.list();

    expect(products.length).toBe(1);
  });

  it("should not return a list of products", async () => {
    try {
      jest.spyOn(Products, "find").mockReturnValue(null as any);

      const repository = new MongoListProductsRepository();

      const products = await repository.list();

      expect(products).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();

      expect((error as Error).message).toEqual(
        "Error no banco de dados ao lista os produtos."
      );
    }
  });
});
