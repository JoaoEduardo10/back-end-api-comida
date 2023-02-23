import { RequestHandler } from "express";
import { Bad_Request } from "../../helpers/api-errors";
import { ICategory } from "../../models/protocols";

export const createCategoryMiddleware: RequestHandler<
  {},
  {},
  Omit<ICategory, "id">
> = async (req, _res, next) => {
  const allFildsOfCategory: (keyof ICategory)[] = ["icon", "name"];

  for (const filds of allFildsOfCategory) {
    if (!req?.body?.[filds as keyof Omit<ICategory, "id">]?.length) {
      throw new Bad_Request(
        `Os campos de icon e name são obrigatorios. Adicione o ${filds}`
      );
    }
  }

  const validateAllFilds = Object.keys(req.body).some(
    (key) => !allFildsOfCategory.includes(key as keyof Omit<ICategory, "id">)
  );

  if (validateAllFilds) {
    throw new Bad_Request(
      "Somente os campos de name e icon podem ser adicionados"
    );
  }

  next();
};
