'use client';

import { useTours } from './useTours';
import { useEffect } from 'react';

export function useTourFilters() {
  const { filters, updateFilters } = useTours();

  // Clear filters when component unmounts or section changes
  useEffect(() => {
    return () => {
      // Optional: Clear filters when leaving the tours section
    };
  }, []);

  const handleDifficultyChange = (difficulty: string) => {
    const newDifficulties = filters.difficulty.includes(difficulty)
      ? filters.difficulty.filter(d => d !== difficulty)
      : [...filters.difficulty, difficulty];
    
    updateFilters({ difficulty: newDifficulties });
  };

  const handlePriceChange = (min: number, max: number) => {
    updateFilters({ priceRange: [min, max] });
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    
    updateFilters({ category: newCategories });
  };

  // ADDED: Clear all filters function (keeps original code intact)
  const clearFilters = () => {
    updateFilters({
      difficulty: [],
      priceRange: [0, 10000],
      category: []
    });
  };

  return {
    filters,
    handleDifficultyChange,
    handlePriceChange,
    handleCategoryChange,
    clearFilters // ADDED: Now this exists for TourFilters.tsx to use
  };
}