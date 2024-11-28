import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  // Image loading state management
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    // Fallback to a default image when the main image fails to load
    // TODO: Replace with your default image URL
    const fallbackImage = '/path-to-fallback-image.jpg';
    if (imageRef.current) {
      imageRef.current.src = fallbackImage;
    }
  };

  const imageRef = React.useRef<HTMLImageElement>(null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
      <div className="relative">
        {/* Image loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        
        {/* Main image */}
        <img
          ref={imageRef}
          src={destination.imageUrl}
          alt={destination.title}
          className={`w-full h-64 object-cover ${!imageLoaded ? 'hidden' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {destination.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {destination.description}
        </p>
        <AudioPlayer destinationId={destination.id} />
      </div>
    </div>
  );
}