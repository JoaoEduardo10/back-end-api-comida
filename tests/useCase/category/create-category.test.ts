import { serverTest } from "../../jest.setup";

describe("createCategoryRouter", () => {
  it("should create category", async () => {
    const { body, statusCode } = await serverTest
      .post("/categories")
      .send({ icon: "icon", name: "test" });

    expect(statusCode).toBe(201);
    expect(body).toBeTruthy();
  });
});
