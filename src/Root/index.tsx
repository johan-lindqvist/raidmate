import { Outlet } from 'react-router-dom';

import { AuthProvider } from 'domains/auth';

import { Navigation } from './Navigation';
import { Layout, LayoutLeft, LayoutRight } from './styled';

export function Root() {
  return (
    <AuthProvider>
      <Layout>
        <LayoutLeft>
          <Navigation />
        </LayoutLeft>
        <LayoutRight>
          <Outlet />
        </LayoutRight>
      </Layout>
    </AuthProvider>
  );
}
