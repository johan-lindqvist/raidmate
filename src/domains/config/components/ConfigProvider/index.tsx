import { createContext, useRef } from 'react';

import { Config, ConfigProviderProps } from './types';

export const ConfigContext = createContext<Config | null>(null);

export function ConfigProvider(props: ConfigProviderProps) {
  const { children } = props;

  const configRef = useRef<Config>({
    backend: {
      url: 'https://l25rty758g.execute-api.eu-west-1.amazonaws.com/prod/login/token',
    },
  });

  const value: Config = configRef.current;

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
