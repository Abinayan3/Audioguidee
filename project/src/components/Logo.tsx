import React from 'react';
import { Headphones } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg">
      <Headphones className="h-8 w-8 text-white" />
      <span className="text-xl font-bold text-white">Audio Guide</span>
    </div>
  );
}