import { useAuth } from 'domains/auth';

export function GuildsPage() {
  const { code } = useAuth();

  return <div>Guilds {code}</div>;
}
