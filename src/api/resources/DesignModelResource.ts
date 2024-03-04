import { BaseResource } from './BaseResource';

export default class DesignModelResource extends BaseResource {
  get findByProductIdUrl() {
    return this.baseURL + '/products/:id/design-model';
  }

  findByProductId(id: number | string): Promise<{ data: DesignModel }> {
    return this.axios.get(this.findByProductIdUrl.replace(':id', String(id)));
  }
}
