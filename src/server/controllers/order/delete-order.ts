import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IDeleteOrderRepository } from "./protocols";

export class DeleteOrderController implements IControllers {
  constructor(private readonly deleteOrderRepository: IDeleteOrderRepository) {}

  async handle(req: IHttpRequest<any>): Promise<IHttpResponse<any>> {
    const orderId = req.params.orderId as string;

    await this.deleteOrderRepository.delete(orderId);

    return {
      body: "",
      statusCode: 200,
    };
  }
}
