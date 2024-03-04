import { BaseResource } from './BaseResource';

export default class PatternResource extends BaseResource {
  get getTokenUrl() {
    return this.baseURL + '/algolia/pattern-key';
  }

  get getCollectionsUrl() {
    return this.baseURL + '/pattern-collections/list';
  }

  get getOssRegionsUrl() {
    return this.baseURL + '/dicts?code=oss-url-prefix';
  }
  getToken(): Promise<{
    data: { appId: string; expiredAt: number; index: string; key: string };
  }> {
    return this.axios.get(this.getTokenUrl);
  }
  getOssRegions(): Promise<{
    data: { label: string; value: string }[];
  }> {
    return this.axios.get(this.getOssRegionsUrl);
  }
  getCollections(): Promise<{
    data: { id: number; name: string }[];
  }> {
    return this.axios.get(this.getCollectionsUrl);
  }
}
