import { useMediaQuery, useTheme } from '@material-ui/core';

export default function useBreakPoints() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return {
    theme,
    isXs,
    isMd,
    isSm,
    isLg,
  };
}
