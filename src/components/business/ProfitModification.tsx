import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { add, down, subtract, toSnapshot, toUnit } from 'dinero.js';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { toDineroObj } from 'utils/MoneyUtil';

type Props = {
  onProfitInputChange: (modification: number) => void;
  defaultProfitExchanged: number;
  currencyCode: string;
};

enum ProfitModificationType {
  DEFAULT = 'setValue',
  SET_VALUE = 'setValue',
  INCREASE_BY = 'increaseBy',
  DECREASE_BY = 'decreaseBy',
}

/**
 * 此组件中的计算使用的是店铺设定的货币的数值
 */
function calProfit(
  defaultProfitExchanged: number,
  profitModificationType: string,
  profitInput: string,
  currencyCode: string,
): number {
  const inputDinero = toDineroObj(
    Math.round(Number(profitInput) * 100),
    currencyCode,
  );

  const defaultProfitExchangedDinero = toDineroObj(
    defaultProfitExchanged,
    currencyCode,
  );

  let result = defaultProfitExchanged;

  switch (profitModificationType) {
    case ProfitModificationType.SET_VALUE:
      result = toSnapshot(inputDinero).amount;
      break;
    case ProfitModificationType.INCREASE_BY:
      result = toSnapshot(
        add(defaultProfitExchangedDinero, inputDinero),
      ).amount;
      break;
    case ProfitModificationType.DECREASE_BY:
      result = toSnapshot(
        subtract(defaultProfitExchangedDinero, inputDinero),
      ).amount;
      break;
    default:
      throw new Error('Modification type not supported.');
  }

  return result;
}

const ProfitModification = ({
  onProfitInputChange,
  defaultProfitExchanged,
  currencyCode,
}: Props): JSX.Element => {
  const [profitModificationType, setProfitModificationType] = useState(
    ProfitModificationType.DEFAULT,
  );

  const handleModificationTypeChange = (
    event: React.ChangeEvent<{ value: ProfitModificationType }>,
  ) => {
    setProfitModificationType(event.target.value);
  };

  const defaultProfitInput = toUnit(
    toDineroObj(defaultProfitExchanged, currencyCode),
    { digits: 2, round: down },
  ).toString();

  const [profitInput, setProfitInput] = useState<string>(defaultProfitInput);

  const handleProfitInputChange = (
    event: React.ChangeEvent<{ value: string }>,
  ) => {
    const input = event.target.value;

    setProfitInput(input);

    const profitExchanged = calProfit(
      defaultProfitExchanged,
      profitModificationType,
      input,
      currencyCode,
    );

    onProfitInputChange(profitExchanged);
  };

  const handelResetProfitInput = () => {
    setProfitModificationType(ProfitModificationType.SET_VALUE);

    setProfitInput(defaultProfitInput);

    const profitExchanged = calProfit(
      defaultProfitExchanged,
      ProfitModificationType.DEFAULT,
      defaultProfitInput,
      currencyCode,
    );

    onProfitInputChange(profitExchanged);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <FormattedMessage
            defaultMessage="Change profits"
            description="Change profits"
          />
          &nbsp;
          <Button
            variant="outlined"
            size="small"
            onClick={handelResetProfitInput}
          >
            <FormattedMessage
              defaultMessage="Reset profits"
              description="Reset profits"
            />
          </Button>
        </Typography>
        <Typography variant="subtitle2">
          <FormattedMessage
            defaultMessage="The currency on your shop is set to {currency}, so we converted
            pricing and profit accordingly. Feel free to adjust the retail price
            to get a more rounded sum."
            description="The currency on your shop is set to {currency}, so we converted
            pricing and profit accordingly. Feel free to adjust the retail price
            to get a more rounded sum."
            values={{
              currency: currencyCode,
            }}
          />
        </Typography>
        <Typography variant="subtitle2">
          <FormattedMessage
            defaultMessage="Set your desired profit, and we’ll configure the retail price for you."
            description="Set your desired profit, and we’ll configure the retail price for you."
          />
        </Typography>
      </Grid>

      <Grid item style={{ width: '140px' }}>
        <FormControl fullWidth>
          <InputLabel>
            <FormattedMessage
              defaultMessage="Modification by"
              description="Modification by"
            />
          </InputLabel>
          <Select
            value={profitModificationType}
            onChange={handleModificationTypeChange}
          >
            <MenuItem value={ProfitModificationType.SET_VALUE}>
              <FormattedMessage
                defaultMessage="Set value"
                description="Set value"
              />
            </MenuItem>
            <MenuItem value={ProfitModificationType.INCREASE_BY}>
              <FormattedMessage
                defaultMessage="Increase by"
                description="Increase by"
              />
            </MenuItem>
            <MenuItem value={ProfitModificationType.DECREASE_BY}>
              <FormattedMessage
                defaultMessage="Decrease by"
                description="Decrease by"
              />
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item style={{ width: '220px' }}>
        <TextField
          label="Value"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{currencyCode}</InputAdornment>
            ),
          }}
          value={profitInput}
          onChange={handleProfitInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default ProfitModification;
