import { BaseResource } from './BaseResource';

export default class CreditCardResource extends BaseResource {
  get getCreditCardUrl() {
    return this.baseURL + '/credit-cards';
  }

  get createCreditCardUrl() {
    return this.baseURL + '/credit-cards';
  }

  get removeCreditCardUrl() {
    return this.baseURL + '/credit-cards/:id';
  }

  get stripeSecretUrl() {
    return this.baseURL + '/credit-cards/stripe-secret';
  }

  getStripeSecret() {
    return this.axios.get(this.stripeSecretUrl).then(({ data }) => data);
  }

  get(): Promise<CreditCard> {
    return this.axios.get(this.getCreditCardUrl).then(({ data }) => data);
  }

  create(params) {
    return this.axios.post(this.createCreditCardUrl, params);
  }

  removeCreditCard(id) {
    return this.axios.delete(this.removeCreditCardUrl.replace(':id', id));
  }
}
