import {
  TextField,
  MenuItem,
  Avatar,
  Chip,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import api from 'api';
import clsx from 'clsx';

interface ShopSelectorProps {
  onChange?: (store: ShopListItem | null) => void;
  onClick?: (store: ShopListItem | null) => void;
  enableLabel?: boolean;
  canSelectAll?: boolean;
  label?: string;
  defaultSelected?: string;
  filterOutId?: number | string;
  size?: 'small' | 'medium';
  className?: string;
}

const useStyles = makeStyles((theme) => {
  return {
    typeLogo: {
      padding: theme.spacing(0.2),
      backgroundColor: '#fff',
      marginRight: theme.spacing(1),
    },
    tag: {
      textTransform: 'capitalize',
      color: '#ffffff',
    },
    activeTag: {
      backgroundColor: '#0c8512',
    },
    errorTag: {
      backgroundColor: '#e40f0a',
    },
  };
});

const ShopSelector = ({
  onChange,
  onClick,
  enableLabel = true,
  canSelectAll = true,
  filterOutId = '',
  label = 'Choose Store',
  size,
  defaultSelected,
  className,
}: ShopSelectorProps): JSX.Element => {
  const classes = useStyles();
  const [shopListItems, setShopListItems] = useState<ShopListItem[]>([]);
  const [selected, setSelected] = useState('');

  const { data: respData } = useSWR(api.shop.getShopsUrl, () =>
    api.shop.getShops(),
  );

  useEffect(
    function handleResp() {
      let list = respData?.data || [];
      list = list.filter((i) => i.id.toString() !== filterOutId.toString());
      setShopListItems(list);
    },
    [respData],
  );

  useEffect(
    function setDefaultSelectedOnPageLoad() {
      if (!shopListItems.length) {
        return;
      }

      if (defaultSelected) {
        handleSelectChange(defaultSelected);
        return;
      }

      handleSelectChange(canSelectAll ? 'all' : shopListItems[0].id);
    },
    [shopListItems],
  );

  const handleSelectChange = (id: string) => {
    setSelected(id);

    if (!onChange) {
      return;
    }

    if (id === 'all') {
      onChange(null);

      return;
    }

    const targetShop = shopListItems.find(
      (i) => i.id.toString() === id.toString(),
    );

    onChange(targetShop);
  };

  const handleClick = (id: string | undefined) => {
    if (!onClick) {
      return;
    }

    if (id === undefined && selected === null) {
      return;
    }

    if (id === undefined && selected) {
      id = selected;
    }

    if (id === 'all') {
      onClick(null);

      return;
    }

    const targetShop = shopListItems.find((i) => i.id.toString() === id);

    onClick(targetShop);
  };

  const isActiveStatus = (status: string) => status === 'active';

  const getLabel = () => {
    if (!shopListItems.length) {
      return 'Loading stores...';
    }
    return enableLabel ? label : null;
  };

  return (
    <TextField
      className={className}
      select
      label={getLabel()}
      value={selected}
      onChange={(e) => handleSelectChange(e.target.value)}
      onClick={(e) => handleClick((e.target as any).value)}
      variant="outlined"
      size={size}
      fullWidth
    >
      {canSelectAll ? <MenuItem value="all">All Stores</MenuItem> : null}

      {shopListItems.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item container alignItems="center">
              <Avatar
                className={classes.typeLogo}
                alt={option.type}
                src={option.typeLogo}
              />
              {option.name}
            </Grid>
            <Grid item>
              <Chip
                size="small"
                label={option.status}
                className={clsx(
                  isActiveStatus(option.status)
                    ? classes.activeTag
                    : classes.errorTag,
                  classes.tag,
                )}
              />
            </Grid>
          </Grid>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ShopSelector;
