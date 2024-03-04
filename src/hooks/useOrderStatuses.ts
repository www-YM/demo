export const orderStatuses: OrderStatus[] = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Awaiting Production',
    value: 'awaiting_production',
  },
  {
    label: 'In Production',
    value: 'in_production',
  },
  {
    label: 'Shipped',
    value: 'shipped',
  },
  {
    label: 'On Hold',
    value: 'on_hold',
  },
  {
    label: 'Cancelled',
    value: 'cancelled',
  },
  {
    label: 'Refunded',
    value: 'refunded',
  },
];

export default function useOrderStatuses() {
  const getStatusLabel = (order: { status: string }) => {
    const status = orderStatuses.find(
      (status) => status.value === order.status,
    );
    return status ? status.label : order.status;
  };

  const isPayableStatus = (order: { status: string }) => {
    return order.status === 'pending';
  };

  return { getStatusLabel, orderStatuses, isPayableStatus };
}
