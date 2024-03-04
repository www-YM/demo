import { BaseResource } from './BaseResource';

export default class FaqResource extends BaseResource {
  get getFaqsByCategoryIdUrl() {
    return this.baseURL + '/faqs';
  }

  getFaqsByCategoryId(
    categoryId: number | string,
  ): Promise<FaqCategory & { items: Faq[] }> {
    return this.axios
      .get(this.getFaqsByCategoryIdUrl, { params: { categoryId } })
      .then(({ data }) => data);
  }
}
