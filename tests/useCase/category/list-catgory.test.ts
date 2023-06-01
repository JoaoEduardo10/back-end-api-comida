import { Category } from "../../../src/server/models/mongo-models/Category";
import { serverTest } from "../../jest.setup";

describe("listCategory", () => {
  beforeEach(async () => {
    await Category.create({ icon: "test 1", name: "test" });
    await Category.create({ icon: "test 2", name: "test" });
    await Category.create({ icon: "test 3", name: "test" });
  });

  it("should return a list of categories that are in the database with status code 200 from the api", async () => {
    const { body, statusCode } = await serverTest.get("/categories");

    expect(body.length).toBe(3);
    expect(statusCode).toBe(200);
  });
});
