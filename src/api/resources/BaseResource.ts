import { AxiosInstance } from 'axios';

export class BaseResource {
  constructor(protected axios: AxiosInstance) {}

  protected get baseURL() {
    return this.axios.defaults.baseURL;
  }
}
