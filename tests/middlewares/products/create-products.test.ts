import { serverTest } from "../../jest.setup";
import path from "node:path";

describe("createProductsMiddleware", () => {
  it("should return a status code 400 after not uploading an image", async () => {
    const response = await serverTest.post("/products");

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "adicione uma image",
    });
  });

  it("should return a status code 400 for not sending the fields", async () => {
    const img = path.resolve(
      __dirname,
      "./img/1677174050285-quatro-queijos.png"
    );

    const response = await serverTest
      .post("/products")
      .attach("image", img, { filename: img });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "Envie todos os campos: category,description,name,price",
    });
  });
});
