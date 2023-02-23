import { model, Schema } from "mongoose";
import { IOrder } from "../protocols";

const Order = model(
  "Order",
  new Schema<Omit<IOrder, "id">>({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"],
      default: "WAITING",
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Products",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);

export { Order };
