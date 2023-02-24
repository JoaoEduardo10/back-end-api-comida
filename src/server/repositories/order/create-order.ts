import {
  ICreateOderParams,
  ICreateOrderRepository,
} from "../../controllers/order/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Order } from "../../models/mongo-models/Order";
import { IOrder } from "../../models/protocols";

export class MongoCreateOrderRepository implements ICreateOrderRepository {
  async create(params: ICreateOderParams): Promise<IOrder> {
    const order = await Order.create(params);

    if (!order) {
      throw new Internal_Server_Error(
        "Erro no banco de dados ao criar a Order"
      );
    }

    const { _id, table, status, createAt, products } = order;

    return { id: _id.toHexString(), table, status, createAt, products };
  }
}
