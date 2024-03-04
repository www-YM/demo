interface MenuItemProps {
  groupTitle: string;
  pages: Array<{ href: string; title: string }>;
}

interface MenuGroupProps {
  data: MenuItemProps;
}

interface PagesProps {
  catalog: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  brandingMaterials: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  orders: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  myStores: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  landings?: {
    title: string;
    id: string;
    children: {
      services: MenuItemProps;
      apps: MenuItemProps;
      web: MenuItemProps;
    };
  };
  pages?: {
    title: string;
    id: string;
    children: {
      career: MenuItemProps;
      helpCenter: MenuItemProps;
      company: MenuItemProps;
      contact: MenuItemProps;
      blog: MenuItemProps;
      portfolio: MenuItemProps;
    };
  };
  account: {
    title: string;
    id: string;
    children: {
      settings: MenuItemProps;
      signup: MenuItemProps;
      signin: MenuItemProps;
      password: MenuItemProps;
      error: MenuItemProps;
    };
  };
}

interface NavPagesProps {
  catalog: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  brandingMaterials: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  orders: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  myStores: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  blog: {
    id: string;
    title: string;
    href: string;
    children: {};
  };
  services: {
    title: string;
    id: string;
    children: {
      title: string;
      href: string;
    }[];
  };
  account: {
    title: string;
    id: string;
    children: {
      title: string;
      href: string;
    }[];
  };
}
