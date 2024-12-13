import React, { useState } from 'react';
import { Brain, Waves } from 'lucide-react';
import { Header } from './components/Header';
import { VideoFeed } from './components/VideoFeed';
import { Controls } from './components/Controls';
import { Features } from './components/Features';
import { useBackendConnection } from './hooks/useBackendConnection';

function App() {
  const [sentence, setSentence] = useState('');
  const { isConnected, currentLetter, error } = useBackendConnection();

  const addLetter = () => {
    if (currentLetter) {
      setSentence(prev => prev + currentLetter);
    }
  };

  const clearLastLetter = () => {
    setSentence(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />

        {error && (
          <div className="mb-8 bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <VideoFeed isConnected={isConnected} />

          <div className="space-y-6">
            {/* Current Detection */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">Current Detection</h2>
              </div>
              <div className="text-6xl font-bold text-center py-8 text-purple-400">
                {currentLetter || '?'}
              </div>
            </div>

            <Controls 
              onAddLetter={addLetter}
              onClearLast={clearLastLetter}
              disabled={!isConnected}
            />

            {/* Output */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">Detected Sentence</h2>
              </div>
              <p className="text-2xl font-mono break-words min-h-[100px] p-4 bg-black/20 rounded-xl">
                {sentence || 'Start signing to create a sentence...'}
              </p>
            </div>
          </div>
        </div>

        <Features />
      </div>
    </div>
  );
}

export default App;