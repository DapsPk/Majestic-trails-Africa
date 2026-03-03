'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { toursData } from '@/features/tours/data/tours-data';
import TourCard from '@/features/tours/components/TourCard';
import BookingModal from '@/features/booking/components/BookingModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type TourStyle = 'multi-day' | 'short-trip' | 'family' | 'group' | 'all';

export default function SerengetiPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTourStyle, setActiveTourStyle] = useState<TourStyle>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Serengeti header images array
  const headerImages = [
    '/images/headers/serengeti-park/header-1.jpg',
    '/images/headers/serengeti-park/header-2.jpg'
  ];

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTour(null);
  };

  // Filter tours for Serengeti only
  const serengetiTours = toursData.filter(tour => 
    tour.section === 'safari' && tour.subCategory === 'serengeti'
  );

  // Filter tours by active tour style
  const filteredTours = activeTourStyle === 'all' 
    ? serengetiTours 
    : serengetiTours.filter(tour => tour.tourStyle === activeTourStyle);

  // Count packages by tour style
  const tourStyleCounts = {
    'all': serengetiTours.length,
    'multi-day': serengetiTours.filter(t => t.tourStyle === 'multi-day').length,
    'short-trip': serengetiTours.filter(t => t.tourStyle === 'short-trip').length,
    'family': serengetiTours.filter(t => t.tourStyle === 'family').length,
    'group': serengetiTours.filter(t => t.tourStyle === 'group').length,
  };

  const tourStyles = [
    {
      id: 'all' as TourStyle,
      name: 'All Safaris',
      description: 'Explore all our Serengeti adventures',
      emoji: '🦁',
      count: tourStyleCounts.all,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    },
    {
      id: 'multi-day' as TourStyle,
      name: 'Multi-Day Safaris',
      description: '3-8 day comprehensive wildlife experiences',
      emoji: '⛺',
      count: tourStyleCounts['multi-day'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      id: 'short-trip' as TourStyle,
      name: 'Short Trips',
      description: '1-3 day quick adventures',
      emoji: '⚡',
      count: tourStyleCounts['short-trip'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      id: 'family' as TourStyle,
      name: 'Family Adventures',
      description: 'Kid-friendly safari experiences',
      emoji: '👨‍👩‍👧‍👦',
      count: tourStyleCounts.family,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200'
    },
    {
      id: 'group' as TourStyle,
      name: 'Group Safaris',
      description: 'Great value for groups & friends',
      emoji: '👥',
      count: tourStyleCounts.group,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-200'
    }
  ];

  // Custom ToursGrid for filtered display
  const SerengetiToursGrid = () => {
    if (filteredTours.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">
            No {tourStyles.find(s => s.id === activeTourStyle)?.name.toLowerCase()} found
          </h3>
          <p className="text-gray-500 mb-6">
            Try selecting a different safari style or check back later for new packages
          </p>
          <Button 
            onClick={() => setActiveTourStyle('all')}
            variant="primary" 
            className="bg-amber-600 hover:bg-amber-700"
          >
            Show All Safaris
          </Button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredTours.map(tour => (
          <TourCard 
            key={tour.id} 
            tour={tour} 
            onBookNow={handleBookNow}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Serengeti Hero Section with Rotating Images */}
      <section 
        className="relative py-20 text-white overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${headerImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/safari" 
                className="inline-flex items-center text-amber-100 hover:text-white transition-colors duration-200 group"
              >
                <span className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Safari Destinations
              </Link>
              <div className="text-amber-100 text-lg font-semibold">
                {serengetiTours.length} Serengeti Safari Packages
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm mb-6 border border-white border-opacity-30">
                <span className="text-4xl">🦁</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Serengeti National Park
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-4xl mx-auto leading-relaxed">
                Where Africa's Greatest Wildlife Drama Unfolds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serengeti History & Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Welcome to the Serengeti
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    <strong>Serengeti Safari Packages by Majestic Trails: Where Africa's Greatest Wildlife Drama Unfolds</strong>
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    Feel the earth tremble beneath a million hooves as the Great Migration surges across endless golden plains. 
                    Hear the dawn chorus of 500 bird species rising over acacia silhouettes. Watch a lioness stalk through tall 
                    grass at golden hour, her cubs tumbling behind. Welcome to the Serengeti, Tanzania's 14,750 sq km crown 
                    jewel—a UNESCO World Heritage Site and the stage for nature's most epic spectacle.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    Majestic Trails, with 15+ years of expertise and 12,000+ thrilled explorers, invites you to step into this 
                    living masterpiece. Our 2025 mid-range packages blend intimate wildlife encounters, eco-luxury camps, and 
                    seamless planning at prices that inspire adventure.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                    <h3 className="font-bold text-amber-800 text-lg mb-3">🏆 Why Choose Our Serengeti Safaris?</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li>• 97% guest satisfaction rate</li>
                      <li>• Expert guides with 10+ years experience</li>
                      <li>• Prime wildlife viewing locations</li>
                      <li>• Eco-friendly and sustainable tourism</li>
                      <li>• All-inclusive packages with no hidden costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Facts Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-amber-50 rounded-2xl p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-amber-800 mb-6">Serengeti at a Glance</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">📍 Location</h4>
                      <p className="text-amber-600">Northern Tanzania</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">📏 Size</h4>
                      <p className="text-amber-600">14,750 sq km (5,700 sq mi)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">🏆 Status</h4>
                      <p className="text-amber-600">UNESCO World Heritage Site</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">🕒 Best Time to Visit</h4>
                      <p className="text-amber-600">June - October (Dry season)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">🐘 Key Wildlife</h4>
                      <p className="text-amber-600">Big Five + Great Migration</p>
                    </div>

                    <div className="pt-6 border-t border-amber-200">
                      <h4 className="font-semibold text-amber-700 mb-3">📞 Need Help Choosing?</h4>
                      <p className="text-amber-600 text-sm mb-4">
                        Our safari experts can help you select the perfect Serengeti experience.
                      </p>
                      <Button 
                        variant="primary" 
                        className="w-full bg-amber-600 hover:bg-amber-700"
                      >
                        Contact Our Experts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Style Selection Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Choose Your Safari Style
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select from our carefully curated Serengeti experiences tailored to different travel preferences
              </p>
            </div>

            {/* Tour Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {tourStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveTourStyle(style.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 border-2 ${
                    activeTourStyle === style.id
                      ? `bg-gradient-to-r ${style.color} text-white shadow-2xl ${style.borderColor}`
                      : `bg-white ${style.borderColor} text-gray-800 shadow-lg hover:shadow-xl`
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{style.emoji}</div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      activeTourStyle === style.id 
                        ? 'bg-white bg-opacity-20 text-white' 
                        : `${style.bgColor} ${style.textColor}`
                    }`}>
                      {style.count} {style.count === 1 ? 'tour' : 'tours'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                  <p className={
                    activeTourStyle === style.id 
                      ? 'text-white text-opacity-90' 
                      : 'text-gray-600'
                  }>
                    {style.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-sm font-semibold">
                    <span className={
                      activeTourStyle === style.id ? 'text-white' : style.textColor
                    }>
                      Explore {style.name.toLowerCase()} →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serengeti Safari Packages Section */}
      <section className="py-20 bg-white" id="serengeti-packages">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Active Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {tourStyles.find(s => s.id === activeTourStyle)?.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {filteredTours.length} amazing {filteredTours.length === 1 ? 'safari' : 'safaris'} in this category
              </p>
            </div>

            {/* Tours Grid */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <SerengetiToursGrid />
            </div>

            {/* Style Navigation */}
            <div className="text-center mt-12">
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  Not sure which style is right for you?
                </h3>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Each safari style offers a unique experience. Multi-day for comprehensive exploration, 
                  short trips for time-pressed travelers, family adventures for all ages, and group safaris for great value.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {tourStyles.filter(s => s.id !== 'all').map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setActiveTourStyle(style.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        activeTourStyle === style.id
                          ? `bg-gradient-to-r ${style.color} text-white`
                          : `${style.bgColor} ${style.textColor} hover:shadow-lg`
                      }`}
                    >
                      {style.emoji} {style.name} ({style.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Serengeti with Majestic Trails */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Majestic Trails for Your Serengeti Safari?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We don't just guide—we unveil the Serengeti's soul with passion, precision, and purpose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Prime Wildlife Viewing</h3>
                <p className="text-gray-600">
                  Our expert guides know the best locations and times for optimal wildlife encounters and photography.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏕️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Luxury Camps & Lodges</h3>
                <p className="text-gray-600">
                  Handpicked accommodations that offer comfort and authentic wilderness experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Conservation Focus</h3>
                <p className="text-gray-600">
                  We support local conservation efforts and practice responsible, sustainable tourism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Witness the Great Migration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your Serengeti adventure awaits. Book now and secure your spot for the wildlife experience of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('serengeti-packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🦁 Explore Serengeti Packages
              </Button>
              <Link href="/safari">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                  ← Back to All Safaris
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