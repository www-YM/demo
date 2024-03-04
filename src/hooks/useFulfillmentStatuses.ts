export const useFulfillmentStatuses = () => {
  const fulfillmentStatuses: FulfillmentStatus[] = [
    { label: 'Unfulfilled', value: 'unfulfilled' },
    { label: 'In progress', value: 'in_progress' },
    { label: 'Label printed', value: 'label_printed' },
    { label: 'Partially produced', value: 'partially_produced' },
    { label: 'Awaiting package', value: 'awaiting_package' },
    { label: 'Fulfilled', value: 'fulfilled' },
  ];

  const fulfillmentStatusLabel = (fulfillment: Fulfillment) => {
    const status = fulfillmentStatuses.find(
      ({ value }) => value === fulfillment.status,
    );
    return status.label;
  };

  const isTrackingInfoFilled = (fulfillment: Fulfillment) => {
    return ['label_printed', 'fulfilled'].includes(fulfillment.status);
  };

  return {
    fulfillmentStatusLabel,
    isTrackingInfoFilled,
    fulfillmentStatuses,
  };
};
