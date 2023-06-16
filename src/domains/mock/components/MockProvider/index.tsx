import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from 'app-constants';

import { MockContext as Context, MockProviderProps } from './types.ts';

export const MockContext = createContext<Context | null>(null);

export function MockProvider(props: MockProviderProps) {
  const { children } = props;
  const navigate = useNavigate();

  const [isOnboarded, setIsOnboarded] = useState(false);

  const onboard = () => {
    setIsOnboarded(true);
    navigate(routes.dashboard);
  };

  const value: Context = { isOnboarded, onboard };

  return <MockContext.Provider value={value}>{children}</MockContext.Provider>;
}
