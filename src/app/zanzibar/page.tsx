'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { toursData } from '@/features/tours/data/tours-data';
import ToursGrid from '@/features/tours/components/ToursGrid';
import TourFilters from '@/features/tours/components/TourFilters';
import BookingModal from '@/features/booking/components/BookingModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function ZanzibarPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Zanzibar header images array
  const zanzibarImages = [
    '/images/zanzibar/header-1.jpg',
    '/images/zanzibar/header-2.jpg',
    '/images/zanzibar/header-3.jpg',
    '/images/zanzibar/header-4.jpg'
  ];

  // Rotate images every 5 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === zanzibarImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [zanzibarImages.length]);

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTour(null);
  };

  // Filter tours for zanzibar section only
  const zanzibarTours = toursData.filter(tour => tour.section === 'zanzibar');
  
  // Updated filter logic for new Zanzibar categories
  const filteredTours = activeCategory === 'all' 
    ? zanzibarTours 
    : zanzibarTours.filter(tour => tour.tourStyle === activeCategory);

  // Updated categories for Zanzibar packages
  const categories = [
    { 
      id: 'all', 
      name: 'All Zanzibar Experiences', 
      count: zanzibarTours.length, 
      emoji: '🏝️',
      description: 'Discover all 9 Zanzibar packages',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'multi-day', 
      name: 'Multi-Day Trips', 
      count: zanzibarTours.filter(t => t.tourStyle === 'multi-day').length, 
      emoji: '📅',
      description: '5-10 day comprehensive experiences',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'short-trip', 
      name: 'Short Day Trips', 
      count: zanzibarTours.filter(t => t.tourStyle === 'short-trip').length, 
      emoji: '⚡',
      description: '1-3 day quick getaways',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      id: 'luxury', 
      name: 'Luxury Zanzibar', 
      count: zanzibarTours.filter(t => t.tourStyle === 'luxury').length, 
      emoji: '🌟',
      description: 'Ultra-exclusive private island experiences',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'romantic', 
      name: 'Couples Trips', 
      count: zanzibarTours.filter(t => t.tourStyle === 'romantic').length, 
      emoji: '💑',
      description: 'Romantic getaways for couples',
      color: 'from-red-500 to-rose-500'
    },
  ];

  const islandStats = [
    { number: '25°C', label: 'Average Temperature' },
    { number: '🏝️', label: 'Archipelago' },
    { number: '⭐ 4.8', label: 'Traveler Rating' },
    { number: '🌊', label: 'Turquoise Waters' },
  ];

  const zanzibarHighlights = [
    {
      icon: '🏛️',
      title: 'Stone Town UNESCO Site',
      description: 'Wander through narrow streets of this historic trading town with Arabic, Indian, and European influences.'
    },
    {
      icon: '🌿',
      title: 'Spice Plantations',
      description: 'Discover why Zanzibar is called the Spice Island with guided tours of working plantations.'
    },
    {
      icon: '🤿',
      title: 'Coral Reefs',
      description: 'Snorkel or dive in some of East Africa\'s most vibrant coral gardens teeming with marine life.'
    },
    {
      icon: '⛵',
      title: 'Traditional Dhows',
      description: 'Sail on wooden sailing vessels at sunset for an unforgettable Indian Ocean experience.'
    }
  ];

  const bestBeaches = [
    { name: 'Nungwi Beach', feature: 'White sand & turquoise waters', emoji: '🏖️' },
    { name: 'Kendwa Beach', feature: 'Perfect sunset views', emoji: '🌅' },
    { name: 'Paje Beach', feature: 'Kite surfing paradise', emoji: '🪁' },
    { name: 'Jambiani Beach', feature: 'Authentic village life', emoji: '🐚' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Zanzibar Hero Section with Rotating Images */}
      <section className="relative min-h-[90vh] text-white overflow-hidden">
        {/* Background Images with Smooth Transition */}
        <div className="absolute inset-0">
          {zanzibarImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Clean Header - No Palm Icon Container */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Zanzibar Island
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the Spice Island's pristine beaches, rich culture, and turquoise waters. 
              Your perfect tropical paradise awaits in the Indian Ocean.
            </p>

            {/* Island Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-cyan-200 mb-12">
              {islandStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* TRANSPARENT BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="primary"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('experiences-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🌴 Explore Island Packages
              </Button>
              <Button 
                size="lg" 
                variant="primary"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('beaches-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🏖️ Discover Beaches
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Zanzibar Historical & Cultural Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Zanzibar: Whispers of Sultans, Spices, and Sun-Kissed Shores
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Step into Zanzibar, Tanzania's dazzling "Spice Island," where turquoise Indian Ocean waves 
                kiss powdery beaches, and clove-scented breezes carry whispers of ancient traders.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Historical Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🏛️</span>
                    A History That Pulses
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Born from Pliocene volcanic fires, Zanzibar's story spans millennia. Bantu settlers arrived 
                    20,000 years ago, followed by 8th-century Persian and Arab traders who made it a Swahili trade 
                    hub for gold, ivory, and slaves. Omani sultans ruled from 1832, turning it into a clove empire 
                    and slave market peak, until British abolition in 1873 and colonial rule in 1890. Revolution in 
                    1963 and union with Tanzania in 1964 shaped today's vibrant semi-autonomy. Stone Town's carved 
                    doors and minarets breathe this saga – walk them with us.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎵</span>
                    Culture: A Swahili Symphony
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Zanzibar's soul is a 97% Muslim fusion of African, Arab, and Indian roots. Taarab music, 
                    born in 1880s palaces, blends violins and drums in beachside serenades. Henna art adorns 
                    hands for Eid, while Swahili locals in colorful kangas share stories over chai. From Freddie 
                    Mercury's birthplace to Omani palaces, it's a cultural kaleidoscope. Join our homestays for 
                    authentic connections.
                  </p>
                </div>
              </div>

              {/* Cultural & Culinary Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🍛</span>
                    Food: A Flavor Fiesta
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Savor Zanzibar's spice-laced cuisine: grilled lobster with tamarind, coconut-spiked pilau, 
                    and urojo soup zinging with cloves – the island's "black gold" since 1818. Try Zanzibari 
                    pizza at Forodhani Gardens' night market or sugarcane juice on spice tours. Our packages 
                    pair every bite with ocean vistas.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🌴</span>
                    Scenery & Beaches: Tropical Bliss
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Zanzibar's landscapes dazzle: Nungwi's tide-free sands, Paje's kite-surf lagoons, Jambiani's 
                    serene coves. Inland, Jozani Forest shelters rare red colobus monkeys. Mnemba Atoll's reefs 
                    burst with fish and turtles. Under 2,500+ annual sunshine hours (25–30°C), sunrises glow gold 
                    and dusks paint lavender – pure postcard magic.
                  </p>
                </div>
              </div>
            </div>

            {/* Climate & Travel Info */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Climate & Essential Travel Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🌤️ Best Time to Visit</h4>
                  <ul className="space-y-2 text-cyan-100">
                    <li>• <strong>June–October:</strong> Dry season, perfect beach weather (28°C)</li>
                    <li>• <strong>December–February:</strong> Warm and quieter, ideal for relaxation</li>
                    <li>• <strong>March–May:</strong> Green season with occasional showers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🎒 What to Pack</h4>
                  <ul className="space-y-2 text-cyan-100">
                    <li>• Light, modest clothing for Stone Town</li>
                    <li>• Reef-safe sunscreen and beachwear</li>
                    <li>• Malaria prophylaxis recommended</li>
                    <li>• USD/TZS cash for local markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zanzibar Description Section - UPDATED WITH REAL IMAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Spice Island Paradise
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Zanzibar is an archipelago off the coast of Tanzania, famous for its beautiful beaches, 
                historic Stone Town, and aromatic spice plantations. This tropical paradise offers the 
                perfect blend of relaxation, culture, and adventure in the warm Indian Ocean.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">UNESCO World Heritage</h4>
                    <p className="text-gray-600">Stone Town is a living museum of Swahili culture and architecture.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👃</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Spice Island Legacy</h4>
                    <p className="text-gray-600">Discover cloves, cinnamon, nutmeg, and other spices that made the island famous.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🐠</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Marine Wonderland</h4>
                    <p className="text-gray-600">Crystal-clear waters with vibrant coral reefs and diverse marine life.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-2xl border-l-4 border-cyan-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Perfect Tropical Climate</h4>
                <p className="text-gray-600">
                  <strong>Year-round destination:</strong> Warm temperatures (25-30°C) throughout the year. 
                  Best beach weather from June to October, lush green landscapes from November to May.
                </p>
              </div>
            </div>

            {/* Visual - UPDATED WITH REAL IMAGE */}
            <div className="relative">
              <div className="h-96 rounded-3xl overflow-hidden shadow-2xl relative">
                <OptimizedImage
                  src="/images/zanzibar/description/beach.jpg"
                  alt="Zanzibar beach paradise with turquoise waters and white sand"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                  className="transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2">Indian Ocean Gem</p>
                    <p className="text-lg opacity-90">Tropical Paradise Awaits</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-cyan-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">4-7 Days</div>
                  <div className="text-sm text-gray-600">Ideal Stay Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zanzibar Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Zanzibar Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the unique experiences that make Zanzibar unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {zanzibarHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Beaches Section */}
      <section id="beaches-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Zanzibar's Famous Beaches
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most beautiful beaches on the Spice Island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bestBeaches.map((beach, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl mb-3">{beach.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{beach.name}</h3>
                <p className="text-cyan-100 text-sm">{beach.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Zanzibar Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our carefully crafted island experiences
            </p>
          </div>

          {/* Updated Category Buttons for Zanzibar Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${category.color} ${
                  activeCategory === category.id
                    ? 'text-white shadow-2xl ring-2 ring-white ring-opacity-50'
                    : 'text-white shadow-lg hover:shadow-xl opacity-90 hover:opacity-100'
                }`}
              >
                <div className="text-2xl mb-2">{category.emoji}</div>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-xs opacity-90 mb-1">
                  {category.count} {category.count === 1 ? 'package' : 'packages'}
                </p>
                <p className="text-xs opacity-80 leading-tight">{category.description}</p>
              </button>
            ))}
          </div>

          {/* Tours Display */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <TourFilters />
              </div>

              {/* Tours Grid */}
              <div className="lg:w-3/4">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {categories.find(c => c.id === activeCategory)?.name}
                  </h3>
                  <p className="text-gray-600">
                    {filteredTours.length} amazing {filteredTours.length === 1 ? 'Zanzibar experience' : 'Zanzibar experiences'} waiting for you
                  </p>
                </div>
                
                {filteredTours.length > 0 ? (
                  <ToursGrid 
                    tours={filteredTours} 
                    onBookNow={handleBookNow} 
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🌴</div>
                    <h3 className="text-2xl font-semibold text-gray-600 mb-2">No packages found</h3>
                    <p className="text-gray-500 mb-6">Try selecting a different category or check back for new island experiences</p>
                    <Button onClick={() => setActiveCategory('all')}>
                      Show All Zanzibar Experiences
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zanzibar Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Zanzibar with Majestic Trails?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Handpicked Resorts</h3>
              <p className="text-gray-600">
                We select only the best beachfront resorts and boutique hotels for your comfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Local Experts</h3>
              <p className="text-gray-600">
                Our guides are Zanzibar natives with deep knowledge of culture and hidden gems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">All Activities Included</h3>
              <p className="text-gray-600">
                Spice tours, snorkeling trips, Stone Town guides - everything arranged for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Island Paradise?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Escape to Zanzibar's white sand beaches and turquoise waters. Your tropical getaway awaits in the Indian Ocean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('experiences-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🌴 View Island Packages
              </Button>
              <Link href="/safari">
                <Button size="lg" variant="outline">
                  🦁 Combine with Safari?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        tour={selectedTour}
      />
    </div>
  );
}