'use client';

import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  const typewriterText = useTypewriter([
    'Kilimanjaro Treks',
    'Serengeti Safaris', 
    'Zanzibar Beaches',
    'African Adventures'
  ], 100);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Homepage hero images - using your renamed images
  const images = [
    '/images/homepage/hero-1.jpg',
    '/images/homepage/hero-2.jpg',
    '/images/homepage/hero-3.jpg',
    '/images/homepage/hero-4.jpg'
  ];

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* REMOVED: Globe icon circle */}
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Majestic Trails
        </h1>
        
        <div className="text-3xl md:text-5xl font-light mb-8 min-h-[60px]">
          <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Discover {typewriterText}
          </span>
          <span className="animate-pulse text-blue-300">|</span>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Experience Tanzania's most breathtaking adventures with expert guides. 
          From wildlife safaris to mountain summits, create memories that last a lifetime.
        </p>
        
        {/* Buttons - Now using the fixed Button component */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <Link href="/safari">
    <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
      🦁 Explore Safaris
    </Button>
  </Link>
  <Link href="/kilimanjaro">
    <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
      🏔️ Climb Kilimanjaro
    </Button>
  </Link>
</div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-blue-200 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5,000+</div>
            <div className="text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">⭐ 5.0</div>
            <div className="text-sm">Rating</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Explore More</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}