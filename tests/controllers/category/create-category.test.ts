import { CreateCategoryController } from "../../../src/server/controllers/categories/create-category";
import { ICreateCategoryRepository } from "../../../src/server/controllers/categories/protocols";
import { IHttpRequest } from "../../../src/server/controllers/protocols";
import { ICategory } from "../../../src/server/models/protocols";

class MockCategoryRepository implements ICreateCategoryRepository {
  async create(params: Omit<ICategory, "id">): Promise<ICategory> {
    const { icon, name } = params;

    return { icon: icon, id: "1234", name: name };
  }
}

export const mockReq: IHttpRequest<Omit<ICategory, "id">> = {
  body: {
    icon: "test icon",
    name: "test name",
  },
};

describe("CreateCategoryController", () => {
  it("should create a category created with status codes of 201", async () => {
    const repository = new MockCategoryRepository();
    const controller = new CreateCategoryController(repository);

    const { body, statusCode } = await controller.handle(mockReq);

    expect(body.icon).toBe("test icon");
    expect(body.name).toBe("test name");
    expect(body.id).toBeTruthy();
    expect(statusCode).toBe(201);
  });
});
