import { Category } from "../../../src/server/models/mongo-models/Category";
import { Products } from "../../../src/server/models/mongo-models/Products";
import { MongoListProductosByCategory } from "../../../src/server/repositories/category/list-products-by-categorys";

describe("MongoListProductosByCategory", () => {
  const categoryId = {
    id: "",
  };

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

    categoryId.id = category._id.toHexString();
  });

  it("should return striped products by category", async () => {
    const repository = new MongoListProductosByCategory();

    const category = await repository.list(categoryId.id);

    expect(category.length).toEqual(1);
  });

  it("should return a database error when trying to fetch the list of products by category!", async () => {
    try {
      jest.spyOn(Products, "find").mockReturnValue({
        where: jest.fn().mockReturnThis(),
        equals: jest.fn().mockReturnValue(null),
      } as any);

      const repository = new MongoListProductosByCategory();

      const category = await repository.list(categoryId.id);

      expect(category).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();

      expect((error as Error).message).toEqual(
        "Error no banco de dados ao lista os produtos."
      );
    }
  });
});
