'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { toursData } from '@/features/tours/data/tours-data';
import ToursGrid from '@/features/tours/components/ToursGrid';
import TourFilters from '@/features/tours/components/TourFilters';
import BookingModal from '@/features/booking/components/BookingModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SafariPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategoryImages, setCurrentCategoryImages] = useState<{[key: string]: number}>({
    serengeti: 0,
    ngorongoro: 0,
    tarangire: 0
  });

  // Safari header images array
  const safariImages = [
    '/images/safari/header-1.jpg',
    '/images/safari/header-2.jpg',
    '/images/safari/header-3.jpg',
    '/images/safari/header-4.jpg'
  ];

  // Category images arrays (2 images per category)
  const categoryImages = {
    serengeti: [
      '/images/safari/serengeti/category-1.jpg',
      '/images/safari/serengeti/category-2.jpg'
    ],
    ngorongoro: [
      '/images/safari/ngorongoro/category-1.jpg',
      '/images/safari/ngorongoro/category-2.jpg'
    ],
    tarangire: [
      '/images/safari/tarangire/category-1.jpg',
      '/images/safari/tarangire/category-2.jpg'
    ]
  };

  // Rotate header images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === safariImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [safariImages.length]);

  // Rotate category images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryImages(prev => ({
        serengeti: prev.serengeti === 0 ? 1 : 0,
        ngorongoro: prev.ngorongoro === 0 ? 1 : 0,
        tarangire: prev.tarangire === 0 ? 1 : 0
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTour(null);
  };

  // Filter tours for safari section only
  const safariTours = toursData.filter(tour => tour.section === 'safari');
  
  // Count packages by subCategory
  const serengetiCount = safariTours.filter(tour => tour.subCategory === 'serengeti').length;
  const ngorongoroCount = safariTours.filter(tour => tour.subCategory === 'ngorongoro').length;
  const tarangireCount = safariTours.filter(tour => tour.subCategory === 'tarangire').length;

  const safariCategories = [
    {
      id: 'serengeti',
      name: 'Serengeti National Park',
      description: 'Witness the Great Migration across endless golden plains. Experience Africa\'s greatest wildlife drama unfold.',
      emoji: '🦁',
      count: serengetiCount,
      textColor: 'text-white',
      bgColor: 'bg-black bg-opacity-40',
      borderColor: 'border-amber-200',
      highlights: ['Great Migration', 'Big Cats', '2M+ Wildebeest', 'River Crossings']
    },
    {
      id: 'ngorongoro',
      name: 'Ngorongoro Crater',
      description: 'Descend into the world\'s largest intact volcanic caldera. Unparalleled wildlife density and breathtaking scenery.',
      emoji: '🦏',
      count: ngorongoroCount,
      textColor: 'text-white',
      bgColor: 'bg-black bg-opacity-40',
      borderColor: 'border-emerald-200',
      highlights: ['Big Five', 'Volcanic Caldera', 'High Density', 'Maasai Culture']
    },
    {
      id: 'tarangire',
      name: 'Tarangire National Park',
      description: 'Discover the land of giants with massive elephant herds and ancient baobab trees dotting the landscape.',
      emoji: '🐘',
      count: tarangireCount,
      textColor: 'text-white',
      bgColor: 'bg-black bg-opacity-40',
      borderColor: 'border-yellow-200',
      highlights: ['Elephant Herds', 'Baobab Trees', 'Bird Paradise', 'Less Crowded']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Safari Hero Section - OPTIMIZED HEIGHT */}
      <section className="relative min-h-[90vh] text-white overflow-hidden">
        {/* Background Images with Smooth Transition */}
        <div className="absolute inset-0">
          {safariImages.map((image, index) => (
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
            {/* Clean Header - No Lion Icon */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Tanzania Safaris
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate wildlife adventure in Africa's most iconic national parks. 
              Witness the Great Migration, encounter the Big Five, and create memories that will last a lifetime.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-green-200 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{safariTours.length}+</div>
                <div className="text-sm">Safari Packages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm">Big Five Sightings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">⭐ 4.9</div>
                <div className="text-sm">Guest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            {/* Image Indicator Dots */}
            <div className="flex justify-center space-x-3">
              {safariImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safari Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Ultimate Wildlife Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tanzania is home to some of the world's most spectacular wildlife destinations. 
                From the endless plains of the Serengeti to the breathtaking Ngorongoro Crater, 
                every safari is a unique adventure waiting to be discovered.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🐆</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Big Five Encounters</h4>
                    <p className="text-gray-600">Witness lions, leopards, elephants, rhinos, and buffalo in their natural habitat.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🐃</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Great Migration</h4>
                    <p className="text-gray-600">Experience one of nature's greatest spectacles as millions of animals cross the plains.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Professional Guides</h4>
                    <p className="text-gray-600">Our expert guides ensure you get the best wildlife viewing and photographic opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual - REPLACED WITH IMAGE */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/safari/tanzania-wild-heart.jpg)`
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative h-full flex items-center justify-end pr-8">
                <div className="text-white text-right max-w-xs">
                  <h3 className="text-3xl font-bold mb-2">Tanzania's Wild Heart</h3>
                  <p className="text-lg opacity-90">Where Adventure Comes Alive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Categories Section */}
      <section className="py-20 bg-gray-50" id="safari-categories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Safari Destination
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore Tanzania's most iconic national parks and discover the perfect safari adventure for you
            </p>
          </div>

          {/* Category Cards with Full Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {safariCategories.map((category) => (
              <Link 
                key={category.id}
                href={`/safari/${category.id}`}
                className="group"
              >
                <div className={`rounded-3xl shadow-lg overflow-hidden border-2 ${category.borderColor} transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col relative min-h-[500px]`}>
                  
                  {/* Full Card Background with Rotating Images */}
                  <div className="absolute inset-0">
                    {categoryImages[category.id as keyof typeof categoryImages].map((image, index) => (
                      <div
                        key={image}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentCategoryImages[category.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                    ))}
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>

                  {/* All Content Overlay */}
                  <div className="relative p-6 text-white h-full flex flex-col justify-between z-10">
                    
                    {/* Top Section - Category Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{category.emoji}</div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                          {category.count} {category.count === 1 ? 'tour' : 'tours'}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white text-opacity-90 leading-relaxed text-sm mb-6">
                        {category.description}
                      </p>
                    </div>

                    {/* Middle Section - Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 text-lg">Experience Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-white bg-opacity-20 backdrop-blur-sm text-white font-medium border border-white border-opacity-30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section - CTA Button */}
                    <div className="mt-auto">
                      <div className={`w-full border-2 border-white text-white py-3 px-6 rounded-xl text-center font-semibold transition-all duration-200 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-white hover:bg-opacity-20 group-hover:shadow-lg`}>
                        Explore {category.name.split(' ')[0]} Safaris →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Not Sure Where to Start?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Each park offers a unique experience. Serengeti for the Great Migration, Ngorongoro for crater wildlife density, 
                and Tarangire for elephant herds and baobab landscapes. Our experts can help you choose the perfect safari.
              </p>
              {/* Transparent Button */}
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                🦁 Contact Our Safari Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Safaris */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Majestic Trails Safaris?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our guides have 10+ years of experience and deep knowledge of Tanzania's ecosystems and wildlife behavior.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Luxury Accommodation</h3>
              <p className="text-gray-600">
                Stay in handpicked luxury lodges and tented camps with stunning views and exceptional service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">All-Inclusive Packages</h3>
              <p className="text-gray-600">
                Everything included - park fees, accommodation, meals, transportation, and expert guiding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Wildlife Adventure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of travelers who've witnessed Africa's magic with us. Your unforgettable safari experience awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('safari-categories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🦁 Explore Safari Destinations
              </Button>
              <Link href="/kilimanjaro">
                <Button size="lg" variant="outline">
                  🏔️ Also Interested in Kilimanjaro?
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