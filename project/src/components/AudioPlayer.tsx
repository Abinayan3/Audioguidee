import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Loader } from 'lucide-react';
import { generateAudio } from '../services/audioApi';

interface AudioPlayerProps {
  destinationId: string;
}

export function AudioPlayer({ destinationId }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    
    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayPause = async () => {
    try {
      if (!audioRef.current?.src) {
        setIsLoading(true);
        setError(null);

        // Step 1: Generate or fetch audio from AI service
        const audioData = await generateAudio(destinationId);
        
        // Step 2: Set the audio source
        if (audioRef.current) {
          audioRef.current.src = audioData.url;
          await audioRef.current.load();
        }
      }

      // Step 3: Handle playback
      if (audioRef.current) {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (err) {
      setError('Failed to load audio guide');
      console.error('Audio playback error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md">
      <button
        onClick={handlePlayPause}
        disabled={isLoading}
        className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full disabled:opacity-50"
      >
        {isLoading ? (
          <Loader className="h-6 w-6 animate-spin" />
        ) : isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </button>
      <Volume2 className="h-6 w-6 text-orange-600" />
      <div className="flex-1 h-2 bg-orange-100 rounded-full">
        <div className="w-1/3 h-full bg-orange-600 rounded-full"></div>
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}