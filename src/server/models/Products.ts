import { model, Schema } from "mongoose";
import { IProducts } from "./protocols";

const Products = model(
  "Products",
  new Schema<Omit<IProducts, "id">>({
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    imagePath: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    ingredients: {
      required: true,
      type: [
        {
          name: {
            type: String,
            require: true,
          },
          icon: {
            type: String,
            require: true,
          },
        },
      ],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  })
);

export { Products };
