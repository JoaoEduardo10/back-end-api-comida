/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ICategory } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateCategoryRepository } from "./protocols";

export class CreateCategoryController implements IControllers {
  constructor(
    private readonly createCatgoryRepository: ICreateCategoryRepository
  ) {}
  async handle(
    req: IHttpRequest<Omit<ICategory, "id">>
  ): Promise<IHttpResponse<ICategory>> {
    const { icon, name } = req.body!;

    const category = await this.createCatgoryRepository.create({
      icon,
      name,
    });

    return {
      body: category,
      statusCode: 201,
    };
  }
}
