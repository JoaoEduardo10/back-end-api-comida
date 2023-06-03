import { ListProductsByCategoryControlle } from "../../../src/server/controllers/categories/list-products-by-category";
import { MongoListProductosByCategory } from "../../../src/server/repositories/category/list-products-by-categorys";
import { Category } from "../../../src/server/models/mongo-models/Category";
import { Products } from "../../../src/server/models/mongo-models/Products";
import { IHttpRequest } from "../../../src/server/controllers/protocols";

describe("ListProductsByCategoryControlle", () => {
  let categoryId: any = null;

  beforeEach(async () => {
    const category = await Category.create({ icon: "test.svg", name: "test" });

    await Products.create({
      category: category._id,
      description: "test",
      price: 20,
      imagePath: "test.svg",
      name: "test",
      ingredients: [{ icon: "test.svg", id: "123", name: "1324" }],
    });
    categoryId = category._id.toHexString();
  });

  it("should get the list of products by category from the database and return status code 200", async () => {
    const mockRequest: IHttpRequest<any> = {
      params: {
        categoryId: categoryId,
      },
    };

    const repository = new MongoListProductosByCategory();

    const controller = new ListProductsByCategoryControlle(repository);

    const { body, statusCode } = await controller.handle(mockRequest);

    expect(statusCode).toBe(200);
    expect(body.length).toBe(1);
  });
});
