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

export interface IListOrderRpository {
  list(): Promise<IOrder[]>;
}

export interface ICreateOrderRepository {
  create(params: ICreateOderParams): Promise<IOrder>;
}
