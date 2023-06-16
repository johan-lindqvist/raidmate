import { createContext, useCallback, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { routes } from 'app-constants';
import { useConfig } from 'domains/config';

import { AuthContext as Context, AuthProviderProps } from './types';

export const AuthContext = createContext<Context | null>(null);

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const navigate = useNavigate();
  const config = useConfig();
  const codeRef = useRef('');
  const stateRef = useRef('');

  const [searchParams, setSearchParams] = useSearchParams();

  const codeParam = searchParams.get('code');
  const stateParam = searchParams.get('state');

  const navigateToLogin = useCallback(() => navigate(routes.login, { replace: true }), [navigate]);

  const request = useCallback(
    async (code: string) => {
      const data = await fetch(config.backend.url, { headers: { 'blizzard-code': code } });
      const json = await data.json();

      console.log({ json });
    },
    [config.backend.url],
  );

  useEffect(() => {
    if (codeParam && !codeRef.current && stateParam && !stateRef.current) {
      codeRef.current = codeParam;
      stateRef.current = stateParam;

      if (config.blizzard.state !== stateRef.current) {
        return navigateToLogin();
      }

      request(codeParam);
      setSearchParams();
    }

    if ((!codeParam && !codeRef.current) || (!stateParam && !stateRef.current)) {
      return navigateToLogin();
    }
  }, [navigateToLogin, setSearchParams, stateParam, codeParam, config, request]);

  const value: Context = { code: codeRef.current };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
