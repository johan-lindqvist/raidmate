import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ConfigProvider } from 'domains/config';
import { CustomThemeProvider } from 'theme';

import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <CustomThemeProvider>
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
