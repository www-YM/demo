type ShippingCarrierOption = {
  id: number;
  name: string;
  desc: string;
  deliveryTime: string;
  shippingZones: {
    regions: string[];
    cost: number;
  }[];
  details: {
    id: number;
    title: string;
    shippingMethod: string;
    // productTitle: string;
    image: string;
    // sku: string;
    quantity: number;
    perCost: number;
  }[];
};
