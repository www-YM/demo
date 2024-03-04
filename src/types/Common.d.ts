interface MoreMenuItem {
  label: string;
  action?: () => void;
  disabled?: boolean;
  hidden?: boolean;
}

// shopify collection
interface Collection {
  id: number;
  title: string;
}

type DesignData = {
  design: {
    designModelId: number;
    id?: number;
    textureDegree: number;
    bluePrints: {
      bluePrintId: number;
      name: string;
      canvas: {
        svg: number;
        fonts?: string[];
        json?: string;
        width: number;
      };
      images: {
        id: number;
        key: string;
        placeholder: string;
        url: string;
      }[];
    }[];
  };
  mockups: {
    id: number;
    name: string;
    url: string;
  }[];
};
