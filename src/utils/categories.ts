const findRootParent = (
  category: CategoryTreeItem,
  categories: CategoryTreeItem[],
) => {
  if (!category) {
    return category;
  }

  for (const cate of categories) {
    if (cate.id === category.id) {
      return cate;
    }

    for (const child of cate.children) {
      if (child.id === category.id) {
        return cate;
      }
      for (const descendant of child.children) {
        if (descendant.id === category.id) {
          return cate;
        }
      }
    }
  }
};

export const genBrandingMaterialCategoriesURI = (
  category: CategoryTreeItem,
  categories: CategoryTreeItem[],
) => {
  const root = findRootParent(category, categories);

  return `/branding-materials/${root.slug}/${category.slug}`;
};

export const genProductCategoriesURI = (
  category: CategoryTreeItem,
  categories: CategoryTreeItem[],
) => {
  const root = findRootParent(category, categories);

  return `/custom-products/${root.slug}/${category.slug}`;
};

export const findCategory = (categories: CategoryTreeItem[], id: number) => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }

    if (category?.children?.length) {
      const target = findCategory(category.children, id);
      if (target) {
        return target;
      }
    }
  }
};

export const findCategoryBySlug = (
  categories: CategoryTreeItem[],
  slug?: string,
) => {
  if (!slug) {
    return null;
  }

  for (const category of categories) {
    if (category.slug === slug) {
      return category;
    }

    if (category?.children?.length) {
      const target = findCategoryBySlug(category.children, slug);
      if (target) {
        return target;
      }
    }
  }
};

export const getCategoryIds = (category: CategoryTreeItem) => {
  if (!category) {
    return '';
  }

  // descendant have no children
  if (!category.children.length) {
    return String(category.id);
  }

  // children have children but parentId not 0
  if (category.children.length && category.parentId !== 0) {
    return category.children.map(({ id }) => id).join(',');
  }

  // parent
  const ids = [];
  for (const child of category.children) {
    // All category with _
    if (child.children.length === 0) {
      ids.push(child.id);
    }

    for (const descendant of child.children) {
      ids.push(descendant.id);
    }
  }

  return ids.join(',');
};

export function correctChildSlug(productCategory: ProductCategory) {
  if (productCategory.descendant.slug === '_') {
    return productCategory.children.slug;
  }
  return productCategory.descendant.slug;
}

export function correctChildBreadcurmb(productCategory: ProductCategory) {
  if (productCategory.descendant.slug === '_') {
    return productCategory.children.breadcrumb;
  }
  return productCategory.descendant.breadcrumb;
}

export function genProductURI(product: {
  category: Product['category'];
  slug: string;
  type: ProductType;
}) {
  if (product.type === 'branding_material') {
    return `/branding-materials/${
      product.category.parent.slug
    }/${correctChildSlug(product.category)}/${product.slug}`;
  }

  return `/custom-products/${product.category.parent.slug}/${correctChildSlug(
    product.category,
  )}/${product.slug}`;
}

export function genBrandingMaterialURI(product) {
  return `/branding-materials/${
    product.category.parent.slug
  }/${correctChildSlug(product.category)}/${product.slug}`;
}
