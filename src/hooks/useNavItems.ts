import { defineMessage } from 'react-intl';
import { getToken } from 'utils/local-storage-manager';

export const useNavItems = () =>
  getToken()
    ? [
        {
          id: 'custom-products',
          title: defineMessage({
            defaultMessage: 'Catalog',
            description: 'Catalog',
          }),
          href: '/custom-products',
        },
        {
          id: 'branding-materials',
          title: defineMessage({
            defaultMessage: 'Branding',
            description: 'Branding',
          }),
          href: '/branding-materials',
        },
        {
          id: 'warehouse',
          title: defineMessage({
            defaultMessage: 'Warehouse',
            description: 'Warehouse',
          }),
          href: '/warehouse',
        },
        {
          id: 'customer-print-on-demand',
          title: defineMessage({
            defaultMessage: 'Personalization tool',
            description: 'Personalization tool',
          }),
          href: '/customer-print-on-demand',
        },
        {
          id: 'orders',
          title: defineMessage({
            defaultMessage: 'Orders',
            description: 'Orders',
          }),
          href: '/orders',
        },
        {
          id: 'shops',
          title: defineMessage({
            defaultMessage: 'My Stores',
            description: 'My Stores',
          }),
          href: '/shops',
        },
        {
          id: 'billing',
          title: defineMessage({
            defaultMessage: 'Billing',
            description: 'Billing',
          }),
          href: '/billing',
        },
        {
          id: 'file-library',
          title: defineMessage({
            defaultMessage: 'File Library',
            description: 'File Library',
          }),
          href: '/file-library',
        },
        {
          id: 'settings',
          title: defineMessage({
            defaultMessage: 'Settings',
            description: 'Settings',
          }),
          href: '/settings',
        },
        {
          id: 'how-it-works',
          title: defineMessage({
            defaultMessage: 'How it works',
            description: 'How it works',
          }),
          href: '/how-it-works',
        },
        // {
        //   id: 'blog',
        //   title: defineMessage({
        //     defaultMessage: 'Blog',
        //     description: 'Blog',
        //   }),
        //   href: '/blog',
        // },
        {
          id: 'help-center',
          title: defineMessage({
            defaultMessage: 'Help center',
            description: 'Help center',
          }),
          href: '/help-center',
        },
        {
          id: 'logout',
          title: defineMessage({
            defaultMessage: 'Log Out',
            description: 'Log Out',
          }),
          href: '/logout',
        },
      ]
    : [
        {
          id: 'custom-products',
          title: defineMessage({
            defaultMessage: 'Catalog',
            description: 'Catalog',
          }),
          href: '/custom-products',
        },
        // {
        //   title: defineMessage({
        //     defaultMessage: 'Patterns',
        //     description: 'Patterns',
        //   }),
        //   href: '/patterns',
        // },
        {
          id: 'how-it-works',
          title: defineMessage({
            defaultMessage: 'How it works',
            description: 'How it works',
          }),
          href: '/how-it-works',
        },
        {
          id: 'branding-materials',
          title: defineMessage({
            defaultMessage: 'Branding materials',
            description: 'Branding materials',
          }),
          href: '/branding-materials',
        },
        {
          id: 'customer-print-on-demand',
          title: defineMessage({
            defaultMessage: 'Personalization tool',
            description: 'Personalization tool',
          }),
          href: '/customer-print-on-demand',
        },
        // {
        //   id: 'blog',
        //   title: defineMessage({
        //     defaultMessage: 'Blog',
        //     description: 'Blog',
        //   }),
        //   href: '/blog',
        // },
        {
          id: 'help-center',
          title: defineMessage({
            defaultMessage: 'Help center',
            description: 'Help center',
          }),
          href: '/help-center',
        },
        {
          id: 'login',
          title: defineMessage({
            defaultMessage: 'Sign in',
            description: 'Sign in',
          }),
          href: '/login',
        },
        {
          id: 'register',
          title: defineMessage({
            defaultMessage: 'Sign up',
            description: 'Sign up',
          }),
          href: '/register',
        },
      ];
