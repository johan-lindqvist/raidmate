import { useContext } from 'react';

import { ConfigContext } from '../components';

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('[Context Error]: `useConfig` should be used as a child to `ConfigProvider`.');
  }

  return context;
};
