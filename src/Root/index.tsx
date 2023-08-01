import { AuthProvider } from 'domains/auth';
import { MockProvider } from 'domains/mock';

import { Layout } from './Layout';

export function Root() {
  return (
    <AuthProvider>
      <MockProvider>
        <Layout />
      </MockProvider>
    </AuthProvider>
  );
}
