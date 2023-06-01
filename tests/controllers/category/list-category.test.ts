import { IListCategoryRepository } from "../../../src/server/controllers/categories/protocols";
import { ListCategoryController } from "../../../src/server/controllers/categories/list-category";
import { ICategory } from "../../../src/server/models/protocols";
import { mockReq } from "./create-category.test";

class MockListCategoryRepository implements IListCategoryRepository {
  async list(): Promise<ICategory[]> {
    const list: ICategory[] = [
      {
        icon: "test 1",
        name: "test 2",
        id: "1234",
      },
      {
        icon: "test 2",
        name: "test 3",
        id: "12345",
      },
    ];

    return list;
  }
}

describe("ListCategoryController", () => {
  it("should return a data base category list with status code 400", async () => {
    const repository = new MockListCategoryRepository();
    const controller = new ListCategoryController(repository);

    const { body, statusCode } = await controller.handle(mockReq);

    expect(body.length).toBe(2);
    expect(statusCode).toBe(200);
  });
});
