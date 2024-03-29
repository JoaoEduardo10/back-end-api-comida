/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProducts } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateProductsRepository } from "./protocols";

export class CreateProductsController implements IControllers {
  constructor(
    private readonly createProductRepository: ICreateProductsRepository
  ) {}

  async handle(
    req: IHttpRequest<Omit<IProducts, "id">>
  ): Promise<IHttpResponse<IProducts>> {
    const imagePath = req.file.filename! as string;

    const { category, description, ingredients, name, price } = req.body!;

    const product = await this.createProductRepository.create({
      category,
      description,
      imagePath,
      ingredients: ingredients,
      name,
      price: Number(price),
    });

    return {
      body: product,
      statusCode: 201,
    };
  }
}
