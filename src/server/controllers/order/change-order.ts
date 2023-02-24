/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IChangeOrderParams, IChangeOrderRepository } from "./protocols";

export class ChangeOrderController implements IControllers {
  constructor(private readonly changeOrderRepository: IChangeOrderRepository) {}

  async handle(
    req: IHttpRequest<Omit<IChangeOrderParams, "id">>
  ): Promise<IHttpResponse<any>> {
    const id = req.params.orderId as string;
    const { status } = req.body!;

    await this.changeOrderRepository.change({ id, status });

    return {
      body: "",
      statusCode: 204,
    };
  }
}
