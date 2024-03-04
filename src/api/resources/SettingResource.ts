import { AxiosInstance } from 'axios';
import { BaseResource } from './BaseResource';

export default class SettingResource extends BaseResource {
  constructor(protected axios: AxiosInstance) {
    super(axios);
  }

  get getSettingUrl() {
    return this.baseURL + '/settings';
  }

  get updateSettingUrl() {
    return this.baseURL + '/settings';
  }

  get getShopSettingUrl() {
    return this.baseURL + '/shop-settings';
  }

  get updateShopInfoUrl() {
    return this.baseURL + '/shop-settings/shop-info';
  }

  get updateShopOrderSettingUrl() {
    return this.baseURL + '/shop-settings/shop-orders';
  }

  getSetting(): Promise<UserSetting> {
    return this.axios.get(this.getSettingUrl).then(({ data }) => data);
  }

  updateSetting(params: {
    isAutoProcessing?: boolean;
    autoProcessingDelay?: string | number;
    imageBucketRegion?: string;
  }) {
    return this.axios.put(this.updateSettingUrl, params);
  }

  getShopSetting(id): Promise<ShopSetting> {
    const params = { shopId: id };
    return this.axios
      .get(this.getShopSettingUrl, { params })
      .then(({ data }) => data);
  }

  updateShopInfo(params: {
    shopId: number | string;
    name: string;
    website: string;
  }) {
    return this.axios.put(this.updateShopInfoUrl, params);
  }

  updateShopOrderSetting(params: {
    shopId: number | string;
    isAutoProcessing: boolean;
    autoProcessingDelay: number;
  }) {
    return this.axios.put(this.updateShopOrderSettingUrl, params);
  }
}
