import { IProducts } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IListProductsByCategory } from "./protocols";

export class ListProductsByCategoryControlle implements IControllers {
  constructor(
    private readonly listProductsBycategory: IListProductsByCategory
  ) {}

  async handle(req: IHttpRequest<any>): Promise<IHttpResponse<IProducts[]>> {
    const categoryId = req.params.categoryId as string;

    const products = await this.listProductsBycategory.list(categoryId);

    return {
      body: products,
      statusCode: 200,
    };
  }
}
