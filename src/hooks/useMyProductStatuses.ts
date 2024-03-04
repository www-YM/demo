import { defineMessage, IntlShape } from 'react-intl';

export const myProductStatuses: MyProductStatus[] = [
  {
    label: defineMessage({ defaultMessage: 'All', description: 'All' }),
    value: '',
    desc: 'All of the products in the store.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Unpublished',
      description: 'Unpublished',
    }),
    value: 'unpublished',
    desc: 'Products that have not been synced to your third-party platform store.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Published',
      description: 'Published',
    }),
    value: 'published',
    desc: 'Products that have been synced to your third-party platform store',
    searchable: true,
  },
  {
    label: defineMessage({ defaultMessage: 'Error', description: 'Error' }),
    value: 'error',
    desc: 'There was an error when saving the design or syncing to your third-party store for these products.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Discontinued',
      description: 'Discontinued',
    }),
    value: 'hasDiscontinuedVariants',
    desc: 'Some product variants are no longer supported, please remove them to avoid delayed orders.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Incomplete variants',
      description: 'Incomplete variants',
    }),
    value: 'hasIncompleteVariants',
    desc: 'Some product variants are new or not added to your designs, consider adding them to your design to give your customers more choices.',
    searchable: true,
  },
  {
    label: defineMessage({
      defaultMessage: 'Generating mockups...',
      description: 'Generating mockups...',
    }),
    value: 'generating_mockups',
    desc: '',
    searchable: false,
  },
  {
    label: defineMessage({
      defaultMessage: 'Creating product...',
      description: 'Creating product...',
    }),
    value: 'creating',
    desc: '',
    searchable: false,
  },
  {
    label: defineMessage({
      defaultMessage: 'Saving design...',
      description: 'Saving design...',
    }),
    value: 'saving_design',
    desc: '',
    searchable: false,
  },
  {
    label: defineMessage({
      defaultMessage: 'Uploading product to store...',
      description: 'Uploading product to store...',
    }),
    value: 'publishing',
    desc: '',
    searchable: false,
  },
];

export default function useMyProductStatuses(intl: IntlShape) {
  const getStatusLabel = (shopProduct: { status: string }) => {
    const status = myProductStatuses.find(
      (status) => status.value === shopProduct.status,
    );
    return status ? intl.formatMessage(status.label) : shopProduct.status;
  };
  return {
    getStatusLabel,
    myProductStatuses,
    myProductSearchableStatuses: myProductStatuses.filter((_) => _.searchable),
  };
}
