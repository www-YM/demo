import { defineMessage, IntlShape } from 'react-intl';

export const customerPodDesignStatus: CustomerPodDesignStatus[] = [
  {
    label: defineMessage({ defaultMessage: 'All', description: 'All' }),
    value: '',
    desc: 'All of the designs created by your store customer.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Unpublished',
      description: 'Unpublished',
    }),
    value: 'unpublished',
    desc: 'Designs that have not been published to your third-party platform store. Contact with your customer to publish them to your store to sales.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Published',
      description: 'Published',
    }),
    value: 'published',
    desc: 'Designs that have been published to your third-party platform store.',
    searchable: true,
  },
  {
    label: defineMessage({ defaultMessage: 'Error', description: 'Error' }),
    value: 'error',
    desc: 'There was an error when saving the design or syncing to your third-party store for these designs.',
    searchable: true,
  },
];

export default function useCustomerPodDesignStatus(intl: IntlShape) {
  const getStatusLabel = (customerPodDesign: { status: string }) => {
    const status = customerPodDesignStatus.find(
      (status) => status.value === customerPodDesign.status,
    );
    return status ? intl.formatMessage(status.label) : customerPodDesign.status;
  };
  return {
    getStatusLabel,
    customerPodDesignStatus,
    customerPodDesignSearchableStatuses: customerPodDesignStatus.filter(
      (_) => _.searchable,
    ),
  };
}
