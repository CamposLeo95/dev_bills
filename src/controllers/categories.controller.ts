import { type NextFunction, type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";

import { type CategoryDTO } from "../dtos/categories.dto";
import { type CategoriesService } from "../services/categories.service";

export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  index = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.categoriesService.index();
      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  create = async (
    req: Request<unknown, unknown, CategoryDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, color } = req.body;

      const result = await this.categoriesService.create({ name, color });

      res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      //! Nós inserimos o next para ele continuar e cair no handlerError que usamos lá no server
      next(error);
    }
  };
}
