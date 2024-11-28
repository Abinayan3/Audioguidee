import React from 'react';
import { Users, Heart, Music } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Us</h2>
        <div className="prose lg:prose-xl dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We are a team of passionate students who created this project to solve the challenge of making South Indian cultural sites more accessible to visitors. Our AI-powered audio guides help travelers discover the beauty and history of iconic destinations while providing an immersive experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Student Initiative</h3>
              <p className="text-gray-600 dark:text-gray-300">Created by students, for solving real-world problems</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">Making cultural heritage accessible to everyone</p>
            </div>
            <div className="text-center">
              <Music className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">AI-Powered Audio</h3>
              <p className="text-gray-600 dark:text-gray-300">Innovative technology for cultural storytelling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}