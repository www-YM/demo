type ProductType = 'customizable_product' | 'branding_material';

interface ProductCategory {
  parent: {
    id: number;
    breadcrumb: string;
    slug: string;
  };
  children: {
    id: number;
    breadcrumb: string;
    slug: string;
  };
  descendant: {
    id: number;
    breadcrumb: string;
    slug: string;
  };
}

interface BestSellerProduct {
  id: number;
  type: ProductType;
  title: string;
  slug: string;
  category: ProductCategory;
  image: string;
  coverImageUrl: string;
  minCost: number;
}

interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;
  type: ProductType;
  colorsSizes: {
    colors: {
      code: string;
      name: string;
    }[];
    sizes: string[];
  };
  coverImageUrl: string;
  minCost: number;
  minDisplayCost: number;
  bestseller: boolean;
  new: boolean;
  category: ProductCategory;
}

interface ProductDetail {
  id: number;
  type: ProductType;
  category: ProductCategory;
  images: string[];
  _images: { id: number; url: string }[];
  title: string;
  shippingTime: string;
  processingTime: string;
  desc: string;
  textDesc: string;
  tags: string[];
  colorsSizes: {
    colors: {
      code: string;
      name: string;
    }[];
    sizes: string[];
  };
  options: {
    name: string;
    values: string[];
  }[];
  variants: {
    id: number;
    cost: number;
    recommendRetailPrice: number;
    image: string;
    options: {
      name: string;
      value: string;
    }[];
  }[];
  shippingCarriers: {
    id: number;
    name: string;
    desc: string;
    deliveryTime: string;
    shippingZones: {
      regions: string[];
      cost: number;
    }[];
  }[];
  sizeGuide: {
    sizes: string[];
    types: {
      name: string;
      units: string;
      ranges: { from: string; to: string }[];
    }[];
  };
  designModel: {
    meta: {
      dpi: number;
      width: number;
      height: number;
    };
    resource: {
      templateUrl: string;
      templatePreviewUrl: string;
    };
  };
}

interface ProductShippingCarriersProps {
  product: ProductDetail;
}

interface ProductVariantsProps {
  product: ProductDetail;
}

interface DesignModel {
  id: number;
  name: string;
  code: string;
  resource: {
    templateUrl: string;
    templatePreviewUrl: string;
  };
  bluePrints: {
    id: number;
    name: string;
    guideLine: string;
    config: {
      guideLineViewWidth: number;
      cropping: { width: number; height: number; left: number; top: number };
      psd: { dpi: number; width: number };
    };
  }[];
  images: {
    id: number;
    name: string;
    url: string;
    config: {
      width: number;
      height: number;
      multiply: {
        key: string;
      };
      softLight: {
        key: string;
      };
      overlay: {
        key: string;
      };
    };
    stickingAreas: { id: number; bluePrintId: number }[];
  }[];
}

type CustomCondition =
  | 'ConditionGuest'
  | 'ConditionCustomerNewProduct'
  | 'ConditionCustomerRecustomizeProduct'
  | 'ConditionCustomerNewBrandingMaterialDesign';

type ConditionProps = {
  productId: number | string;
  onError: (msg: string) => void;
  onSuccess: () => void;
  [x: string]: any;
};
