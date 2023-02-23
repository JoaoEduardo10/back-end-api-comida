/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProducts } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IListProductsRepository } from "./protocols";

export class ListProductsController implements IControllers {
  constructor(
    private readonly listProductsRepository: IListProductsRepository
  ) {}
  async handle(_req: IHttpRequest<any>): Promise<IHttpResponse<IProducts[]>> {
    const products = await this.listProductsRepository.list();

    return {
      body: products,
      statusCode: 200,
    };
  }
}
