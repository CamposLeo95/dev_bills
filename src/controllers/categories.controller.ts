import { type NextFunction, type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";

import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { type CategoryDTO } from "../dtos/categories.dto";
import { CategoriesService } from "../services/categories.service";

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CategoryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { name, color } = req.body;

      const repository = new CategoriesRepository(CategoryModel);

      const service = new CategoriesService(repository);

      const result = await service.create({ name, color });

      res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      //! Nós inserimos o next para ele continuar e cair no handlerError que usamos lá no server
      next(error);
    }
  }
}
