import { useEffect, useState, useRef } from 'react';

export const useMockData = <T>(data: T, delay = 1000) => {
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => setLoading(false), delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return { loading, data };
};
