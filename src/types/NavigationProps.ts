declare global {
  type MessageDescriptor = import('@formatjs/intl').MessageDescriptor;

  type PagesProps = Array<{ href?: string; title: MessageDescriptor }>;
  type ContactProps = Array<{ title: MessageDescriptor }>;

  interface MenuItemProps {
    groupTitle: MessageDescriptor;
    pages: PagesProps;
  }

  interface MenuGroupProps {
    item: MenuItemProps;
  }

  interface ContactItemProps {
    groupTitle: MessageDescriptor;
    items: ContactProps;
  }

  interface ContactGroupProps {
    item: ContactItemProps;
  }
}

export {};
