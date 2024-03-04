import { BaseResource } from './BaseResource';

type GetProductsParams = {
  current?: number;
  categoryIds?: string;
  type?: ProductType;
};

type GetProductShippingParams = {
  id: number;
  countryCode: string;
  quantityList: string[];
};

export default class ProductResource extends BaseResource {
  get homePageProductUrl() {
    return this.baseURL + '/products/homepage-products';
  }

  get getProductsUrl() {
    return this.baseURL + '/products';
  }

  get getProductSlugsUrl() {
    return this.baseURL + '/products/slugs';
  }

  get getSitemapProductsUrl() {
    return this.baseURL + '/products/sitemap';
  }

  get findProductBySlugUrl() {
    return this.baseURL + '/products/slug/:slug';
  }

  get getProductShippingUrl() {
    return this.baseURL + '/products/:id/shipping';
  }

  homepageProducts(): Promise<{ data: BestSellerProduct[] }> {
    return this.axios.get(this.homePageProductUrl);
  }

  getProducts(
    params: GetProductsParams,
  ): Promise<{ data: Product[]; meta: PageMeta }> {
    return this.axios.get(this.getProductsUrl, {
      params: { ...params, perPage: 80 },
    });
  }

  getSitmapProducts(): Promise<{ data: Product[] }> {
    return this.axios.get(this.getSitemapProductsUrl).then(({ data }) => data);
  }

  getProductSlugs(): Promise<{
    data: {
      id: number;
      slug: string;
      category: ProductCategory;
      parentCategorySlug: string;
      chidCategorySlug: string;
    }[];
  }> {
    return this.axios.get(this.getProductSlugsUrl);
  }

  getProductShipping(params: GetProductShippingParams): Promise<{
    country: string;
    shippingMethods: {
      costs: {
        cost: number;
        message: string;
        quantity: number;
        weight: number;
      }[];
      name: string;
      maxDeliveryDays: number;
      minDeliveryDays: number;
    }[];
  }> {
    return this.axios.get(
      this.getProductShippingUrl.replace(':id', params.id + ''),
      {
        params,
      },
    );
  }

  findProductBySlug(slug: string): Promise<{ data: ProductDetail }> {
    return this.axios.get(this.findProductBySlugUrl.replace(':slug', slug));
  }
}
