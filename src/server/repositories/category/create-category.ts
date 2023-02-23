import { ICreateCategoryRepository } from "../../controllers/categories/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Category } from "../../models/mongo-models/Category";
import { ICategory } from "../../models/protocols";

export class MongoCreateCategoryRepository
  implements ICreateCategoryRepository
{
  async create(params: Omit<ICategory, "id">): Promise<ICategory> {
    const { icon, name } = params;

    const category = await Category.create({
      icon,
      name,
    });

    if (!category)
      throw new Internal_Server_Error(
        "Error ao criar a categorya no bamco de dados"
      );

    const { _id, icon: newIcon, name: newName } = category;

    return { id: _id.toHexString(), icon: newIcon, name: newName };
  }
}
