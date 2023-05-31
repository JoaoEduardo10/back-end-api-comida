import { serverTest } from "../../jest.setup";

describe("createCategoryMiddleware", () => {
  it("should return a 400 error for not sending the icon in the body", async () => {
    const { body, statusCode } = await serverTest
      .post("/categories")
      .send({ name: "test" });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "Os campos de icon e name são obrigatorios. Adicione o icon",
    });
  });

  it("should return a 400 error for not sending the name in the body", async () => {
    const { body, statusCode } = await serverTest
      .post("/categories")
      .send({ icon: "test" });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "Os campos de icon e name são obrigatorios. Adicione o name",
    });
  });

  it("should return a 400 error for sending too many fields in the body", async () => {
    const { body, statusCode } = await serverTest
      .post("/categories")
      .send({ icon: "test", name: "test", test: "tstst" });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "Somente os campos de name e icon podem ser adicionados",
    });
  });
});
