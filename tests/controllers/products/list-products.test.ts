import { IListProductsRepository } from "../../../src/server/controllers/products/protocols";
import { ListProductsController } from "../../../src/server/controllers/products/list-products";
import { IProducts } from "../../../src/server/models/protocols";
import { Category } from "../../../src/server/models/mongo-models/Category";
import { mockReq } from "../category/create-category.test";

class MockListProductsRepository implements IListProductsRepository {
  async list(): Promise<IProducts[]> {
    const category = await Category.create({ icon: "test.svg", name: "test" });

    return [
      {
        category: category._id as any,
        description: "um test",
        id: "1223",
        imagePath: "test.png",
        ingredients: [{ name: "test", icon: "test.svg", id: "123" }],
        name: "test",
        price: 20,
      },
    ];
  }
}

describe("ListProductsController", () => {
  it("should get the data from the database and return it with status codes 200", async () => {
    const repository = new MockListProductsRepository();

    const controller = new ListProductsController(repository);

    const { body, statusCode } = await controller.handle(mockReq);

    expect(body.length).toEqual(1);
    expect(statusCode).toBe(200);
  });
});
