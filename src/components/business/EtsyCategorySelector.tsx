import React, { useState, useEffect } from 'react';
import { TreeItem, TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useSWR from 'swr';
import api from 'api';
import {
  FormControlLabel,
  InputAdornment,
  Popover,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';

interface Props {
  onChange: (id: string) => void;
}

const EtsyCategorySelector = ({ onChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedCategoryPathIds, setSelectedCategoryPathIds] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [etsyCategories, setEtsyCategories] = useState<EtsyCategoriesItem[]>(
    [],
  );

  const { data } = useSWR(api.etsy.getCategoriesUrl, () =>
    api.etsy.getCategories(),
  );

  useEffect(() => {
    setEtsyCategories(data?.data || []);
  }, [data]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleSelect = ({ full_path_taxonomy_ids, id, name }) => {
    setSelectedCategoryPathIds(
      full_path_taxonomy_ids.filter((i) => i !== id).map((i) => i.toString()),
    );
    setSelectedCategoryId(id);
    setSelectedCategoryName(name);
    setOpen(false);
    onChange(id);
  };

  const handleToggleTreeView = (event, nodeIds) => {
    setSelectedCategoryPathIds(nodeIds);
  };

  const TreeItemComponent = ({ data, children = null }) => {
    return (
      <TreeItem
        nodeId={data.id.toString()}
        label={
          data.children.length ? (
            // 上级分类名称
            <Typography variant="subtitle1">{data.name}</Typography>
          ) : (
            // 最终分类单选项
            <FormControlLabel
              value={data.id}
              control={<Radio color="primary" />}
              label={data.name}
              onClick={() => handleSelect(data)}
              style={{
                display: 'flex',
              }}
            />
          )
        }
      >
        {data.children.length
          ? data.children.map((j) => {
              return (
                <TreeItemComponent data={j} key={j.id}>
                  {children}
                </TreeItemComponent>
              );
            })
          : null}
      </TreeItem>
    );
  };
  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        label="Select a collection*"
        error={!selectedCategoryName}
        fullWidth
        value={selectedCategoryName}
        helperText={selectedCategoryName ? '' : 'Collection cannot be empty'}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <ExpandMoreIcon color={open ? 'primary' : 'disabled'} />
            </InputAdornment>
          ),
        }}
        onClick={handleClick}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '100%',
            padding: '2%',
          },
        }}
      >
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon fontSize="large" />}
          defaultExpandIcon={<ChevronRightIcon fontSize="large" />}
          expanded={selectedCategoryPathIds}
          onNodeToggle={handleToggleTreeView}
        >
          <RadioGroup value={selectedCategoryId}>
            {etsyCategories.map((i) => {
              return <TreeItemComponent data={i} key={i.id} />;
            })}
          </RadioGroup>
        </TreeView>
      </Popover>
    </>
  );
};

export default EtsyCategorySelector;
