import React from 'react';

interface VideoFeedProps {
  isConnected: boolean;
}

export function VideoFeed({ isConnected }: VideoFeedProps) {
  return (
    <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <div className="relative">
        {isConnected ? (
          <img 
            src="https://localhost:5000/video_feed" 
            alt="Video Feed" 
            className="w-full rounded-lg shadow-2xl"
          />
        ) : (
          <div className="w-full h-[400px] rounded-lg bg-black/40 flex items-center justify-center">
            <p className="text-red-400">Cannot connect to camera feed</p>
          </div>
        )}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${
          isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}>
          {isConnected ? 'Live' : 'Offline'}
        </div>
      </div>
    </div>
  );
}
