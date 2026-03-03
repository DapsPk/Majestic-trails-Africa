'use client';

import { useState, useMemo } from 'react';
import { Tour, TourFilters } from '../types/tour.types';
import { toursData } from '../data/tours-data';

interface UseToursProps {
  activeSection?: string | null;
  packageType?: 'climbing' | 'day-trip' | null;
}

export function useTours({ activeSection, packageType }: UseToursProps = {}) {
  const [tours] = useState<Tour[]>(toursData);
  const [filters, setFilters] = useState<TourFilters>({
    difficulty: [],
    priceRange: [0, 3000],
    duration: [],
    category: []
  });

  const filteredTours = useMemo(() => {
    let filtered = tours;

    // Apply section filter first
    if (activeSection) {
      filtered = filtered.filter(tour => tour.section === activeSection);
    }

    // Apply package type filter
    if (packageType) {
      filtered = filtered.filter(tour => tour.packageType === packageType);
    }

    // Then apply other filters
    // Difficulty filter
    if (filters.difficulty.length > 0) {
      filtered = filtered.filter(tour => filters.difficulty.includes(tour.difficulty));
    }

    // Price range filter
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 3000) {
      filtered = filtered.filter(tour => 
        tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1]
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(tour => filters.category.includes(tour.category));
    }

    return filtered;
  }, [tours, filters, activeSection, packageType]);

  const updateFilters = (newFilters: Partial<TourFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      difficulty: [],
      priceRange: [0, 3000],
      duration: [],
      category: []
    });
  };

  // Get tours by section for navigation
  const getToursBySection = (section: string) => {
    return tours.filter(tour => tour.section === section);
  };

  // Get tours by package type
  const getToursByPackageType = (packageType: 'climbing' | 'day-trip') => {
    return tours.filter(tour => tour.packageType === packageType);
  };

  return {
    tours: filteredTours,
    allTours: tours,
    filters,
    updateFilters,
    clearFilters,
    getToursBySection,
    getToursByPackageType
  };
}