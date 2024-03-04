import { IconButton, MenuItem, Popover } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import useI18n from 'hooks/useI18n';
import { useCallback, useState } from 'react';

const LanguageSelector = () => {
  const { currentLocale, supportedLanguages, changeLanguage } = useI18n();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = useCallback(
    (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );
  return (
    <>
      <IconButton color="default" onClick={toggleMenu}>
        <TranslateIcon />
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {supportedLanguages.map((item, index) => {
          return (
            <MenuItem
              key={index}
              disabled={item.locale === currentLocale}
              onClick={() => changeLanguage(item.fullLocale)}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Popover>
    </>
  );
};

export default LanguageSelector;
