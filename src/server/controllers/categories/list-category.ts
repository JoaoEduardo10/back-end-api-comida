/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICategory } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IListCategoryRepository } from "./protocols";

export class ListCategoryController implements IControllers {
  constructor(
    private readonly listCategoryRepository: IListCategoryRepository
  ) {}
  async handle(_req: IHttpRequest<any>): Promise<IHttpResponse<ICategory[]>> {
    const category = await this.listCategoryRepository.list();

    return {
      body: category,
      statusCode: 200,
    };
  }
}
