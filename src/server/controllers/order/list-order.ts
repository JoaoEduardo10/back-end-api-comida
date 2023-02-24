/* eslint-disable @typescript-eslint/no-unused-vars */
import { IOrder } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IListOrderRpository } from "./protocols";

export class ListOrderController implements IControllers {
  constructor(private readonly listOrderRepository: IListOrderRpository) {}

  async handle(_req: IHttpRequest<any>): Promise<IHttpResponse<IOrder[]>> {
    const order = await this.listOrderRepository.list();

    return {
      body: order,
      statusCode: 200,
    };
  }
}
