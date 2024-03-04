import { BaseResource } from './BaseResource';

export default class CountryVatResource extends BaseResource {
  get getCountryVatUrl() {
    return this.baseURL + '/country-vats/:countryCode';
  }

  async getCountryVat(countryCode: string): Promise<CountryVat> {
    return this.axios
      .get(this.getCountryVatUrl.replace(':countryCode', countryCode))
      .then((data) => data.data);
  }
}
