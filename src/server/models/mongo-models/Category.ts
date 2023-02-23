import { model, Schema } from "mongoose";
import { ICategory } from "../protocols";

const Category = model(
  "Category",
  new Schema<Omit<ICategory, "id">>({
    name: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
  })
);

export { Category };
