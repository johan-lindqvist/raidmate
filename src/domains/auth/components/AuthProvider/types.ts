import { ReactNode } from 'react';

export interface AuthContext {
  code: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}
