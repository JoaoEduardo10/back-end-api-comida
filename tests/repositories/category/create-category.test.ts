import { Category } from "../../../src/server/models/mongo-models/Category";
import { MongoCreateCategoryRepository } from "../../../src/server/repositories/category/create-category";

describe("MongoCreateCategoryRepository", () => {
  it("should add a category to the database", async () => {
    const repository = new MongoCreateCategoryRepository();

    const category = await repository.create({ icon: "test", name: "test" });

    expect(category.id).toBeTruthy();
    expect(category.icon).toBe("test");
    expect(category.name).toBe("test");
  });

  it("should return an error for not creating a category", async () => {
    try {
      jest.spyOn(Category, "create").mockReturnValue(null as any);

      const repository = new MongoCreateCategoryRepository();

      const params = {
        icon: "icone",
        name: "nome",
      };

      const category = await repository.create(params as any);

      expect(category).not.toBeTruthy();
    } catch (error: unknown) {
      expect(error).toBeTruthy;

      expect((error as Error).message).toEqual(
        "Error ao criar a categoria no banco de dados"
      );
    }
  });
});
