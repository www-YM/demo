import { BaseResource } from './BaseResource';

type AddItemParams = {
  shopId: string;
  productId: string;
  variants: {
    id: string;
    quantity: number;
  }[];
};

export default class CreditCardResource extends BaseResource {
  get getSampleCartUrl() {
    return this.baseURL + '/sample-cart';
  }

  get addItemUrl() {
    return this.baseURL + '/sample-cart/items';
  }

  get removeItemUrl() {
    return this.baseURL + '/sample-cart/items/:id';
  }

  get updateItemQuantityUrl() {
    return this.baseURL + '/sample-cart/items/:id/quantity';
  }

  get payUrl() {
    return this.baseURL + '/sample-cart/pay';
  }

  get createPendingOrderUrl() {
    return this.baseURL + '/sample-cart/orders';
  }

  get getShippingMethodsUrl() {
    return this.baseURL + '/sample-cart/shipping-methods';
  }

  getSampleCart(shopId: string): Promise<{
    items: SampleCartItem[];
    totalCost: number;
  }> {
    return this.axios
      .get(this.getSampleCartUrl, { params: { shopId } })
      .then(({ data }) => data);
  }

  updateItemQuantity(id, quantity) {
    return this.axios.put(this.updateItemQuantityUrl.replace(':id', id), {
      quantity,
    });
  }

  removeItem(id: number) {
    return this.axios.delete(this.removeItemUrl.replace(':id', String(id)));
  }

  addItem(params: AddItemParams) {
    return this.axios.post(this.addItemUrl, params);
  }

  pay(params) {
    return this.axios.post(this.payUrl, params);
  }

  createPendingOrder(params) {
    return this.axios.post(this.createPendingOrderUrl, params, {
      isClearEmpties: true,
    });
  }

  getShippingMethods(params: {
    countryCode: string;
    shopId: string;
  }): Promise<ShippingMethod[]> {
    return this.axios
      .get(this.getShippingMethodsUrl, { params })
      .then((_) => _.data);
  }
}
