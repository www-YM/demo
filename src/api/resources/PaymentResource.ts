import { BaseResource } from './BaseResource';

export type GetPaymentPaginationParams = {
  current?: number;
  orderNumber?: string;
  startAt?: string;
  endAt?: string;
  type?: string;
  shopId?: string;
};

export default class PaymentResource extends BaseResource {
  get getPaymentsUrl() {
    return this.baseURL + '/payments';
  }

  getPayments(
    params: GetPaymentPaginationParams,
  ): Promise<{ data: PaymentsListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getPaymentsUrl, {
      params,
      isClearEmpties: true,
    });
  }
}
