'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { toursData } from '@/features/tours/data/tours-data';
import TourCard from '@/features/tours/components/TourCard';
import BookingModal from '@/features/booking/components/BookingModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type TourStyle = 'multi-day' | 'short-trip' | 'family' | 'group' | 'all';

export default function TarangirePage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTourStyle, setActiveTourStyle] = useState<TourStyle>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headerImages = [
    '/images/headers/tarangire-park/header-1.jpg',
    '/images/headers/tarangire-park/header-2.jpg'
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

  // Filter tours for Tarangire only - CORRECTED FILTER
  const tarangireTours = toursData.filter(tour => 
    tour.section === 'safari' && tour.subCategory === 'tarangire'
  );

  // Filter tours by active tour style
  const filteredTours = activeTourStyle === 'all' 
    ? tarangireTours 
    : tarangireTours.filter(tour => tour.tourStyle === activeTourStyle);

  // Count packages by tour style
  const tourStyleCounts = {
    'all': tarangireTours.length,
    'multi-day': tarangireTours.filter(t => t.tourStyle === 'multi-day').length,
    'short-trip': tarangireTours.filter(t => t.tourStyle === 'short-trip').length,
    'family': tarangireTours.filter(t => t.tourStyle === 'family').length,
    'group': tarangireTours.filter(t => t.tourStyle === 'group').length,
  };

  const tourStyles = [
    {
      id: 'all' as TourStyle,
      name: 'All Safaris',
      description: 'Explore all our Tarangire adventures',
      emoji: '🐘',
      count: tourStyleCounts.all,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-200'
    },
    {
      id: 'multi-day' as TourStyle,
      name: 'Multi-Day Safaris',
      description: '3-6 day comprehensive wildlife experiences',
      emoji: '⛺',
      count: tourStyleCounts['multi-day'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    },
    {
      id: 'short-trip' as TourStyle,
      name: 'Short Trips',
      description: '1-3 day quick adventures',
      emoji: '⚡',
      count: tourStyleCounts['short-trip'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200'
    },
    {
      id: 'family' as TourStyle,
      name: 'Family Adventures',
      description: 'Kid-friendly safari experiences',
      emoji: '👨‍👩‍👧‍👦',
      count: tourStyleCounts.family,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      id: 'group' as TourStyle,
      name: 'Group Safaris',
      description: 'Great value for groups & friends',
      emoji: '👥',
      count: tourStyleCounts.group,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    }
  ];

  // UPDATED: Filtered ToursGrid component
  const FilteredTarangireToursGrid = () => {
    if (filteredTours.length === 0) {
      const activeStyle = tourStyles.find(s => s.id === activeTourStyle);
      return (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">
            No {activeStyle?.name.toLowerCase()} found
          </h3>
          <p className="text-gray-500 mb-6">
            Try selecting a different safari style or check back later for new packages
          </p>
          <Button 
            onClick={() => setActiveTourStyle('all')}
            variant="primary" 
            className="bg-yellow-600 hover:bg-yellow-700"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      {/* Tarangire Hero Section with Rotating Images */}
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
                className="inline-flex items-center text-yellow-100 hover:text-white transition-colors duration-200 group"
              >
                <span className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Safari Destinations
              </Link>
              <div className="text-yellow-100 text-lg font-semibold">
                {tarangireTours.length} Tarangire Safari Packages
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Tarangire National Park
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-4xl mx-auto leading-relaxed">
                The Land of Giants and Ancient Baobabs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tarangire History & Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Where Giants Roam: Tarangire National Park
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  {/* Enhanced Historical Content */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                    <h3 className="font-bold text-amber-800 text-xl mb-3">🏞️ Park History & Significance</h3>
                    <p className="text-amber-700 mb-4">
                      <strong>Established in 1970</strong>, Tarangire National Park spans 2,850 square kilometers of Tanzania's spectacular northern safari circuit. 
                      Named after the life-giving Tarangire River that flows through its heart, this park transforms dramatically with the seasons.
                    </p>
                    <p className="text-amber-700">
                      During the dry season (June-October), it becomes one of Africa's greatest wildlife destinations, hosting the 
                      <strong> largest concentration of elephants on the continent</strong>—herds often numbering 300+ strong gather along the riverbanks.
                    </p>
                  </div>

                  <p className="text-xl leading-relaxed mb-6 font-semibold text-gray-700">
                    Tanzania's Hidden Gem for Elephant Encounters
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    Discover a landscape dominated by <strong>ancient baobab trees</strong>, some over 1,000 years old, standing like sentries across golden grasslands. 
                    The park's iconic landscape creates a unique, almost mystical atmosphere that sets it apart from other safari destinations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                      <h4 className="font-bold text-yellow-800 mb-3 text-lg">🐘 Elephant Super Herds</h4>
                      <p className="text-yellow-700">
                        3,000+ elephants during dry season migration, creating Africa's most spectacular elephant viewing opportunities.
                      </p>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                      <h4 className="font-bold text-green-800 mb-3 text-lg">🌳 Ancient Baobabs</h4>
                      <p className="text-green-700">
                        1,000+ year old baobab trees creating unique landscapes and photographic opportunities.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">🦜 Biodiversity Haven</h3>
                  <p className="mb-6 leading-relaxed">
                    Beyond elephants, Tarangire shelters <strong>over 550 bird species</strong>, making it a paradise for birdwatchers. 
                    The park is also home to tree-climbing pythons and rare animals like the fringe-eared oryx and gerenuk. 
                    The Tarangire River serves as the park's lifeline, attracting massive wildlife migrations during dry months 
                    when animals travel from as far as the Maasai Steppe.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <h3 className="font-bold text-blue-800 text-lg mb-3">🌊 Seasonal Transformations</h3>
                    <p className="text-blue-700">
                      The park's wildlife dynamics change dramatically with the seasons. During the dry months, animals 
                      concentrate around the Tarangire River, creating incredible game viewing opportunities. In the wet 
                      season, the park transforms into a lush green paradise with newborn animals and migratory birds, 
                      offering a completely different but equally spectacular safari experience.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">🎯 Unique Safari Experience</h3>
                  <p className="mb-6 leading-relaxed">
                    This hidden gem offers an <strong>intimate, less-crowded safari experience</strong> compared to its famous neighbors, 
                    yet delivers spectacular wildlife encounters that rival any park in Africa. The combination of massive elephant herds, 
                    ancient baobab landscapes, and exceptional birdlife creates a safari experience that is both unique and unforgettable.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-xl mb-8">
                    <h3 className="font-bold text-purple-800 text-xl mb-4">📊 Tarangire Wildlife Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">3,000+</div>
                        <div className="text-sm text-purple-500">Elephants</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">550+</div>
                        <div className="text-sm text-purple-500">Bird Species</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">2,850</div>
                        <div className="text-sm text-purple-500">Sq Km Park Size</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">1970</div>
                        <div className="text-sm text-purple-500">Established</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Facts Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-yellow-50 rounded-2xl p-8 sticky top-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-6">Tarangire at a Glance</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-yellow-700 mb-2">📍 Location</h4>
                      <p className="text-yellow-600">Northern Tanzania Safari Circuit</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-yellow-700 mb-2">📏 Park Size</h4>
                      <p className="text-yellow-600">2,850 sq km (1,100 sq mi)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-yellow-700 mb-2">🕒 Best Time to Visit</h4>
                      <p className="text-yellow-600">June - October (Dry season)</p>
                      <p className="text-yellow-500 text-sm mt-1">January-February for green landscapes</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-yellow-700 mb-2">🐘 Key Wildlife</h4>
                      <p className="text-yellow-600">Elephants, Baobabs, 550+ Bird Species</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-yellow-700 mb-2">🎯 Unique Features</h4>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Largest elephant herds in Africa</li>
                        <li>• Ancient baobab forests</li>
                        <li>• Seasonal wildlife migrations</li>
                        <li>• Intimate safari experience</li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-yellow-200">
                      <h4 className="font-semibold text-yellow-700 mb-3">📞 Need Help Choosing?</h4>
                      <p className="text-yellow-600 text-sm mb-4">
                        Our safari experts can help you select the perfect Tarangire experience based on your interests and travel dates.
                      </p>
                      <Button 
                        variant="primary" 
                        className="w-full bg-yellow-600 hover:bg-yellow-700 shadow-lg"
                      >
                        🐘 Contact Our Experts
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
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Choose Your Safari Style
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select from our carefully curated Tarangire experiences tailored to different travel preferences
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

      {/* UPDATED: Tarangire Safari Packages Section with Filtered Display */}
      <section className="py-20 bg-white" id="tarangire-packages">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Active Category Header - NEW ADDITION */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {tourStyles.find(s => s.id === activeTourStyle)?.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {filteredTours.length} amazing {filteredTours.length === 1 ? 'safari' : 'safaris'} in this category
              </p>
            </div>

            {/* UPDATED: Tours Grid with Filtered Display */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <FilteredTarangireToursGrid />
            </div>

            {/* Style Navigation - NEW ADDITION */}
            <div className="text-center mt-12">
              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  Not sure which style is right for you?
                </h3>
                <p className="text-yellow-700 mb-6 max-w-2xl mx-auto">
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

      {/* Why Tarangire with Majestic Trails */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Majestic Trails for Your Tarangire Safari?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the hidden treasures of Tarangire with our expert guides.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🐘</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Elephant Specialists</h3>
                <p className="text-gray-600">
                  Our guides know the best locations and times for incredible elephant encounters and photography.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Baobab Knowledge</h3>
                <p className="text-gray-600">
                  Learn about the ancient baobab trees and their ecological importance from our knowledgeable guides.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🐦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Birdwatching Excellence</h3>
                <p className="text-gray-600">
                  Perfect for bird enthusiasts with 550+ species, including many rare and endemic birds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Meet the Elephant Herds?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Tarangire adventure and experience Tanzania's elephant paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('tarangire-packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🐘 Explore Tarangire Packages
              </Button>
              <Link href="/safari">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
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