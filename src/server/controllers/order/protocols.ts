import { Schema } from "mongoose";
import { IOrder } from "../../models/protocols";

export interface ICreateOderParams {
  table: string;
  products: [
    {
      product: Schema.Types.ObjectId;
      quantity: number;
    }
  ];
}

export interface IChangeOrderParams {
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  id: string;
}

export interface IListOrderRpository {
  list(): Promise<IOrder[]>;
}

export interface ICreateOrderRepository {
  create(params: ICreateOderParams): Promise<IOrder>;
}

export interface IChangeOrderRepository {
  change(params: IChangeOrderParams): Promise<void>;
}

export interface IDeleteOrderRepository {
  delete(orderId: string): Promise<void>;
}
