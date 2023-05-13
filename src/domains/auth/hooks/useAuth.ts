import { useContext } from 'react';

import { AuthContext } from '../components';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('[Context Error]: `useAuth` should be used as a child to `AuthProvider`.');
  }

  return context;
};
