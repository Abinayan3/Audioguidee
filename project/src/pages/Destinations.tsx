import React, { useState, useMemo } from 'react';
import { DestinationCard } from '../components/DestinationCard';
import { SearchBar } from '../components/SearchBar';
import { destinations } from '../data/destinations';

export function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) =>
      destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Explore Tamil Nadu</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredDestinations.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">No destinations found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      )}
    </div>
  );
}