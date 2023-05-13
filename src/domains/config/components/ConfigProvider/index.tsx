import { createContext, useRef } from 'react';
import { v4 } from 'uuid';

import { Config, ConfigProviderProps } from './types';

const LOCAL_STORAGE_KEY = 'raidmate_state';

export const ConfigContext = createContext<Config | null>(null);

export function ConfigProvider(props: ConfigProviderProps) {
  const { children } = props;

  const localStorageState = localStorage.getItem(LOCAL_STORAGE_KEY);
  const configState = localStorageState || v4();

  localStorage.setItem(LOCAL_STORAGE_KEY, configState);

  const configRef = useRef<Config>({
    blizzard: {
      state: configState,
      scope: 'wow.profile',
      responseType: 'code',
      redirectUri: 'http://localhost:8080/blizzard-login',
      oauthUrl: 'https://oauth.battle.net/oauth/authorize',
      clientId: import.meta.env.VITE_BLIZZARD_CLIENT_ID,
    },
    backend: {
      url: 'https://l25rty758g.execute-api.eu-west-1.amazonaws.com/prod/login/token',
    },
  });

  const value: Config = configRef.current;

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
