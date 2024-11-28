import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Discover South India Through Sound
            </h1>
            <p className="text-xl mb-8">
              Immerse yourself in the rich culture and heritage of South India with our AI-powered audio guides.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              <Headphones className="mr-2" />
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}