import { ICategory } from "../../models/protocols";

export interface IListCategoryRepository {
  list(): Promise<ICategory[]>;
}

export interface ICreateCategoryRepository {
  create(params: Omit<ICategory, "id">): Promise<ICategory>;
}
