import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>count is {count} xxxy</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR test
      </p>
    </div>
  );
}
