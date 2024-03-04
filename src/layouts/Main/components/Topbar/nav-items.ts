import { getToken } from 'utils/local-storage-manager';

export const getNavItems = () => {
  return getToken()
    ? {
        catalog: {
          id: 'catalog',
          title: 'Catalog',
          href: '/custom-products',
          children: {},
        },
        orders: {
          id: 'orders',
          title: 'Orders',
          href: '/orders',
          children: {},
        },
        myStores: {
          id: 'my-stores',
          title: 'My stores',
          href: '/shops',
          children: {},
        },
        brandings: {
          id: 'branding',
          title: 'My branding',
          href: '/branded-materials',
          children: {},
        },
        services: {
          id: 'services',
          title: 'Services',
          children: [
            { title: 'Branding materials', href: '/branding-materials' },
            {
              title: 'Warehouse',
              href: '/warehouse',
            },
            {
              title: 'Personalization tool',
              href: '/customer-print-on-demand',
            },
          ],
        },
        account: {
          title: 'Account',
          id: 'account',
          children: [
            {
              title: 'Settings',
              href: '/settings',
            },
            { title: 'File Library', href: '/file-library' },
            { title: 'Billing', href: '/billing' },
            {
              title: 'Help center',
              href: '/help-center',
            },
            {
              title: 'Logout',
              href: '/logout',
            },
          ],
        },
        howItWorks: {
          id: 'how-it-works',
          title: 'How it works',
          href: '/how-it-works',
          children: {},
        },
        // blog: {
        //   id: 'blog',
        //   title: 'Blog',
        //   href: '/blog',
        //   children: {},
        // },
      }
    : {
        catalog: {
          id: 'catalog',
          title: 'Catalog',
          href: '/custom-products',
          children: {},
        },
        branding: {
          id: 'branding',
          title: 'Branding',
          href: '/branding-materials',
          children: {},
        },
        warehouse: {
          id: 'warehouse',
          title: 'Warehouse',
          href: '/warehouse',
          children: {},
        },
        personalizationTool: {
          id: 'customer-print-on-demand',
          title: 'Personalization tool',
          href: '/customer-print-on-demand',
          children: {},
        },
        howItWorks: {
          id: 'how-it-works',
          title: 'How it works',
          href: '/how-it-works',
          children: {},
        },
        helpCenter: {
          id: 'hep-center',
          title: 'Help center',
          href: '/help-center',
          children: {},
        },
        // blog: {
        //   id: 'blog',
        //   title: 'Blog',
        //   href: '/blog',
        //   children: {},
        // },
        login: {
          id: 'login',
          title: 'Sign in',
          href: '/login',
          children: {},
        },
      };
};
