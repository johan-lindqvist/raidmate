import { Navigate, useSearchParams } from 'react-router-dom';

export function LoginBlizzardPage() {
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');
  const state = searchParams.get('state');

  return <Navigate replace to={`/dashboard?code=${code}&state=${state}`} />;
}
