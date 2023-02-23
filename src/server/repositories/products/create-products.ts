import { ICreateProductsRepository } from "../../controllers/products/protocols";
import { Internal_Server_Error } from "../../helpers/api-errors";
import { Products } from "../../models/mongo-models/Products";
import { IProducts } from "../../models/protocols";

export class MongoCreateProductsRepository
  implements ICreateProductsRepository
{
  async create(params: Omit<IProducts, "id">): Promise<IProducts> {
    const product = await Products.create(params);

    if (!product) {
      throw new Internal_Server_Error(
        "Errro no bamnco de dados ao adicionar um produto"
      );
    }

    const { _id, category, description, imagePath, ingredients, name, price } =
      product;

    return {
      id: _id.toHexString(),
      category,
      description,
      imagePath,
      ingredients,
      name,
      price,
    };
  }
}
