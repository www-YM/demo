import { Pagination } from '@material-ui/lab';
import React from 'react';

export default function MyPagination({ onChange, ...rest }): JSX.Element {
  return (
    <Pagination
      {...rest}
      variant="outlined"
      shape="rounded"
      onChange={(_, page) => onChange(page)}
    />
  );
}
