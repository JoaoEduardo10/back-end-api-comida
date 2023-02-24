import { IOrder } from "../../models/protocols";

export interface IListOrderRpository {
  list(): Promise<IOrder[]>;
}
