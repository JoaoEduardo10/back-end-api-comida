import { IProducts } from "../../models/protocols";

export interface IListProductsRepository {
  list(): Promise<IProducts[]>;
}

export interface ICreateProductsRepository {
  create(params: Omit<IProducts, "id">): Promise<IProducts>;
}
