'use client';

import { useState } from 'react';
import { Tour } from '../types/tour.types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { formatPrice } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
  onBookNow: (tour: Tour) => void;
}

export default function TourCard({ tour, onBookNow }: TourCardProps) {
  const [showItinerary, setShowItinerary] = useState(false);

  // Keep this for the content section below the image
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-transparent border border-green-500/50 text-green-500';
      case 'Moderate': return 'bg-transparent border border-yellow-500/50 text-yellow-500';
      case 'Difficult': return 'bg-transparent border border-red-500/50 text-red-500';
      default: return 'bg-transparent border border-gray-500/50 text-gray-500';
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'safari': return 'from-green-500 to-emerald-600';
      case 'kilimanjaro': return 'from-orange-500 to-red-600';
      case 'zanzibar': return 'from-blue-500 to-cyan-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  // Success rate progress bar (kept for content section)
  const SuccessRateBar = ({ successRate }: { successRate?: number }) => {
    if (!successRate || tour.section !== 'kilimanjaro') return null;
    
    const getSuccessColor = (rate: number) => {
      if (rate >= 90) return 'bg-green-500';
      if (rate >= 80) return 'bg-yellow-500';
      if (rate >= 70) return 'bg-orange-500';
      return 'bg-red-500';
    };

    return (
      <div className="mt-2">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <span>Success Rate</span>
          <span>{successRate}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${getSuccessColor(successRate)} transition-all duration-500`}
            style={{ width: `${successRate}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // SAFARI CARD LAYOUT - Full bleed image with overlays
  if (tour.section === 'safari') {
    return (
      <>
        <Card className="hover:shadow-2xl transition-all duration-300 h-full flex flex-col group dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden min-h-[500px]">
          {/* Full card background image - STATIC (no fade) */}
          <div className="absolute inset-0">
            <OptimizedImage
              src={tour.images?.main || tour.image || `/images/tours/${tour.section}/placeholder.jpg`}
              alt={tour.images?.alt || tour.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              priority={false}
              className=""
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 p-5 text-white h-full flex flex-col justify-between min-h-[500px]">
            {/* Top Section - EMPTY (location badge REMOVED) */}
            <div></div>

            {/* Main Content - Centered vertically */}
            <div className="flex-grow flex flex-col justify-center">
              {/* Title and Price - REDUCED spacing */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">{tour.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">{formatPrice(tour.price)}</div>
                  <span className="text-white text-opacity-80 text-xs">per person</span>
                </div>
              </div>

              {/* Description - TRUNCATED to 1 line */}
              <p className="text-white text-opacity-90 mb-3 text-base leading-relaxed max-w-2xl drop-shadow-md line-clamp-1">
                {tour.description}
              </p>

              {/* Safari-specific info - ANIMAL EMOJIS REMOVED */}
              {tour.subCategory && (
                <div className="mb-3">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-xs font-medium">
                    {tour.subCategory === 'serengeti' && 'Serengeti'}
                    {tour.subCategory === 'ngorongoro' && 'Ngorongoro'}
                    {tour.subCategory === 'tarangire' && 'Tarangire'}
                  </span>
                </div>
              )}

              {/* Highlights - REDUCED to 3 chips max */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating - REDUCED size */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2 text-base">
                  {'★'.repeat(Math.floor(tour.rating))}
                  {'☆'.repeat(5 - Math.floor(tour.rating))}
                </div>
                <span className="text-white text-opacity-90 text-xs">
                  {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Action Buttons - REDUCED size */}
            <div className="flex gap-2 mt-auto">
              <Button 
                onClick={() => setShowItinerary(true)}
                variant="outline"
                className="flex-1 text-xs py-2 border-2 border-white text-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm font-semibold"
              >
                📋 Itinerary
              </Button>
              <Button 
                onClick={() => onBookNow(tour)}
                className="flex-1 text-xs py-2 border-2 border-white text-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm font-semibold"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Hover Overlay - subtle shine effect */}
          <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none"></div>
        </Card>

        {/* Itinerary Modal - Same for all tour types */}
        {showItinerary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{tour.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{tour.duration} • {tour.location}</p>
                  </div>
                  <button
                    onClick={() => setShowItinerary(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Itinerary Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Daily Itinerary */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <span className="text-blue-500 mr-3">🗓️</span>
                      Daily Itinerary
                    </h3>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <div key={day.day} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border-l-4 border-blue-500">
                          <div className="flex items-start mb-3">
                            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                              {day.day}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 dark:text-white text-lg">{day.title}</h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{day.description}</p>
                            </div>
                          </div>
                          
                          <div className="ml-14 space-y-3">
                            <div>
                              <span className="font-semibold text-gray-700 dark:text-gray-300">Activities:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {day.activities.map((activity, index) => (
                                  <span key={index} className="bg-white dark:bg-gray-600 px-2 py-1 rounded text-sm text-gray-600 dark:text-gray-300 border dark:border-gray-500">
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-between text-sm">
                              <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Meals:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">{day.meals.join(', ')}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Stay:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">{day.accommodation}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions & Exclusions */}
                  <div className="space-y-8">
                    {/* Inclusions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <span className="text-green-500 mr-3">✅</span>
                        What's Included
                      </h3>
                      <ul className="space-y-2">
                        {tour.inclusions.map((inclusion, index) => (
                          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="text-green-500 mr-3 text-lg">✓</span>
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <span className="text-red-500 mr-3">❌</span>
                        What's Not Included
                      </h3>
                      <ul className="space-y-2">
                        {tour.exclusions.map((exclusion, index) => (
                          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="text-red-500 mr-3 text-lg">✗</span>
                            {exclusion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Facts */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Duration:</span>
                          <p className="text-gray-600 dark:text-gray-400">{tour.duration}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Difficulty:</span>
                          <p className="text-gray-600 dark:text-gray-400">{tour.difficulty}</p>
                        </div>
                        {tour.groupSize && (
                          <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Group Size:</span>
                            <p className="text-gray-600 dark:text-gray-400 capitalize">
                              {tour.groupSize.replace('-', ' ')}
                            </p>
                          </div>
                        )}
                        {tour.fitnessLevel && (
                          <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Fitness Level:</span>
                            <p className="text-gray-600 dark:text-gray-400 capitalize">{tour.fitnessLevel}</p>
                          </div>
                        )}
                        {tour.acclimatizationDays && (
                          <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Acclimatization:</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              {tour.acclimatizationDays} day{tour.acclimatizationDays === 1 ? '' : 's'}
                            </p>
                          </div>
                        )}
                        {tour.successRate && (
                          <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Success Rate:</span>
                            <p className="text-gray-600 dark:text-gray-400">{tour.successRate}%</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t dark:border-gray-700">
                  <Button 
                    onClick={() => setShowItinerary(false)}
                    variant="outline"
                    className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Close Itinerary
                  </Button>
                  <Button 
                    onClick={() => {
                      setShowItinerary(false);
                      onBookNow(tour);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800"
                  >
                    Book This Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // ORIGINAL LAYOUT for Kilimanjaro and Zanzibar tours (unchanged)
  return (
    <>
      <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group dark:bg-gray-800 dark:border-gray-700">
        {/* Tour Image - CLEAN VERSION WITH ONLY LOCATION BADGE */}
        <div className="h-48 relative overflow-hidden">
          {/* Optimized Image */}
          <OptimizedImage
            src={tour.images?.main || tour.image || `/images/tours/${tour.section}/placeholder.jpg`}
            alt={tour.images?.alt || tour.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            priority={false}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient for text readability (kept for location badge) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* ONLY Location Badge - Bottom Left (transparent as requested) */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-sm bg-transparent border border-white/50 text-white px-3 py-2 rounded-lg font-medium backdrop-blur-sm">
              {tour.location}
            </span>
          </div>
          
          {/* Hover Overlay (kept for user interaction) */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <div className="text-2xl mb-2">🔍</div>
              <p className="font-semibold">View Details</p>
            </div>
          </div>
        </div>

        {/* Tour Content - All information below the image (kept as is) */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{tour.title}</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatPrice(tour.price)}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">per person</div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">{tour.description}</p>

          {/* Kilimanjaro-specific info section */}
          {tour.section === 'kilimanjaro' && (
            <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {tour.kilimanjaroCategory && (
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">🏔️</span>
                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                      {tour.kilimanjaroCategory.replace('-', ' ')}
                    </span>
                  </div>
                )}
                {tour.routeType && (
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">🗺️</span>
                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                      {tour.routeType.replace('-', ' ')} Route
                    </span>
                  </div>
                )}
                {tour.acclimatizationDays && (
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">⏱️</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {tour.acclimatizationDays} acclimatization day{tour.acclimatizationDays === 1 ? '' : 's'}
                    </span>
                  </div>
                )}
                {tour.fitnessLevel && (
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">💪</span>
                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                      {tour.fitnessLevel} fitness
                    </span>
                  </div>
                )}
              </div>
              
              {/* Success Rate Progress Bar */}
              <SuccessRateBar successRate={tour.successRate} />
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(tour.rating))}
              {'☆'.repeat(5 - Math.floor(tour.rating))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {tour.rating} ({tour.reviewCount} reviews)
            </span>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <span className="text-blue-500 mr-2">✨</span>
              Tour Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {tour.highlights.slice(0, 3).map((highlight, index) => (
                <span 
                  key={index}
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1.5 rounded-full font-medium"
                >
                  {highlight}
                </span>
              ))}
              {tour.highlights.length > 3 && (
                <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-full font-medium">
                  +{tour.highlights.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button 
              onClick={() => setShowItinerary(true)}
              variant="outline"
              className="flex-1 text-sm py-2.5 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              📋 Itinerary
            </Button>
            <Button 
              onClick={() => onBookNow(tour)}
              className="flex-1 text-sm py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800"
            >
              Book Now
            </Button>
          </div>
        </div>
      </Card>

      {/* Itinerary Modal - Kept as is */}
      {showItinerary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{tour.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{tour.duration} • {tour.location}</p>
                </div>
                <button
                  onClick={() => setShowItinerary(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Itinerary Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Daily Itinerary */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-blue-500 mr-3">🗓️</span>
                    Daily Itinerary
                  </h3>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <div key={day.day} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border-l-4 border-blue-500">
                        <div className="flex items-start mb-3">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                            {day.day}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 dark:text-white text-lg">{day.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{day.description}</p>
                          </div>
                        </div>
                        
                        <div className="ml-14 space-y-3">
                          <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Activities:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {day.activities.map((activity, index) => (
                                <span key={index} className="bg-white dark:bg-gray-600 px-2 py-1 rounded text-sm text-gray-600 dark:text-gray-300 border dark:border-gray-500">
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <div>
                              <span className="font-semibold text-gray-700 dark:text-gray-300">Meals:</span>
                              <span className="text-gray-600 dark:text-gray-400 ml-2">{day.meals.join(', ')}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700 dark:text-gray-300">Stay:</span>
                              <span className="text-gray-600 dark:text-gray-400 ml-2">{day.accommodation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="space-y-8">
                  {/* Inclusions */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-green-500 mr-3">✅</span>
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 mr-3 text-lg">✓</span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-red-500 mr-3">❌</span>
                      What's Not Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.exclusions.map((exclusion, index) => (
                        <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-red-500 mr-3 text-lg">✗</span>
                          {exclusion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Duration:</span>
                        <p className="text-gray-600 dark:text-gray-400">{tour.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Difficulty:</span>
                        <p className="text-gray-600 dark:text-gray-400">{tour.difficulty}</p>
                      </div>
                      {tour.groupSize && (
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Group Size:</span>
                          <p className="text-gray-600 dark:text-gray-400 capitalize">
                            {tour.groupSize.replace('-', ' ')}
                          </p>
                        </div>
                      )}
                      {tour.fitnessLevel && (
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Fitness Level:</span>
                          <p className="text-gray-600 dark:text-gray-400 capitalize">{tour.fitnessLevel}</p>
                        </div>
                      )}
                      {tour.acclimatizationDays && (
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Acclimatization:</span>
                          <p className="text-gray-600 dark:text-gray-400">
                            {tour.acclimatizationDays} day{tour.acclimatizationDays === 1 ? '' : 's'}
                          </p>
                        </div>
                      )}
                      {tour.successRate && (
                        <div>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">Success Rate:</span>
                          <p className="text-gray-600 dark:text-gray-400">{tour.successRate}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t dark:border-gray-700">
                <Button 
                  onClick={() => setShowItinerary(false)}
                  variant="outline"
                  className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Close Itinerary
                </Button>
                <Button 
                  onClick={() => {
                    setShowItinerary(false);
                    onBookNow(tour);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800"
                >
                  Book This Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}