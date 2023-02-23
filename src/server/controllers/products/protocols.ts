import { IProducts } from "../../models/protocols";

export interface IListProductsRepository {
  list(): Promise<IProducts[]>;
}
