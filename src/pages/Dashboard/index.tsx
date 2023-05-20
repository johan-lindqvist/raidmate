import { Typography } from 'components';
import { useAuth } from 'domains/auth';

export function DashboardPage() {
  const { code } = useAuth();

  return (
    <div>
      <Typography wowColor="alliance">{code}</Typography>
    </div>
  );
}
