type PaymentsListItem = {
  id: string;
  type: string;
  moneyFlow: 1 | -1;
  amount: number;
  createdAt: string;
  paymentMethod: {
    type: card;
    meta: {
      last4: string;
      brand: string;
    };
  } | null;
  paymentSources: {
    id: string;
    sourceType: 'order';
    sourceId: string;
    canDownloadInvoice: boolean;
    shop: {
      id: string;
      name: string;
      typeLogo: string;
    };
    order: {
      id: string;
      status: string;
      orderNumber: string;
      recepitName: string;
    };
  }[];
};
