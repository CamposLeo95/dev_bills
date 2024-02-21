import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/categories.service";

export class CategoriesFactory {
  private static categoriesService: CategoriesService;

  // ? Esse método irá garantir que caso não haja uma instancia de categories service ela irá criar uma e atribuir a variavel statica criada anteriormente
  static getServiceInstance() {
    if (this.categoriesService != null) {
      return this.categoriesService;
    }

    const repository = new CategoriesRepository(CategoryModel);
    this.categoriesService = new CategoriesService(repository);

    return this.categoriesService;
  }
}
