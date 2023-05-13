import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div>
      <Link to="/">Page not found, go back</Link>
    </div>
  );
}
