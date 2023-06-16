import { AuthProvider } from 'domains/auth';

import { Layout } from './Layout';
import { MockProvider } from 'domains/mock';

export function Root() {
  return (
    <AuthProvider>
      <MockProvider>
        <Layout />
      </MockProvider>
    </AuthProvider>
  );
}
