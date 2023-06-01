import { Category } from "../../../src/server/models/mongo-models/Category";
import { MongoListCategoryRepository } from "../../../src/server/repositories/category/list-category";

describe("MongoListCategoryRepository", () => {
  beforeEach(async () => {
    await Category.create({ icon: "test1", name: "test1" });
    await Category.create({ icon: "test2", name: "test2" });
    await Category.create({ icon: "test3", name: "test3" });
  });

  it("should search the categories in the database", async () => {
    const repository = new MongoListCategoryRepository();

    const category = await repository.list();

    expect(category).toBeTruthy();
    expect(category.length).toBe(3);
  });

  it("should return an error when fetching the categories", async () => {
    try {
      jest.spyOn(Category, "find").mockReturnValue(null as any);

      const repository = new MongoListCategoryRepository();

      const category = await repository.list();

      expect(category).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toEqual("Erro no banco de dados!");
    }
  });
});
