import { AuthProvider } from 'domains/auth';

import { Layout } from './Layout';

export function Root() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
