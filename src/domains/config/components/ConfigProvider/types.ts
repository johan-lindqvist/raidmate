import { ReactNode } from 'react';

export interface Config {
  backend: {
    url: string;
  };
}

export interface ConfigProviderProps {
  children: ReactNode;
}
