import { Schema } from "mongoose";

export interface ICategory {
  id: string | number;
  name: string;
  icon: string;
}

export interface IProducts {
  id: string | number;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: ICategory[];
  category: Schema.Types.ObjectId;
}

export interface IOrder {
  id: string | number;
  table: string;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  createAt: Date;
  products: [
    {
      product: Schema.Types.ObjectId;
      quantity: number;
    }
  ];
}
