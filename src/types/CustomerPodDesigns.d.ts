interface CustomerPodDesignStatus {
  label: MessageDescriptor;
  value: string;
  desc: string;
  searchable: boolean;
}

interface CustomerPodDesignsListItem {
  id: string;
  status: string;
  errorMessage: string;
  image: string;
  createdAt: string;
  savedDesignModel?: {
    id: string;
    savedDesignModelMockups: {
      id: string;
      url: string;
    }[];
  } | null;
  shopProduct: {
    id: string;
    productId: number;
    title: string;
  };
  customerPodUser: {
    id: string;
    email: string;
    name: string;
    platformAdminUrl: string;
  } | null;
}
