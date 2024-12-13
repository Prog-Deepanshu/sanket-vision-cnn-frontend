import React from 'react';
import { Hand } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Hand className="w-10 h-10 text-purple-400" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Sign Language Recognition
        </h1>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Advanced AI-powered hand sign recognition system using computer vision
      </p>
    </div>
  );
}