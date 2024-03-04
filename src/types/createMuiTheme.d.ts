import { Theme, ThemeOptions, createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    layout: {
      contentWidth: number | string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    layout?: {
      contentWidth: number | string;
    };
  }
}
