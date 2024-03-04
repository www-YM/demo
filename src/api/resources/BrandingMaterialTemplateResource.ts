import { BaseResource } from './BaseResource';

type GetProductsParams = {
  productId: number;
  current?: number;
};

export default class BrandingMaterialTemplateResource extends BaseResource {
  get getBrandingMaterialTemplatesUrl() {
    return this.baseURL + '/branding-material-templates';
  }

  get findBrandingMaterialTemplateUrl() {
    return this.baseURL + '/branding-material-templates/:id';
  }

  get getCustomizationDataUrl() {
    return this.baseURL + '/branding-material-templates/:id/customization-data';
  }

  getBrandingMaterialTemplates(
    params: GetProductsParams,
  ): Promise<{ data: BrandingMaterialTemplateListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getBrandingMaterialTemplatesUrl, { params });
  }

  find(id: number): Promise<BrandingMaterialTemplate> {
    return this.axios
      .get(this.findBrandingMaterialTemplateUrl.replace(':id', id.toString()))
      .then((resp) => resp.data);
  }

  getCustomizationData(brandingMaterialTemplateId: number): Promise<{
    imageBucketRegion: string;
    design: DesignData;
    model: DesignModel;
  }> {
    return this.axios
      .get(
        this.getCustomizationDataUrl.replace(
          ':id',
          brandingMaterialTemplateId.toString(),
        ),
      )
      .then((resp) => resp.data);
  }
}
