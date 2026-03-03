
'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import { BookingFormData, SerengetiBookingRequirements } from '../types/booking.types';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';

interface BookingFormProps {
  tour: Tour;
  onSubmit: (data: BookingFormData) => void;
  onCancel: () => void;
  isProcessing: boolean;
  calculateTotal: (tour: Tour | null, participants: number) => number;
  serengetiRequirements?: SerengetiBookingRequirements | null;
}

export default function BookingForm({ 
  tour, 
  onSubmit, 
  onCancel, 
  isProcessing, 
  calculateTotal,
  serengetiRequirements 
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    tourId: tour.id,
    date: '',
    participants: 2,
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      country: '',
      specialRequirements: ''
    }
  });

  const [participantCount, setParticipantCount] = useState(2);
  const [showSerengetiOptions, setShowSerengetiOptions] = useState(false);
  const [selectedViewingAreas, setSelectedViewingAreas] = useState<string[]>([]);
  const [photographyLevel, setPhotographyLevel] = useState<string>('enthusiast');

  const isSerengetiPackage = tour.title.toLowerCase().includes('serengeti');

  useEffect(() => {
    if (isSerengetiPackage && serengetiRequirements) {
      setShowSerengetiOptions(true);
      setSelectedViewingAreas(serengetiRequirements.preferredViewingAreas || []);
      setPhotographyLevel(serengetiRequirements.photographyLevel || 'enthusiast');
    }
  }, [isSerengetiPackage, serengetiRequirements]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        [field]: value
      }
    }));
  };

  const handleParticipantChange = (count: number) => {
    setParticipantCount(count);
    setFormData(prev => ({
      ...prev,
      participants: count
    }));
  };

  const handleDateChange = (date: string) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSpecialRequirementsChange = (requirements: string) => {
    setFormData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        specialRequirements: requirements
      }
    }));
  };

  const handleViewingAreaToggle = (area: string) => {
    setSelectedViewingAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add Serengeti specific requirements to special requirements
    let finalRequirements = formData.customerInfo.specialRequirements || '';
    
    if (isSerengetiPackage && showSerengetiOptions) {
      const serengetiDetails = [
        'Serengeti Preferences:',
        `Preferred Viewing Areas: ${selectedViewingAreas.join(', ')}`,
        `Photography Level: ${photographyLevel}`,
        `Wildlife Interests: ${serengetiRequirements?.wildlifeInterests?.join(', ')}`
      ].join('\n');
      
      finalRequirements = finalRequirements 
        ? `${finalRequirements}\n\n${serengetiDetails}`
        : serengetiDetails;
    }

    const finalFormData: BookingFormData = {
      ...formData,
      customerInfo: {
        ...formData.customerInfo,
        specialRequirements: finalRequirements
      }
    };

    onSubmit(finalFormData);
  };

  const totalAmount = calculateTotal(tour, participantCount);
  const basePrice = tour.price * participantCount;
  const discount = basePrice - totalAmount;

  // Get recommended dates for Serengeti
  const getRecommendedDates = () => {
    if (!isSerengetiPackage) return [];
    
    const currentYear = new Date().getFullYear();
    return [
      `${currentYear}-06-15`,
      `${currentYear}-07-01`,
      `${currentYear}-08-15`,
      `${currentYear}-09-01`,
      `${currentYear}-10-01`
    ];
  };

  const recommendedDates = getRecommendedDates();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tour Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-gray-800 mb-2">{tour.title}</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Duration:</span>
            <p className="font-medium">{tour.duration}</p>
          </div>
          <div>
            <span className="text-gray-600">Location:</span>
            <p className="font-medium">{tour.location}</p>
          </div>
          <div>
            <span className="text-gray-600">Difficulty:</span>
            <p className="font-medium">{tour.difficulty}</p>
          </div>
          <div>
            <span className="text-gray-600">Rating:</span>
            <p className="font-medium">⭐ {tour.rating} ({tour.reviewCount} reviews)</p>
          </div>
        </div>
        {isSerengetiPackage && (
          <div className="mt-2 p-2 bg-green-100 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm">
              🦁 <strong>Serengeti 2025:</strong> Includes 4x4 game drives, park fees, full-board meals, expert guides
            </p>
          </div>
        )}
      </div>

      {/* Date Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          🗓️ Preferred Tour Date
        </label>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => handleDateChange(e.target.value)}
          required
          min={new Date().toISOString().split('T')[0]}
          className="w-full"
        />
        
        {/* Recommended dates for Serengeti */}
        {isSerengetiPackage && recommendedDates.length > 0 && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-2">🎯 Recommended migration viewing dates:</p>
            <div className="flex flex-wrap gap-2">
              {recommendedDates.map(date => (
                <button
                  key={date}
                  type="button"
                  onClick={() => handleDateChange(date)}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                >
                  {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Participant Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          👥 Number of Participants
        </label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => handleParticipantChange(Math.max(1, participantCount - 1))}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="text-lg font-semibold w-8 text-center">{participantCount}</span>
          <button
            type="button"
            onClick={() => handleParticipantChange(Math.min(12, participantCount + 1))}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            +
          </button>
          <span className="text-sm text-gray-600 ml-4">
            (Max 12 participants per booking)
          </span>
        </div>
        
        {/* Group discount notice */}
        {isSerengetiPackage && participantCount >= 4 && (
          <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm">
              🎉 Group discount applied! {participantCount >= 6 ? '15%' : '10%'} off for {participantCount} participants
            </p>
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
        
        <Input
          label="Full Name *"
          type="text"
          value={formData.customerInfo.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          placeholder="Enter your full name"
        />
        
        <Input
          label="Email Address *"
          type="email"
          value={formData.customerInfo.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          placeholder="your.email@example.com"
        />
        
        <Input
          label="Phone Number *"
          type="tel"
          value={formData.customerInfo.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required
          placeholder="+1 (555) 123-4567"
        />
        
        <Input
          label="Country *"
          type="text"
          value={formData.customerInfo.country}
          onChange={(e) => handleInputChange('country', e.target.value)}
          required
          placeholder="Your country of residence"
        />
      </div>

      {/* Serengeti Specific Options */}
      {isSerengetiPackage && showSerengetiOptions && (
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            🦁 Serengeti Preferences
          </h3>
          
          {/* Preferred Viewing Areas */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Wildlife Viewing Areas
            </label>
            <div className="grid grid-cols-2 gap-2">
              {serengetiRequirements?.preferredViewingAreas?.map(area => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedViewingAreas.includes(area)}
                    onChange={() => handleViewingAreaToggle(area)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Photography Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photography Experience Level
            </label>
            <select
              value={photographyLevel}
              onChange={(e) => setPhotographyLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="beginner">Beginner</option>
              <option value="enthusiast">Enthusiast</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>
      )}

      {/* Special Requirements */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          💬 Special Requirements or Notes
        </label>
        <textarea
          value={formData.customerInfo.specialRequirements || ''}
          onChange={(e) => handleSpecialRequirementsChange(e.target.value)}
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Any dietary restrictions, mobility considerations, or special requests..."
        />
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Price Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>{tour.price} × {participantCount} participants</span>
            <span>{formatPrice(basePrice)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Group discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="border-t pt-2 flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span className="text-blue-600">{formatPrice(totalAmount)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isProcessing}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </span>
          ) : (
            `Continue to Payment ${isSerengetiPackage ? '🦁' : '→'}`
          )}
        </Button>
      </div>
    </form>
  );
}
