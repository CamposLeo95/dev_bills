import { Router } from "express";

import { CategoriesController } from "../controllers/categories.controller";
import { createCategorySchema } from "../dtos/categories.dto";
import { CategoriesFactory } from "../factories/categories.factory";
import { ParamsType, validator } from "../middlewares/validator.middleware";

export const categoriesRoutes = Router();

// ? Agora que criamos a factory de categories para intanciar o service, nós o passamos aqui.
const controller = new CategoriesController(
  CategoriesFactory.getServiceInstance(),
);

categoriesRoutes.get("/", controller.index);

categoriesRoutes.post(
  "/",
  validator({
    schema: createCategorySchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
