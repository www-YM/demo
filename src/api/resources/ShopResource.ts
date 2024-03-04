import { ShopTypeValue } from 'enums';
import { BaseResource } from './BaseResource';

export default class ShopResource extends BaseResource {
  get confirmConnectionUrl() {
    return this.baseURL + '/shops/:id/connection-confirm';
  }

  confirmConnection(id: string) {
    return this.axios.post(this.confirmConnectionUrl.replace(':id', id));
  }

  get getShopsUrl() {
    return this.baseURL + '/shops';
  }

  get removeShopsUrl() {
    return this.baseURL + '/shops/:id';
  }

  get createShopsUrl() {
    return this.baseURL + '/shops';
  }

  get getShopDetailUrl() {
    return this.baseURL + '/shops/:id';
  }

  getShops(
    params: { status?: string } = {},
  ): Promise<{ data: ShopListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getShopsUrl, { params });
  }

  createCustomShop(name: string) {
    const params: CreateCustomShopParams = {
      type: ShopTypeValue.NATIVE,
      name,
    };

    return this.axios
      .post(this.createShopsUrl, params)
      .then(({ data }) => data);
  }

  removeShop(id) {
    return this.axios.delete(this.removeShopsUrl.replace(':id', id));
  }

  getShopDetail(id): Promise<ShopDetail> {
    return this.axios
      .get(this.getShopDetailUrl.replace(':id', id))
      .then(({ data }) => data);
  }
}
