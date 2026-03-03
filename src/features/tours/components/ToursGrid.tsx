'use client';

import { useTours } from '../hooks/useTours';
import TourCard from './TourCard';
import { Tour } from '../types/tour.types';

interface ToursGridProps {
  onBookNow: (tour: Tour) => void;
  activeSection?: string | null;
  packageType?: 'climbing' | 'day-trip' | null;
  tours?: Tour[]; // NEW: Add optional tours prop
}

export default function ToursGrid({ onBookNow, activeSection, packageType, tours }: ToursGridProps) {
  // NEW: Use passed tours prop if provided, otherwise use hook
  const hookTours = useTours({ activeSection, packageType });
  const displayTours = tours || hookTours.tours;

  if (displayTours.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌅</div>
        <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          {activeSection ? `No ${getSectionDisplayName(activeSection)} tours found` : 'No tours found'}
        </h3>
        <p className="text-gray-500 dark:text-gray-500 text-lg">
          {activeSection 
            ? `Try adjusting your filters to see more ${getSectionDisplayName(activeSection)} adventures.`
            : 'Try adjusting your filters to discover amazing adventures.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {displayTours.map(tour => (
        <TourCard 
          key={tour.id} 
          tour={tour} 
          onBookNow={onBookNow}
        />
      ))}
    </div>
  );
}

// Helper function to get display names for sections
function getSectionDisplayName(section: string): string {
  const displayNames: { [key: string]: string } = {
    'safari': 'Safari',
    'kilimanjaro': 'Kilimanjaro',
    'zanzibar': 'Zanzibar'
  };
  return displayNames[section] || section;
}