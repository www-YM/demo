import { createContext } from 'react';

export const HasDisplayCustomizerContext = createContext({
  hasDisplayedCustomizer: false,
  setHasDisplayedCustomizer: (s: boolean) => {},
});
