import { makeStyles, Typography, withStyles } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const remove_ = (categories: CategoryTreeItem[]) => {
  for (const category of categories) {
    for (const child of category.children) {
      if (child.name === '_') {
        category.id = category.children[0].id;
        category.children = [];
      }
    }

    remove_(category.children);
  }
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
  tree: {
    '& > li:nth-child(1) > *': {
      borderTop: '0',
    },
  },
});

const formatCategories = (categories: CategoryTreeItem[]) => {
  remove_(categories);
};

type CategoriesProps = ViewComponentProps & {
  categories: CategoryTreeItem[];
  onClick: (id: number, slug: string, parentSlug: string, name: string) => void;
};

export default function Categories({
  categories,
  className,
  onClick,
}: CategoriesProps): JSX.Element {
  const classes = useStyles();

  formatCategories(categories);

  const router = useRouter();

  const { parentCategorySlug, childCategorySlug } = router.query;

  const [expanded, setExpanded] = useState(parentCategorySlug || '');
  const handleExpandChange = (slug: string) => {
    setExpanded(expanded === slug ? '' : slug);
  };

  const matchDescendant = (
    cate: CategoryTreeItem,
    descendant: CategoryTreeItem,
  ) => {
    return expanded === cate.slug && childCategorySlug === descendant.slug;
  };
  return (
    <ul className={clsx(classes.root, className)}>
      {categories.map((cate, idx) => (
        <Accordion
          component="li"
          expanded={expanded === cate.slug}
          onChange={() => handleExpandChange(cate.slug)}
          square
          key={cate.id}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ fontWeight: 'bold' }} variant="subtitle1">
              {cate.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {cate.children.map((child) => (
                <li key={child.id}>
                  <Typography
                    style={{
                      marginLeft: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    color={
                      expanded === cate.slug && childCategorySlug === child.slug
                        ? 'primary'
                        : 'inherit'
                    }
                    variant="subtitle1"
                    component="p"
                    onClick={() =>
                      onClick(child.id, child.slug, cate.slug, cate.name)
                    }
                  >
                    {child.name}
                  </Typography>
                  <ul>
                    {child.children.map((descendant) => (
                      <li key={descendant.id}>
                        <Typography
                          style={{
                            marginLeft: '16px',
                            cursor: 'pointer',
                            fontWeight: matchDescendant(cate, descendant)
                              ? 'bold'
                              : 'inherit',
                          }}
                          color={
                            matchDescendant(cate, descendant)
                              ? 'primary'
                              : 'inherit'
                          }
                          variant="subtitle1"
                          component="p"
                          onClick={() =>
                            onClick(
                              descendant.id,
                              descendant.slug,
                              cate.slug,
                              cate.name,
                            )
                          }
                        >
                          {descendant.name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </ul>
  );
}
