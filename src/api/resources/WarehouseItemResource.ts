import { BaseResource } from './BaseResource';

export type GetWarehouseItemsParams = {
  current?: number;
  title?: string;
  startAt?: string;
  endAt?: string;
  types?: string;
};

export default class WarehouseItemResource extends BaseResource {
  get getWarehouseItemsUrl() {
    return this.baseURL + '/warehouse-items';
  }

  get findUrl() {
    return this.baseURL + '/warehouse-items/:id';
  }

  getWarehouseItems(
    params: GetWarehouseItemsParams,
  ): Promise<{ data: WarehouseItemListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getWarehouseItemsUrl, { params });
  }

  find(id: string): Promise<WarehouseItemDetail> {
    return this.axios
      .get(this.findUrl.replace(':id', id))
      .then((resp) => resp.data);
  }
}
