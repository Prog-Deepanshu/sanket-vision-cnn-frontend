import React from 'react';
import { Brain, Hand, GraduationCap } from 'lucide-react';

export function Features() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-6 h-6 text-purple-400" />
          <h3 className="text-lg font-semibold">AI-Powered</h3>
        </div>
        <p className="text-gray-300">
          Advanced machine learning model trained on thousands of hand signs
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Hand className="w-6 h-6 text-purple-400" />
          <h3 className="text-lg font-semibold">Real-time Detection</h3>
        </div>
        <p className="text-gray-300">
          Instant recognition and translation of hand signs to text
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 text-purple-400" />
          <h3 className="text-lg font-semibold">Learning Tool</h3>
        </div>
        <p className="text-gray-300">
          Perfect for learning and practicing sign language
        </p>
      </div>
    </div>
  );
}