import { BaseResource } from './BaseResource';

export default class BlogResource extends BaseResource {
  get getBlogsUrl() {
    return this.baseURL + '/blogs';
  }

  get findBlogUrl() {
    return this.baseURL + '/blogs/:id';
  }

  getBlogs(): Promise<Blog[]> {
    return this.axios.get(this.getBlogsUrl).then(({ data }) => data);
  }

  getBlogIds(): Promise<{ data: { id: number }[] }> {
    return this.axios.get('blogs/ids');
  }

  findBlog(id: number | string): Promise<Blog> {
    return this.axios
      .get(this.findBlogUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }
}
