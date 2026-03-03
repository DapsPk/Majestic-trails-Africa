'use client';

import { useState } from 'react';
import { Tour } from '../types/tour.types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
  onBookNow: (tour: Tour) => void;
}

export default function TourCard({ tour, onBookNow }: TourCardProps) {
  const [showItinerary, setShowItinerary] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Difficult': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
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

  const getPackageTypeBadge = (packageType?: string) => {
    if (!packageType) return null;
    
    const badges = {
      'climbing': { text: '🏔️ Climbing', color: 'bg-orange-500 text-white' },
      'day-trip': { text: '🌅 Day Trip', color: 'bg-blue-500 text-white' },
      'safari-package': { text: '🦁 Safari', color: 'bg-green-500 text-white' }
    };
    
    const badge = badges[packageType as keyof typeof badges];
    if (!badge) return null;
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  const getActivityTypeBadge = (activityType?: string) => {
    if (!activityType) return null;
    
    const badges = {
      'pre-climb': { text: '🔥 Pre-Climb', color: 'bg-green-500 text-white' },
      'post-climb': { text: '💆‍♂️ Post-Climb', color: 'bg-purple-500 text-white' },
      'general': { text: '🌟 General', color: 'bg-gray-500 text-white' }
    };
    
    const badge = badges[activityType as keyof typeof badges];
    if (!badge) return null;
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  // NEW: Kilimanjaro-specific badge functions
  const getFitnessLevelBadge = (fitnessLevel?: string) => {
    if (!fitnessLevel || tour.section !== 'kilimanjaro') return null;
    
    const fitnessColors = {
      'beginner': 'bg-green-500 text-white',
      'intermediate': 'bg-yellow-500 text-white',
      'advanced': 'bg-orange-500 text-white',
      'expert': 'bg-red-500 text-white'
    };
    
    const color = fitnessColors[fitnessLevel as keyof typeof fitnessColors] || 'bg-gray-500 text-white';
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
        💪 {fitnessLevel.charAt(0).toUpperCase() + fitnessLevel.slice(1)}
      </span>
    );
  };

  const getGroupSizeBadge = (groupSize?: string) => {
    if (!groupSize || tour.section !== 'kilimanjaro') return null;
    
    const groupIcons = {
      'private': '👤',
      'small-group': '👥',
      'large-group': '👨‍👩‍👧‍👦'
    };
    
    const icon = groupIcons[groupSize as keyof typeof groupIcons] || '👥';
    
    return (
      <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
        {icon} {groupSize === 'private' ? 'Private' : groupSize.replace('-', ' ')}
      </span>
    );
  };

  const getAcclimatizationBadge = (acclimatizationDays?: number) => {
    if (!acclimatizationDays || tour.section !== 'kilimanjaro') return null;
    
    return (
      <span className="px-2 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
        🏔️ {acclimatizationDays} Acclimatization {acclimatizationDays === 1 ? 'Day' : 'Days'}
      </span>
    );
  };

  // NEW: Success rate progress bar
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

  return (
    <>
      <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group dark:bg-gray-800 dark:border-gray-700">
        {/* Tour Image with Section Badge */}
        <div className={`h-48 bg-gradient-to-br ${getSectionColor(tour.section)} relative overflow-hidden`}>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {/* Package Type Badge */}
            {getPackageTypeBadge(tour.packageType)}
            
            {/* Activity Type Badge */}
            {getActivityTypeBadge(tour.activityType)}
            
            {/* NEW: Kilimanjaro-specific badges */}
            {getFitnessLevelBadge(tour.fitnessLevel)}
            {getGroupSizeBadge(tour.groupSize)}
            {getAcclimatizationBadge(tour.acclimatizationDays)}
            
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tour.difficulty)}`}>
              {tour.difficulty}
            </span>
            <span className="px-3 py-1 bg-black bg-opacity-70 text-white rounded-full text-sm font-medium">
              {tour.duration}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm bg-black bg-opacity-50 px-3 py-2 rounded-lg font-medium">
              {tour.location}
            </span>
          </div>
          
          {/* Success Rate Badge for Climbing Routes */}
          {tour.successRate && tour.packageType === 'climbing' && (
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                {tour.successRate}% Success
              </span>
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <div className="text-2xl mb-2">✨</div>
              <p className="font-semibold">View Details</p>
            </div>
          </div>
        </div>

        {/* Tour Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{tour.title}</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatPrice(tour.price)}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">per person</div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">{tour.description}</p>

          {/* NEW: Kilimanjaro-specific info section */}
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

      {/* Itinerary Modal - Enhanced with Kilimanjaro info */}
      {showItinerary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{tour.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{tour.duration} • {tour.location}</p>
                  
                  {/* NEW: Enhanced Kilimanjaro badges in modal */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getPackageTypeBadge(tour.packageType)}
                    {getActivityTypeBadge(tour.activityType)}
                    {getFitnessLevelBadge(tour.fitnessLevel)}
                    {getGroupSizeBadge(tour.groupSize)}
                    {getAcclimatizationBadge(tour.acclimatizationDays)}
                    {tour.successRate && (
                      <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                        {tour.successRate}% Success Rate
                      </span>
                    )}
                    {tour.kilimanjaroCategory && (
                      <span className="px-2 py-1 bg-orange-500 text-white rounded-full text-xs font-medium capitalize">
                        🏔️ {tour.kilimanjaroCategory.replace('-', ' ')}
                      </span>
                    )}
                  </div>
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

                  {/* Enhanced Quick Facts with Kilimanjaro info */}
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