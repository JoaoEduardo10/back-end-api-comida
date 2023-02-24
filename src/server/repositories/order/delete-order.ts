import { IDeleteOrderRepository } from "../../controllers/order/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Order } from "../../models/mongo-models/Order";

export class MongoDeleteOrderRepository implements IDeleteOrderRepository {
  async delete(orderId: string): Promise<void> {
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      throw new Internal_Server_Error(
        "Erro no banco de dados ao deletar order: posivelmente usuario ja foi deletado"
      );
    }
  }
}
