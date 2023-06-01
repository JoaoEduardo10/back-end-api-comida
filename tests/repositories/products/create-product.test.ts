import { IProducts } from "../../../src/server/models/protocols";
import { MongoCreateProductsRepository } from "../../../src/server/repositories/products/create-products";
import { Category } from "../../../src/server/models/mongo-models/Category";
import { Products } from "../../../src/server/models/mongo-models/Products";

describe("MongoCreateProductsRepository", () => {
  let category: any;

  beforeEach(async () => {
    category = await Category.create({ icon: "test 1", name: "test" });
  });

  it("should add a product to the database", async () => {
    const repository = new MongoCreateProductsRepository();

    const params: Omit<IProducts, "id"> = {
      category: category._id,
      description: "um test",
      imagePath: "test.png",
      ingredients: [{ icon: "test", id: "1234", name: "catupiri" }],
      name: "pizza",
      price: 20,
    };

    const product = await repository.create(params);

    expect(product).toBeTruthy();
  });

  it("should return an error when trying to create a product", async () => {
    try {
      jest.spyOn(Products, "create").mockReturnValue(null as any);

      const repository = new MongoCreateProductsRepository();

      const params: Omit<IProducts, "id"> = {
        category: category._id,
        description: "um test",
        imagePath: "test.png",
        ingredients: [{ icon: "test", id: "1234", name: "catupiri" }],
        name: "pizza",
        price: 20,
      };

      const product = await repository.create(params);

      expect(product).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toEqual(
        "Erro no banco de dados ao adicionar um produto"
      );
    }
  });
});
