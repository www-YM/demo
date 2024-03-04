import { AxiosRequestConfig } from 'axios';
import { BaseResource } from './BaseResource';

export interface RecustomizeData {
  design: DesignData;
  model: DesignModel;
}

export type GetProductsParams = {
  current?: number;
  title?: string;
  status?: string;
  shopId?: string;
  startAt?: string;
  endAt?: string;
  type?: string;
  categoryIds?: string;
};

export default class ShopProductResource extends BaseResource {
  get disableCpodUrl() {
    return this.baseURL + '/shop-products/:id/disable-cpod';
  }

  get enableCpodUrl() {
    return this.baseURL + '/shop-products/:id/enable-cpod';
  }

  get createPendingProductUrl() {
    return this.baseURL + '/shop-products';
  }

  get getShopProductCountsUrl() {
    return this.baseURL + '/shop-products/counts';
  }

  get getShopProductsUrl() {
    return this.baseURL + '/shop-products';
  }

  get getThirdPartyCollectionsUrl() {
    return this.baseURL + '/shop-products/3pt-collections';
  }

  get findShopProductUrl() {
    return this.baseURL + '/shop-products/:id';
  }

  get deleteShopProductUrl() {
    return this.baseURL + '/shop-products/:id';
  }

  get copyShopProductUrl() {
    return this.baseURL + '/shop-products/:id/copy';
  }

  get publishBlankCpodProductUrl() {
    return this.baseURL + '/shop-products/publish-blank-cpod-product';
  }

  get publishShopProductToShopifyUrl() {
    return this.baseURL + '/shop-products/:id/publish-to-shopify';
  }

  get updateShopProductShippingMethodUrl() {
    return this.baseURL + '/shop-products/:id/shipping-method';
  }

  get downloadShopProductMockupsUrl() {
    return this.baseURL + '/shop-products/:id/mockups';
  }

  get removeDiscontinuedVariantsForShopProductUrl() {
    return this.baseURL + '/shop-products/:id/remove-discontinued-variants';
  }

  get getIncompleteVariantsUrl() {
    return this.baseURL + '/shop-products/:id/incomplete-variants';
  }

  get addIncompleteVariantsUrl() {
    return this.baseURL + '/shop-products/:id/add-incomplete-variants';
  }

  get getDiscontinuedVariantsUrl() {
    return this.baseURL + '/shop-products/:id/discontinued-variants';
  }

  get removeDiscontinuedVariantsUrl() {
    return this.baseURL + '/shop-products/:id/remove-discontinued-variants';
  }

  get getRecustomizationDataUrl() {
    return this.baseURL + '/shop-products/:id/recustomization-data';
  }

  getRecustomizeData(id: string): Promise<RecustomizeData> {
    return this.axios
      .get(this.getRecustomizationDataUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  createPendingProduct(params: {
    shopId: number | string;
    productId: number | string;
    designData: DesignData['design'];
  }) {
    return this.axios.post(this.createPendingProductUrl, params);
  }

  getShopProducts(
    params: GetProductsParams,
  ): Promise<{ data: MyProductsListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getShopProductsUrl, { params });
  }

  getThirdPartyCollections(params: {
    shopId: string;
  }): Promise<CollectionLineItem[]> {
    return this.axios
      .get(this.getThirdPartyCollectionsUrl, { params })
      .then(({ data }) => data);
  }

  getIncompleteVariants(id: string): Promise<IncompleteVariant[]> {
    return this.axios
      .get(this.getIncompleteVariantsUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  getDiscontinuedVariants(id: string): Promise<DiscontinuedVariant[]> {
    return this.axios
      .get(this.getDiscontinuedVariantsUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  async removeDiscontinuedVariants(
    id: string,
    data: { productVariants: { id: number }[] },
  ) {
    return this.axios
      .post(this.removeDiscontinuedVariantsUrl.replace(':id', id), data)
      .then(({ data }) => data);
  }

  async disableCpod(id: string) {
    return this.axios.post(this.disableCpodUrl.replace(':id', id));
  }

  async enableCpod(id: string) {
    return this.axios
      .post(this.enableCpodUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  async addIncompleteVariants(
    id: string,
    data: { productVariants: { id: number; retailPrice: number }[] },
  ) {
    return this.axios
      .post(this.addIncompleteVariantsUrl.replace(':id', id), data)
      .then(({ data }) => data);
  }

  getShopProductCounts(shopId: string): Promise<{
    data: {
      all: number;
      published: number;
      unpublished: number;
      error: number;
      hasIncompleteVariants: number;
      hasDiscontinuedVariants: number;
    };
  }> {
    return this.axios.get(this.getShopProductCountsUrl, { params: { shopId } });
  }

  downloadShopProductMockups(id: number | string) {
    return this.axios
      .post(this.downloadShopProductMockupsUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  removeDiscontinuedVariantsForShopProduct(id: number | string) {
    return this.axios
      .post(
        this.removeDiscontinuedVariantsForShopProductUrl.replace(
          ':id',
          String(id),
        ),
      )
      .then(({ data }) => data);
  }

  findShopProduct(id: number | string): Promise<MyProductDetail> {
    return this.axios
      .get(this.findShopProductUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  copyShopProduct(
    productId: number | string,
    params: { shopId: number | string; reserveSku: boolean },
  ): Promise<MyProductDetail> {
    return this.axios.post(
      this.copyShopProductUrl.replace(':id', String(productId)),
      params,
    );
  }

  deleteShopProduct(id: number | string): Promise<MyProductDetail> {
    return this.axios.delete(
      this.deleteShopProductUrl.replace(':id', String(id)),
    );
  }

  publishShopProductToShopify(id: number | string, params) {
    return this.axios.post(
      this.publishShopProductToShopifyUrl.replace(':id', String(id)),
      params,
    );
  }

  publishBlankCpodProduct(params) {
    return this.axios.post(this.publishBlankCpodProductUrl, params);
  }

  updateShopProductShippingMethod(
    id: number | string,
    shippingCarrierId: number,
  ) {
    return this.axios
      .put(this.updateShopProductShippingMethodUrl.replace(':id', String(id)), {
        shippingCarrierId,
      })
      .then(({ data }) => data);
  }

  updateShopProduct(id: string, params: { designData: DesignData['design'] }) {
    return this.axios.put(`/shop-products/${id}/design`, params);
  }
}
