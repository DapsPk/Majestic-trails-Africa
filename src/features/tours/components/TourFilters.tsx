'use client';

import { useTourFilters } from '../hooks/useTourFilters';
import Button from '@/components/ui/Button';

export default function TourFilters() {
  const { 
    filters, 
    handleDifficultyChange, 
    handlePriceChange, 
    handleCategoryChange,
    clearFilters 
  } = useTourFilters();

  const difficulties = ['Easy', 'Moderate', 'Difficult'];
  const categories = ['safari', 'trekking', 'beach', 'cultural'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Filter Tours</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearFilters}
        >
          Clear All
        </Button>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Difficulty</h4>
        <div className="space-y-2">
          {difficulties.map(difficulty => (
            <label key={difficulty} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.difficulty.includes(difficulty)}
                onChange={() => handleDifficultyChange(difficulty)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{difficulty}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="3000"
            step="100"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="3000"
            step="100"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}