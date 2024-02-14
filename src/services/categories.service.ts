import { Category } from '../entities/category.entity';

export class CategoriesService {
  public async create(): Promise<Category> {
    const category = new Category({
      name: 'Example',
      color: '#ff33bb',
    });
    return category;
  }
}
