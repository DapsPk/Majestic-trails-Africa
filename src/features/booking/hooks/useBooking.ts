'use client';

import { useState } from 'react';
import { BookingFormData } from '../types/booking.types';
import { Tour } from '@/features/tours/types/tour.types';

interface BookingConfirmation {
  bookingId: string;
  tour: Tour;
  formData: BookingFormData;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
}

export function useBooking() {
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingConfirmation | null>(null);

  const generateBookingId = (): string => {
    return `MT${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  };

  const createBooking = async (formData: BookingFormData, tour: Tour): Promise<boolean> => {
    setIsProcessing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const confirmation: BookingConfirmation = {
        bookingId: generateBookingId(),
        tour,
        formData,
        totalAmount: calculateTotal(tour, formData.participants),
        status: 'confirmed',
        createdAt: new Date()
      };

      setBookingConfirmation(confirmation);
      setBookingData(formData);
      
      // Simulate sending confirmation email
      console.log('Booking created:', confirmation);
      console.log('Confirmation email sent to:', formData.customerInfo.email);
      
      return true;
    } catch (error) {
      console.error('Booking failed:', error);
      return false;
    } finally {
      setIsProcessing(false);
    }
  };

  const calculateTotal = (tour: Tour | null, participants: number): number => {
    if (!tour) return 0;
    return tour.price * participants;
  };

  const getBookingStatus = () => {
    return bookingConfirmation?.status || 'pending';
  };

  return {
    bookingData,
    bookingConfirmation,
    isProcessing,
    createBooking,
    calculateTotal,
    getBookingStatus
  };
}