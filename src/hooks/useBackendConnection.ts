import { useState, useEffect, useCallback } from 'react';

const BACKEND_URL = 'https://f951-27-4-166-26.ngrok-free.app/';

export function useBackendConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentLetter, setCurrentLetter] = useState('');
  const [error, setError] = useState<string | null>(null);

  const checkConnection = useCallback(async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/get_letter`);
      if (!response.ok) throw new Error('Backend service unavailable');
      const data = await response.json();
      setCurrentLetter(data.letter || '');
      setIsConnected(true);
      setError(null);
    } catch (err) {
      setIsConnected(false);
      setError('Cannot connect to recognition service');
      console.error('Connection error:', err);
    }
  }, []);

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 500);
    return () => clearInterval(interval);
  }, [checkConnection]);

  return {
    isConnected,
    currentLetter,
    error
  };
}
