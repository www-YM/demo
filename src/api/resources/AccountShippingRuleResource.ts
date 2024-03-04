import { AxiosInstance } from 'axios';
import { BaseResource } from './BaseResource';

export type ShippingRulesRespData = {
  shippingMethods: ShippingRuleShippingMethod[];
  shippingRules: ShippingRule[];
  shops: { id: string; name: string }[];
};

export type ShippingRulesRespDataShop = ShippingRulesRespData['shops'][0];

export default class AccountShippingRuleResource extends BaseResource {
  constructor(protected axios: AxiosInstance) {
    super(axios);
  }

  get getAccountShippingRulesUrl() {
    return this.baseURL + '/account-shipping-rules';
  }

  get updateAccountShippingRuleUrl() {
    return this.baseURL + '/account-shipping-rules/:id';
  }

  get deleteAccountShippingRuleUrl() {
    return this.baseURL + '/account-shipping-rules/:id';
  }

  get createAccountShippingRuleUrl() {
    return this.baseURL + '/account-shipping-rules';
  }

  getAccountShippingRules(): Promise<ShippingRulesRespData> {
    return this.axios
      .get(this.getAccountShippingRulesUrl)
      .then(({ data }) => data);
  }

  deleteAccountShippingRule(id: number) {
    return this.axios.delete(
      this.deleteAccountShippingRuleUrl.replace(':id', String(id)),
    );
  }

  createAccountShippingRule(data: ShippingRule) {
    return this.axios.post(this.createAccountShippingRuleUrl, data);
  }

  updateAccountShippingRule(data: ShippingRule) {
    return this.axios.put(
      this.updateAccountShippingRuleUrl.replace(':id', String(data.id)),
      data,
    );
  }
}
