import { ReactNode } from 'react';

export interface Config {
  blizzard: {
    state: string;
    scope: string;
    oauthUrl: string;
    clientId: string;
    redirectUri: string;
    responseType: string;
  };
  backend: {
    url: string;
  };
}

export interface ConfigProviderProps {
  children: ReactNode;
}
