import { useState, useEffect } from 'react';
import axios from 'axios';
import type { HistoryItem } from '../../types/history/historyData';


type HistoryResponse = Record<string, HistoryItem[]>;

export const useESSHistoryLast12Hours = (keys: string[]) => {
  const [data, setData] = useState<HistoryResponse | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const now = new Date();
        const startTs = new Date(now.getTime() - 12 * 60 * 60 * 1000).toISOString().replace('T', ' ').slice(0, 19);
        const endTs = now.toISOString().replace('T', ' ').slice(0, 19);

        const params = new URLSearchParams({
          keys: keys.join(','),
          startTs,
          endTs,
        });

        const response = await axios.get<HistoryResponse>(`http://localhost:5179/history/ess_ess_?${params}`);
        setData(response.data);
        setStatus('success');
      } catch (err: any) {
        setError(err.message || 'Failed to fetch history');
        setStatus('error');
      }
    };

    // Initial fetch
    fetchData();

    // Refresh every 60 seconds
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [keys]);

  return { data, status, error };
};