import { ICategory, IProducts } from "../../models/protocols";

export interface IListCategoryRepository {
  list(): Promise<ICategory[]>;
}

export interface ICreateCategoryRepository {
  create(params: Omit<ICategory, "id">): Promise<ICategory>;
}

export interface IListProductsByCategory {
  list(categoryId: string): Promise<IProducts[]>;
}
