import { useState, useEffect } from 'react';
import { ApiStatus } from '../types';

export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: unknown[] = []
) {
  const [status, setStatus] = useState<ApiStatus>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Do not run the effect if the dependencies aren't ready
    if (dependencies.some(dep => !dep)) {
      setData(null);
      setStatus('idle');
      return;
    }

    setStatus('loading');
    setError(null);

    apiCall()
      .then((result) => {
        setData(result);
        setStatus('success');
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        setStatus('error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { status, data, error };
}