import { useContext } from 'react';

import { MockContext } from '../components';

export const useMock = () => {
  const context = useContext(MockContext);

  if (!context) {
    throw new Error('[Context Error]: `useMock` should be used as a child to `MockProvider`.');
  }

  return context;
};
