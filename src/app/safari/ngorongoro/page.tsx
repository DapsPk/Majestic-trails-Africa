'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { toursData } from '@/features/tours/data/tours-data';
import TourCard from '@/features/tours/components/TourCard';
import BookingModal from '@/features/booking/components/BookingModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type TourStyle = 'multi-day' | 'short-trip' | 'family' | 'group' | 'all';

export default function NgorongoroPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTourStyle, setActiveTourStyle] = useState<TourStyle>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headerImages = [
    '/images/headers/ngorongoro-crater/header-1.jpg',
    '/images/headers/ngorongoro-crater/header-2.jpg'
  ];

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

  // Filter tours for Ngorongoro only
  const ngorongoroTours = toursData.filter(tour => 
    tour.section === 'safari' && tour.subCategory === 'ngorongoro'
  );

  // Filter tours by active tour style
  const filteredTours = activeTourStyle === 'all' 
    ? ngorongoroTours 
    : ngorongoroTours.filter(tour => tour.tourStyle === activeTourStyle);

  // Count packages by tour style
  const tourStyleCounts = {
    'all': ngorongoroTours.length,
    'multi-day': ngorongoroTours.filter(t => t.tourStyle === 'multi-day').length,
    'short-trip': ngorongoroTours.filter(t => t.tourStyle === 'short-trip').length,
    'family': ngorongoroTours.filter(t => t.tourStyle === 'family').length,
    'group': ngorongoroTours.filter(t => t.tourStyle === 'group').length,
  };

  const tourStyles = [
    {
      id: 'all' as TourStyle,
      name: 'All Safaris',
      description: 'Explore all our Ngorongoro adventures',
      emoji: '🦏',
      count: tourStyleCounts.all,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'multi-day' as TourStyle,
      name: 'Multi-Day Safaris',
      description: '3-6 day comprehensive crater experiences',
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
      description: '1-3 day quick crater adventures',
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
      description: 'Kid-friendly crater experiences',
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
  const NgorongoroToursGrid = () => {
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
            className="bg-emerald-600 hover:bg-emerald-700"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Ngorongoro Hero Section with Rotating Images */}
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
                className="inline-flex items-center text-emerald-100 hover:text-white transition-colors duration-200 group"
              >
                <span className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Safari Destinations
              </Link>
              <div className="text-emerald-100 text-lg font-semibold">
                {ngorongoroTours.length} Ngorongoro Safari Packages
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Ngorongoro Crater
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                The World's Largest Intact Volcanic Caldera • UNESCO World Heritage Site
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ngorongoro History & Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Eden's Timeless Stage Awaits
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    <strong>NGORONGORO CRATER: THE EIGHTH WONDER OF THE WORLD</strong>
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    Ngorongoro Crater stands as one of Africa's most extraordinary natural wonders—a UNESCO World Heritage Site since 1979 and often called "Africa's Garden of Eden." This massive volcanic caldera was formed approximately 2-3 million years ago when a giant volcano, possibly as tall as Mount Kilimanjaro, exploded and collapsed upon itself.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    The resulting crater measures 610 meters deep and covers 260 square kilometers, creating the world's largest intact and unfilled volcanic caldera. What makes Ngorongoro truly magical is its self-contained ecosystem. The crater floor is home to approximately 25,000 large animals, making it one of the densest concentrations of wildlife in Africa.
                  </p>

                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-6">
                    <h3 className="font-bold text-emerald-800 text-lg mb-3">🏆 UNESCO World Heritage Site</h3>
                    <p className="text-emerald-700 mb-3">
                      Designated in 1979 for its outstanding natural beauty and ecological significance. The crater represents one of the most complete and diverse ecosystems on Earth.
                    </p>
                    <ul className="space-y-2 text-emerald-700">
                      <li>• World's largest intact volcanic caldera</li>
                      <li>• Home to 25,000+ large animals</li>
                      <li>• One of Africa's highest wildlife densities</li>
                      <li>• Sanctuary for endangered black rhinos</li>
                      <li>• Year-round wildlife viewing destination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Facts Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-emerald-50 rounded-2xl p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-6">Ngorongoro at a Glance</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">📍 Location</h4>
                      <p className="text-emerald-600">Northern Tanzania, East Africa</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">📏 Crater Dimensions</h4>
                      <p className="text-emerald-600">260 sq km • 610m deep • 19km diameter</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">🏆 UNESCO Status</h4>
                      <p className="text-emerald-600">World Heritage Site since 1979</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">🦓 Wildlife Population</h4>
                      <p className="text-emerald-600">25,000+ large animals</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">🕒 Best Time to Visit</h4>
                      <p className="text-emerald-600">Year-round destination</p>
                      <p className="text-emerald-500 text-sm">Peak: June-October (Dry season)</p>
                    </div>

                    <div className="pt-6 border-t border-emerald-200">
                      <h4 className="font-semibold text-emerald-700 mb-3">📞 Expert Safari Planning</h4>
                      <p className="text-emerald-600 text-sm mb-4">
                        Our Ngorongoro specialists can help you choose the perfect crater experience.
                      </p>
                      <Button 
                        variant="primary" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
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
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Choose Your Safari Style
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select from our carefully curated Ngorongoro experiences tailored to different travel preferences
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

      {/* Ngorongoro Safari Packages Section */}
      <section className="py-20 bg-white" id="ngorongoro-packages">
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
              <NgorongoroToursGrid />
            </div>

            {/* Style Navigation */}
            <div className="text-center mt-12">
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                  Not sure which style is right for you?
                </h3>
                <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
                  Each safari style offers a unique experience. Multi-day for comprehensive crater exploration, 
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

      {/* Why Ngorongoro with Majestic Trails */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Majestic Trails for Your Ngorongoro Safari?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the crater with guides who know every corner of this natural wonder and understand its unique ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Crater Expertise</h3>
                <p className="text-gray-600">
                  Our guides specialize in Ngorongoro's unique ecosystem and know the best spots for black rhino sightings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Rim Accommodation</h3>
                <p className="text-gray-600">
                  Stay in lodges perched on the crater rim with breathtaking views of the caldera below.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Archaeological Access</h3>
                <p className="text-gray-600">
                  Exclusive access to Olduvai Gorge with specialist guides explaining human evolution discoveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Descend into Africa's Garden of Eden?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Ngorongoro adventure and witness one of Africa's most spectacular natural wonders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('ngorongoro-packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🦏 Explore Ngorongoro Packages
              </Button>
              <Link href="/safari">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
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