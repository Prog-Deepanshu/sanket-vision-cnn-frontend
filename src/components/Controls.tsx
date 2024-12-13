import React from 'react';
import { Type, Trash2 } from 'lucide-react';

interface ControlsProps {
  onAddLetter: () => void;
  onClearLast: () => void;
  disabled: boolean;
}

export function Controls({ onAddLetter, onClearLast, disabled }: ControlsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onAddLetter}
        disabled={disabled}
        className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800/50 disabled:cursor-not-allowed transition-colors py-3 rounded-xl flex items-center justify-center gap-2"
      >
        <Type className="w-5 h-5" />
        Plot Letter
      </button>
      <button
        onClick={onClearLast}
        disabled={disabled}
        className="flex-1 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-800/50 disabled:cursor-not-allowed transition-colors py-3 rounded-xl flex items-center justify-center gap-2"
      >
        <Trash2 className="w-5 h-5" />
        Clear Last
      </button>
    </div>
  );
}