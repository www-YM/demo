import { BaseResource } from './BaseResource';

export default class ImageResource extends BaseResource {
  createImage(params: any) {
    return this.axios.post('images', params).then(({ data }) => data);
  }

  getImages(params: any): Promise<{ data: any; meta: any }> {
    // 定制器的请求参数为 page
    params.current = params.current || params.page;
    return this.axios.get('images', { params });
  }

  deleteImage(id) {
    return this.axios.delete(`images/${id}`);
  }
}
