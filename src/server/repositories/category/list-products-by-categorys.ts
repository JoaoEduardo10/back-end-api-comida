import { IListProductsByCategory } from "../../controllers/categories/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Products } from "../../models/mongo-models/Products";
import { IProducts } from "../../models/protocols";

export class MongoListProductosByCategory implements IListProductsByCategory {
  async list(categoryId: string): Promise<IProducts[]> {
    const products = await Products.find().where("category").equals(categoryId);

    if (!products) {
      throw new Internal_Server_Error(
        "Error no banco de dados ao lista os produtos."
      );
    }

    return products.map(
      ({
        _id,
        name,
        description,
        imagePath,
        price,
        ingredients,
        category,
      }) => ({
        id: _id.toHexString(),
        name,
        description,
        imagePath,
        price,
        ingredients,
        category,
      })
    );
  }
}
