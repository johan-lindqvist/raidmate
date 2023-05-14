import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { CustomThemeProviderProps } from './types';
import { GlobalStyle } from './styled';

export function CustomThemeProvider(props: CustomThemeProviderProps) {
  const { children } = props;

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
}
