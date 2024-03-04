interface EtsyCategoriesItemBase {
  id: number;
  level: number;
  name: string;
  parent_id: null | number;
}
interface EtsyCategoriesChildrenItem extends EtsyCategoriesItemBase {
  children: EtsyCategoriesChildrenItem;
  full_path_taxonomy_ids: number[];
}

interface EtsyCategoriesItem extends EtsyCategoriesItemBase {
  children: EtsyCategoriesChildrenItem[];
}
