type BrandingMaterialTemplate = {
  id: number;
  name: string;
  image: string;
  desc: string;
  images: string[];
  productId: number;
  savedDesignModelId: string;
};

type BrandingMaterialDesignListItem = {
  id: string;
  name: string;
  desc: string;
  image: string;
  createdAt: string;
  product: {
    id: string;
    title: string;
    slug: string;
    title: string;
    type: ProductType;
    category: ProductCategory;
  };
};

type BrandingMaterialDesignDetail = {
  id: string;
  name: string;
  desc: string;
  image: string;
  createdAt: string;
  images: { url: string; position: number }[];
  product: {
    id: string;
    slug: string;
    type: ProductType;
    title: string;
    category: ProductCategory;
  };
};

type BrandingMaterialTemplateListItem = {
  id: number;
  name: string;
  image: string;
  productId: number;
  savedDesignModelId: string;
};
