import { IListCategoryRepository } from "../../controllers/categories/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Category } from "../../models/mongo-models/Category";
import { ICategory } from "../../models/protocols";

export class MongoListCategoryRepository implements IListCategoryRepository {
  async list(): Promise<ICategory[]> {
    const categories = await Category.find();

    if (!categories)
      throw new Internal_Server_Error("Erro ao carrega o servidor");

    return categories.map(({ _id, name, icon }) => ({
      id: _id.toHexString(),
      name,
      icon,
    }));
  }
}
