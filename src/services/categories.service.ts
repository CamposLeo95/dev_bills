import { type CategoriesRepository } from "../database/repositories/categories.repository";
import { type CategoryDTO } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";

export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  public async create({ name, color }: CategoryDTO): Promise<Category> {
    const category = new Category({ name, color });

    const createCategory = await this.categoriesRepository.create(category);

    return createCategory;
  }
}
