import { BaseResource } from './BaseResource';

export default class PaymentMethodResource extends BaseResource {
  get getPaymentMethodsUrl() {
    return this.baseURL + '/payment-methods';
  }

  get createPaymentMethodUrl() {
    return this.baseURL + '/payment-methods';
  }

  get removePaymentMethodUrl() {
    return this.baseURL + '/payment-methods/:id';
  }

  get stripeSecretUrl() {
    return this.baseURL + '/payment-methods/stripe-secret';
  }

  getPaymentMethods(): Promise<UserSetting['paymentMethods']> {
    return this.axios.get(this.getPaymentMethodsUrl).then(({ data }) => data);
  }

  getStripeSecret() {
    return this.axios.get(this.stripeSecretUrl).then(({ data }) => data);
  }

  create(params: { stripePaymentMethodId: string }) {
    return this.axios.post(this.createPaymentMethodUrl, params);
  }

  removePaymentMethod(id: string) {
    return this.axios.delete(this.removePaymentMethodUrl.replace(':id', id));
  }
}
