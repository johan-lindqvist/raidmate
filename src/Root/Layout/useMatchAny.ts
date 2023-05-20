import { useMatches } from 'react-router';

export const useMatchAny = (routes: string[]) => {
  const matches = useMatches();

  const match = matches.find(({ pathname }) => routes.includes(pathname));

  return Boolean(match);
};
