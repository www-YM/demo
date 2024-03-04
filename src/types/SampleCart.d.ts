interface SampleCartProduct {
  id: number;
  title: string;
  image: string;
}

interface SampleCartItem {
  id: number;
  title: string;
  cost: number;
  image: string;
  quantity: number;
  sku: string;
  options: {
    name: string;
    value: string;
  }[];
}

interface SampleCart {
  totalCost: number;
  items: SampleCartItem[];
}

interface ShippingData {
  shippingCarrierId: number;
  shipping: number;
  vatRate: number;
}

interface ShippingMethod {
  id: number;
  name: string;
  minDeliveryDays: number;
  maxDeliveryDays: number;
  cost: number;
}
interface ShippingMethodData {
  fulfillmentShippingMethod: ShippingMethod;
  shipping: number;
  vatRate: number;
}
