interface CategoryTreeItem {
  id: number;
  slug: string;
  name: string;
  children?: CategoryTreeItem[];
  parentId?: number;
}
