import { BaseResource } from './BaseResource';

export type GetBrandingMaterialDesignsParams = {
  current?: number;
  name?: string;
  startAt?: string;
  endAt?: string;
  categoryIds?: string;
};

export default class BrandedMaterialResource extends BaseResource {
  get createUrl() {
    return this.baseURL + '/branded-materials';
  }

  get findUrl() {
    return this.baseURL + '/branded-materials/:id';
  }

  get getBrandedMaterialsUrl() {
    return this.baseURL + '/branded-materials';
  }

  get getRecustomizationDataUrl() {
    return this.baseURL + '/branded-materials/:id/recustomization-data';
  }

  create(params: {
    designData: DesignData['design'];
    productId: number;
    name: string;
    desc: string;
  }): Promise<BrandingMaterialTemplate> {
    return this.axios.post(this.createUrl, params);
  }

  getBrandedMaterials(
    params: GetBrandingMaterialDesignsParams,
  ): Promise<{ data: BrandingMaterialDesignListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getBrandedMaterialsUrl, { params });
  }

  find(id: string): Promise<BrandingMaterialDesignDetail> {
    return this.axios
      .get(this.findUrl.replace(':id', id))
      .then((resp) => resp.data);
  }

  getRecustomizationData(id: string): Promise<{
    imageBucketRegion: string;
    design: DesignData;
    model: DesignModel;
  }> {
    return this.axios
      .get(this.getRecustomizationDataUrl.replace(':id', id))
      .then((resp) => resp.data);
  }
}
