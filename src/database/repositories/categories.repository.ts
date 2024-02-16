import { type Category } from "../../entities/category.entity";
import { type CategoryModel } from "../schemas/category.schema";

export class CategoriesRepository {
  constructor(private readonly model: typeof CategoryModel) {}

  // * Estamos usando a Entidade Category ao inves de Category DTO pois ela vai fazer os ultimos ajustes
  // * antes de passar para o DataBase no caso transformar em upperCase o color

  async create({ name, color }: Category) {
    const createdCategory = await this.model.create({ name, color });

    return createdCategory.toObject<Category>();
  }
}
