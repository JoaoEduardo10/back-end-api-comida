import { ICreateProductsRepository } from "../../../src/server/controllers/products/protocols";
import { CreateProductsController } from "../../../src/server/controllers/products/create-products";
import { IProducts } from "../../../src/server/models/protocols";
import { IHttpRequest } from "../../../src/server/controllers/protocols";
import { Category } from "../../../src/server/models/mongo-models/Category";

class MockCreateProductsRepository implements ICreateProductsRepository {
  async create(params: Omit<IProducts, "id">): Promise<IProducts> {
    const { category, description, imagePath, ingredients, name, price } =
      params;

    return {
      category,
      description,
      id: "1234",
      imagePath,
      ingredients,
      name,
      price,
    };
  }
}

describe("CreateProductsController", () => {
  let mockRequest: IHttpRequest<Omit<IProducts, "id">>;
  let category: any;

  beforeEach(async () => {
    category = await Category.create({ icon: "test 1", name: "test" });

    mockRequest = {
      body: {
        category: category._id,
        description: "um test",
        imagePath: "test.png",
        ingredients: [{ icon: "queijo.png", id: "123", name: "peperone" }],
        name: "pizza",
        price: 20,
      },
      file: {
        filename: "test.png",
      },
    };
  });

  it("should return a product created from the repository with status code 201", async () => {
    const repository = new MockCreateProductsRepository();

    const controller = new CreateProductsController(repository);

    const { body, statusCode } = await controller.handle(mockRequest);

    expect(body).toBeTruthy();
    expect(statusCode).toBe(201);
  });
});
