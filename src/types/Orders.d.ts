interface OrderStatus {
  label: string;
  value: string;
}

type FulfillmentStatus =
  | {
      label: 'Unfulfilled';
      value: 'unfulfilled';
    }
  | {
      label: 'Fulfilled';
      value: 'fulfilled';
    }
  | { label: 'In progress'; value: 'in_progress' }
  | { label: 'Label printed'; value: 'label_printed' }
  | { label: 'Partially produced'; value: 'partially_produced' }
  | { label: 'Awaiting package'; value: 'awaiting_package' };

interface Fulfillment {
  id: number;
  status: FulfillmentStatus['value'];
  fulfillmentShippingMethodId: number;
  shippingMethodName: string;
  trackingNumber: string;
  trackingUrl: string;
  trackingCompany: string;
  items: {
    id: number;
    orderItemId: number;
    shopProductId: number;
    shopProductVariantId: number;
    quantity: number;
    orderItem: OrderDetailItem;
  }[];
}

type FulfillmentItem = Fulfillment['items'][0];

type OrderItemAttachment = {
  id: string;
  warehouseItemId: string;
  orderItemId?: string;
  quantity: number;
  title: string;
  image: string;
};

interface OrderListItemItem {
  id: string;
  isDiscontinued: boolean;
  title: string;
  sku: string;
  quantity: number;
  image: string;
  options: {
    name: string;
    value: string;
  }[];
  attachments: OrderItemAttachment[];
}
interface OrderListItem {
  id: string;
  hasDiscontinuedItems: boolean;
  orderNumber: string;
  createdAt: string;
  status: string;
  discount: number;
  shipping: number;
  cost: number;
  warehouseProcessingFee: number;
  vat: number;
  platformType: PlatformType;
  fulfillments: Fulfillment[];
  shop: { id: string; typeLogo: string; name: string };
  address: ShippingAddress;
  items: OrderListItemItem[];
}

interface ShippingAddress {
  id?: number;
  phone: string;
  email: string;
  country: string;
  countryCode: string;
  province: string;
  city: string;
  zip: string;
  address1: string;
  address2: string;
  lastName: string;
  firstName: string;
}

interface OrderDetail {
  id: string;
  hasDiscontinuedItems: boolean;
  onHoldReason: string;
  canEditShippingAddress: boolean;
  canChangeShippingMethod: boolean;
  canDownloadInvoice: boolean;
  orderNumber: string;
  platformCreatedAt: string;
  platformType: PlatformType;
  createdAt: string;
  cost: number;
  warehouseProcessingFee: number;
  discount: number;
  vat: number;
  shipping: number;
  status: string;
  payments: {
    id: number;
    chargeId: string;
    type: string;
    amount: number;
  }[];
  fulfillments: Fulfillment[];
  address: ShippingAddress;
  items: {
    id: number;
    isDiscontinued: boolean;
    title: string;
    sku: string;
    cost: number;
    quantity: number;
    image: string;
    isCustomerPodProduct: boolean;
    attachments: OrderItemAttachment[];
    options: {
      name: string;
      value: string;
    }[];
  }[];
}

type OrderDetailItem = OrderDetail['items'][0];
