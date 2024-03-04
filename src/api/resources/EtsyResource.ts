import { BaseResource } from './BaseResource';

export default class AuthResource extends BaseResource {
  get authUrl() {
    return this.baseURL + '/etsy/auth';
  }

  get getCategoriesUrl() {
    return this.baseURL + '/etsy/categories';
  }

  get publishShopProductUrl() {
    return this.baseURL + '/shop-products/:id/etsy/publish';
  }

  /**
   * 获取重定向至Etsy授权页的链接
   * @returns etsy 网站授权页
   */
  auth(): Promise<{ data: string }> {
    return this.axios.get(this.authUrl);
  }

  /**
   * 分类数据比较特殊，是三级分类
   * @returns
   */
  getCategories(): Promise<{ data: EtsyCategoriesItem[] }> {
    return this.axios.get(this.getCategoriesUrl);
  }

  /**
   * 发布产品
   * @returns
   */
  publishShopProduct(
    id: number | string,
    params: PublishDialogForm & {
      tags?: string[];
      shopId: number | string;
    },
  ) {
    return this.axios.post(
      this.publishShopProductUrl.replace(':id', String(id)),
      params,
    );
  }
}
