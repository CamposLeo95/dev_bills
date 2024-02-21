import { StatusCodes } from "http-status-codes";

import { type CategoriesRepository } from "../database/repositories/categories.repository";
import { type CategoryDTO } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";
import { AppError } from "../errors/app.error";

export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  public async create({ name, color }: CategoryDTO): Promise<Category> {
    const foundCategory = await this.categoriesRepository.findByName(name);

    if (foundCategory != null) {
      throw new AppError("Categorie already exists!", StatusCodes.BAD_REQUEST);
    }

    const category = new Category({ name, color });

    const createCategory = await this.categoriesRepository.create(category);

    return createCategory;
  }

  public async index(): Promise<Category[]> {
    const categories = await this.categoriesRepository.index();

    return categories;
  }
}
