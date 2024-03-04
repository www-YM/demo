import { BaseResource } from './BaseResource';

export default class CategoryResource extends BaseResource {
  get getCategoriesUrl() {
    return this.baseURL + '/categories';
  }

  getCategories(
    type: ProductType = 'customizable_product',
  ): Promise<{ data: CategoryTreeItem[] }> {
    return this.axios.get(this.getCategoriesUrl, { params: { type } });
  }
}
