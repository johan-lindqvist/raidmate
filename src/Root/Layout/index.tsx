import { Outlet } from 'react-router-dom';

import { routes } from 'app-constants';
import { useMock } from 'domains/mock';

import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { useMatchAny } from './useMatchAny';
import { LayoutBottom, LayoutBottomLeft, LayoutBottomRight, LayoutContainer, LayoutTop } from './styled';

export function Layout() {
  const { isOnboarded } = useMock();
  const hideNavigation = useMatchAny([routes.login, routes.logout, routes.blizzardRedirect]);

  if (hideNavigation || !isOnboarded) {
    return (
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer>
      <LayoutTop>
        <Topbar />
      </LayoutTop>
      <LayoutBottom>
        <LayoutBottomLeft>
          <Sidebar />
        </LayoutBottomLeft>
        <LayoutBottomRight>
          <Outlet />
        </LayoutBottomRight>
      </LayoutBottom>
    </LayoutContainer>
  );
}
