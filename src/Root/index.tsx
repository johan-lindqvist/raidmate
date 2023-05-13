import { Outlet } from 'react-router-dom';

import { AuthProvider } from 'domains/auth';

export function Root() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
