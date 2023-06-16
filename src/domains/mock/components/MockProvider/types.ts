import { ReactNode } from 'react';

export interface MockContext {
  isOnboarded: boolean;
  onboard: () => void;
}

export interface MockProviderProps {
  children: ReactNode;
}
