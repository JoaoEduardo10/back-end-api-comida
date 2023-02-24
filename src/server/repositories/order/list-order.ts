import { IListOrderRpository } from "../../controllers/order/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Order } from "../../models/mongo-models/Order";
import { IOrder } from "../../models/protocols";

export class MongoListOrderRepository implements IListOrderRpository {
  async list(): Promise<IOrder[]> {
    const order = await Order.find()
      .sort({ createAt: 1 })
      .populate("products.product");

    if (!order) {
      throw new Internal_Server_Error(
        "Erro no banco de dados ao lista as Order"
      );
    }

    return order.map(({ _id, table, status, createAt, products }) => ({
      id: _id.toHexString(),
      table,
      status,
      createAt,
      products,
    }));
  }
}
