import { BaseResource } from './BaseResource';

type GetCustomerPodDesignsParams = {
  current: number;
  status: string;
  startAt?: string;
  endAt?: string;
  name?: string;
  email?: string;
  shopId?: number | string;
};

export default class CustomerPodDesignResource extends BaseResource {
  get downloadMockupsUrl() {
    return this.baseURL + '/customer-pod-designs/:id/download-mockups';
  }

  get getCustomerPodDesignsUrl() {
    return this.baseURL + '/customer-pod-designs';
  }

  get findCustomerPodDesignUrl() {
    return this.baseURL + '/customer-pod-designs/:id';
  }

  get getCustomerPodDesignCountsUrl() {
    return this.baseURL + '/customer-pod-designs/counts';
  }

  get publishUrl() {
    return this.baseURL + '/customer-pod-designs/:id/publish';
  }

  publish(id: string, params) {
    return this.axios.post(this.publishUrl.replace(':id', String(id)), params);
  }

  downloadMockups(id: number | string): Promise<{ url: string }> {
    return this.axios
      .post(this.downloadMockupsUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  getCustomerPodDesigns(
    params: GetCustomerPodDesignsParams,
  ): Promise<{ data: CustomerPodDesignsListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getCustomerPodDesignsUrl, { params });
  }

  findCustomerPodDesign(
    id: number | string,
  ): Promise<CustomerPodDesignsListItem> {
    return this.axios
      .get(this.findCustomerPodDesignUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  getCustomerPodDesignCounts(shopId: string): Promise<{
    data: {
      all: number;
      published: number;
      unpublished: number;
      error: number;
    };
  }> {
    return this.axios.get(this.getCustomerPodDesignCountsUrl, {
      params: { shopId },
    });
  }
}
