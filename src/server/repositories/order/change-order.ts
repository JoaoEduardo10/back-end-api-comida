import {
  IChangeOrderParams,
  IChangeOrderRepository,
} from "../../controllers/order/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Order } from "../../models/mongo-models/Order";

export class MongoChangeOrderRepository implements IChangeOrderRepository {
  async change(params: IChangeOrderParams): Promise<void> {
    const { id, status } = params;

    const order = await Order.findByIdAndUpdate(id, { status });

    if (!order) {
      throw new Internal_Server_Error(
        "Erro no banco d dados ao atualiar o status"
      );
    }
  }
}
