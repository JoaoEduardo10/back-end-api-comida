import { ICategory } from "../../models/protocols";

export interface IListCategoryRepository {
  list(): Promise<ICategory[]>;
}
