import { BaseResource } from './BaseResource';

export default class FaqCategoryResource extends BaseResource {
  get getCategoriesUrl() {
    return this.baseURL + '/faqs/categories';
  }

  getCategories(): Promise<{ data: CategoryTreeItem[] }> {
    return this.axios.get(this.getCategoriesUrl).then(({ data }) => data);
  }
}
