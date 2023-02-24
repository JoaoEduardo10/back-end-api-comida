/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IOrder } from "../../models/protocols";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateOderParams, ICreateOrderRepository } from "./protocols";

export class CreateOrderController implements IControllers {
  constructor(private readonly createOrderRepository: ICreateOrderRepository) {}

  async handle(
    req: IHttpRequest<ICreateOderParams>
  ): Promise<IHttpResponse<IOrder>> {
    const { products, table } = req.body!;

    const order = await this.createOrderRepository.create({
      products,
      table,
    });

    return {
      body: order,
      statusCode: 201,
    };
  }
}
