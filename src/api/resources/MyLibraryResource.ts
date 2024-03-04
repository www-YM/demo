import { BaseResource } from './BaseResource';

interface FolderItem {
  id: number;
  createdAt: string;
  name: string;
  parent: {
    // 根目录的父级id为null
    id: number | null;
    name: string;
  };
  folders: {
    id: number;
    createdAt: string;
    name: string;
  }[];
  images: {
    id: number;
    createdAt: string;
    name: string;
    url: string;
  }[];
}
export default class MyLibraryResource extends BaseResource {
  get rootFolderId() {
    return this.baseURL + '/my-library/root';
  }

  get foldersUrl() {
    return this.baseURL + '/my-library/folders';
  }

  get folderUrl() {
    return this.baseURL + '/my-library/folders/:id';
  }

  get getFolderListUrl() {
    return this.baseURL + '/my-library/folders/:id/folders';
  }

  get getImageListUrl() {
    return this.baseURL + '/my-library/folders/:id/images';
  }

  get imageUrl() {
    return this.baseURL + '/my-library/images/:id';
  }

  get uploadImageUrl() {
    return this.baseURL + '/my-library/images';
  }

  get searchImageUrl() {
    return this.baseURL + '/my-library/search';
  }

  getRootFolderId(): Promise<string> {
    return this.axios.get(this.rootFolderId).then(({ data }) => data);
  }

  getFolderList(
    id,
    params = { page: 1, limit: 0 },
  ): Promise<
    {
      id: number;
      createdAt: string;
      name: string;
      foldersCount: number;
      imagesCount: number;
    }[]
  > {
    return this.axios
      .get(this.getFolderListUrl.replace(':id', id), { params })
      .then(({ data }) => data);
  }

  createFolder(params: { parent: number; name: string }): Promise<FolderItem> {
    return this.axios.post(this.foldersUrl, params).then(({ data }) => data);
  }

  findFolder(id): Promise<FolderItem> {
    return this.axios
      .get(this.folderUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  editFolder(
    id,
    params: {
      name?: string;
      parent?: string;
    },
  ) {
    return this.axios
      .put(this.folderUrl.replace(':id', id), params)
      .then(({ data }) => data);
  }

  deleteFolder(id) {
    return this.axios
      .delete(this.folderUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  getImageList(
    id,
    params = { page: 1, limit: 12 },
  ): Promise<{
    data: {
      id: number;
      createdAt: string;
      name: string;
      url: string;
      type: string;
      size: string;
      resolution: string;
    }[];
    meta: PageMeta;
  }> {
    return this.axios.get(this.getImageListUrl.replace(':id', id), { params });
  }

  editImage(
    id,
    params: {
      name?: string;
      parent?: number;
    },
  ) {
    return this.axios
      .put(this.imageUrl.replace(':id', id), params)
      .then(({ data }) => data);
  }

  deleteImage(id) {
    return this.axios
      .delete(this.imageUrl.replace(':id', id))
      .then(({ data }) => data);
  }

  uploadImage(params): Promise<{
    data: {
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      ext: string;
      size: string;
      resolution: string;
      url: string;
    };
  }> {
    return this.axios
      .post(this.uploadImageUrl, params)
      .then(({ data }) => data);
  }

  searchLibrary(params): any {
    return this.axios
      .get(this.searchImageUrl, { params })
      .then(({ data }) => data);
  }
}
