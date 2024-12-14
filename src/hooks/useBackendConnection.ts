import { useState, useEffect, useCallback } from 'react';

const BACKEND_URL = 'http://127.0.0.1:5000'; // Corrected URL

export function useBackendConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentLetter, setCurrentLetter] = useState('');
  const [error, setError] = useState<string | null>(null);

  const checkConnection = useCallback(async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/get_letter`);
      if (!response.ok) {
        throw new Error(`Backend service unavailable: ${response.status}`);
      }
      const data = await response.json();
      setCurrentLetter(data.letter || ''); // Update the current letter
      setIsConnected(true); // Mark connection as successful
      setError(null); // Clear previous errors
    } catch (err) {
      setIsConnected(false); // Mark as disconnected
      setError('Cannot connect to recognition service'); // Set error message
      console.error('Connection error:', err);
    }
  }, []);

  useEffect(() => {
    checkConnection(); // Check immediately on mount
    const interval = setInterval(checkConnection, 2000); // Poll every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [checkConnection]);

  return {
    isConnected,
    currentLetter,
    error,
  };
}
