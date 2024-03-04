import { BaseResource } from './BaseResource';

interface GetOrdersParams {
  current: number;
  status: string;
  perPage?: number;
  shopId: number | string;
}

export type PreProcessAttachmentsData = {
  totalAttachmentsCount: number;
  totalOrdersCount: number;
  totalOrderItemsCount: number;
  totalProcessingFee: number;
  shop: {
    id: string;
    name: string;
  };
  orders: {
    id: string;
    orderNumber: string;
    status: string;
    createdAt: string;
    platformType: string;
    items: {
      id: string;
      title: string;
      sku: string;
      isDiscontinued: boolean;
      quantity: number;
      options: {
        name: string;
        value: string;
      }[];
      image: string;
      attachments: {
        id: string;
        image: string;
        warehouseItemId: string;
        title: string;
        attached: boolean;
        quantity: number;
      }[];
    }[];
  }[];
};

export type PreProcessOrdersData = {
  totalCount: number;
  amount: number;
  orders: OrderListItem[];
  shop: ShopListItem;
};

export type BreakdownOrdersData = {
  ordersCount: number;
  warehouseProcessingFee: number;
  total: number;
  vat: number;
  cost: number;
  discount: number;
  shipping: number;
  shop: ShopListItem;
};

export default class OrderResource extends BaseResource {
  get getOrderInvoiceUrl() {
    return this.baseURL + '/orders/:id/invoice';
  }

  get getOrdersUrl() {
    return this.baseURL + '/orders';
  }

  get updateShippingAddressUrl() {
    return this.baseURL + '/orders/:id/shipping-address';
  }

  get getShippingMethodsUrl() {
    return this.baseURL + '/orders/:id/shipping-methods';
  }

  get updateShippingMethodUrl() {
    return this.baseURL + '/orders/:id/shipping-method';
  }

  get getFindOrderUrl() {
    return this.baseURL + '/orders/:id';
  }

  get bulkAttachWarehouseItemsPreProcessAttachmentsUrl() {
    return (
      this.baseURL +
      '/orders/bulk-attach-warehouse-items/pre-process-attachments'
    );
  }

  get bulkPaymentPreProcessOrdersUrl() {
    return this.baseURL + '/orders/bulk-payment/pre-process-orders';
  }

  get bulkPaymentShopsContainsOrdersUrl() {
    return this.baseURL + '/orders/bulk-payment/shops-contains-orders';
  }

  get bulkPaymentBreakdownOrdersUrl() {
    return this.baseURL + '/orders/bulk-payment/breakdown-orders';
  }

  get bulkPaymentPayUrl() {
    return this.baseURL + '/orders/bulk-payment/do-payment';
  }

  get doBulkAttachmentsUrl() {
    return this.baseURL + '/orders/bulk-attach-warehouse-items/do-attachments';
  }

  bulkPaymentPay(params: {
    paymentMethodId: string;
    shopId: string;
    orderIds: string[];
  }) {
    return this.axios.post(this.bulkPaymentPayUrl, params);
  }

  getInvoice(id: string) {
    return this.axios
      .get(this.getOrderInvoiceUrl.replace(':id', id))
      .then((resp) => resp.data);
  }

  doBulkAttachments(params: {
    shopId: string;
    lineItems: {
      orderItemId: string;
      warehouseItemId: string;
      quantity: number;
    }[];
  }) {
    return this.axios.post(this.doBulkAttachmentsUrl, params);
  }

  bulkPaymentShopsContainsOrders(): Promise<string[]> {
    return this.axios
      .get(this.bulkPaymentShopsContainsOrdersUrl)
      .then((resp) => resp.data);
  }

  bulkPaymentBreakdownOrders(params: {
    shopId: string;
    orderIds: string;
  }): Promise<BreakdownOrdersData> {
    return this.axios
      .get(this.bulkPaymentBreakdownOrdersUrl, { params })
      .then((resp) => resp.data);
  }

  bulkAttachWarehouseItemsPreProcessAttachments(params: {
    shopId: string;
    orderItemIds: string;
    warehouseItemIds: string;
  }): Promise<PreProcessAttachmentsData> {
    return this.axios
      .get(this.bulkAttachWarehouseItemsPreProcessAttachmentsUrl, { params })
      .then((resp) => resp.data);
  }

  bulkPaymentPreProcessOrders(params: {
    shopId: string;
    orderIds: string;
  }): Promise<PreProcessOrdersData> {
    return this.axios
      .get(this.bulkPaymentPreProcessOrdersUrl, { params })
      .then((resp) => resp.data);
  }

  getOrders(
    params: GetOrdersParams,
  ): Promise<{ data: OrderListItem[]; meta: PageMeta }> {
    return this.axios.get(this.getOrdersUrl, { params, isClearEmpties: true });
  }

  findOrder(id: string): Promise<OrderDetail> {
    return this.axios
      .get(this.getFindOrderUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  pay(id: string, paymentMethodId: string) {
    return this.axios.post(`orders/${id}/pay`, { paymentMethodId });
  }

  updateShippingAddress(id: string, params: ShippingAddress): Promise<any> {
    return this.axios
      .put(this.updateShippingAddressUrl.replace(':id', String(id)), params)
      .then(({ data }) => {
        return data;
      });
  }

  getShippingMethods(id: string | number): Promise<any> {
    return this.axios
      .get(this.getShippingMethodsUrl.replace(':id', String(id)))
      .then(({ data }) => data);
  }

  updateShippingMethod(
    id: string | number,
    params: { fulfillmentShippingMethodId: string | number },
  ): Promise<any> {
    return this.axios
      .put(this.updateShippingMethodUrl.replace(':id', String(id)), params)
      .then(({ data }) => data);
  }
}
