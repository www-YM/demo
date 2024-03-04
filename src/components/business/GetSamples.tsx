import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ShopSelectorDialog from './ShopSelectorDialog';
import useGoto from 'hooks/useGoto';
import SampleOrderTip from './SampleOrderTip';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

function GetSamples({
  shopId,
  intl,
}: {
  shopId?: string;
  intl: IntlShape;
}): JSX.Element {
  const { goto } = useGoto();

  const gotoSampleCart = (id: string) => {
    goto(`/shops/${id}/sample-cart`);
  };

  const [shopSelectorVisible, setShopSelectorVisible] = useState(false);

  const handleShowShopSelectorDialog = () => {
    if (shopId) {
      gotoSampleCart(shopId);
      return;
    }

    setShopSelectorVisible(true);
  };

  const handleSampleCartShopSelected = (shop: ShopListItem) => {
    gotoSampleCart(shop.id);
  };

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={handleShowShopSelectorDialog}
      >
        <FormattedMessage defaultMessage="New order" description="New order" />
      </Button>

      <ShopSelectorDialog
        title={intl.formatMessage({
          defaultMessage: 'Choose a store to purchase samples',
          description: 'Choose a store to purchase samples',
        })}
        subtitle={
          <SampleOrderTip onClick={() => setShopSelectorVisible(false)} />
        }
        open={shopSelectorVisible}
        onCancel={() => setShopSelectorVisible(false)}
        onConfirm={handleSampleCartShopSelected}
        cancelButtonTitle={intl.formatMessage({
          defaultMessage: 'Cancel',
          description: 'Cancel',
        })}
        confirmButtonTitle={intl.formatMessage({
          defaultMessage: 'Confirm',
          description: 'Confirm',
        })}
      />
    </>
  );
}

export default injectIntl(GetSamples);
