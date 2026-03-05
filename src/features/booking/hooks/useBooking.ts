'use client';

import { useState } from 'react';
import { BookingFormData, BookingConfirmationData } from '../types/booking.types';
import { Tour } from '@/features/tours/types/tour.types';

export function useBooking() {
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  // FIXED: Changed type from custom BookingConfirmation to imported BookingConfirmationData
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingConfirmationData | null>(null);

  const generateBookingId = (): string => {
    return `MT${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  };

  const createBooking = async (formData: BookingFormData, tour: Tour): Promise<boolean> => {
    setIsProcessing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const bookingId = generateBookingId();
      
      // FIXED: Create confirmation that matches BookingConfirmationData interface
      const confirmation: BookingConfirmationData = {
        id: bookingId,
        bookingId: bookingId,
        bookingReference: bookingId,
        tourId: tour.id,
        tourName: tour.title,
        // FIXED: Added full tour object with all needed properties
        tour: {
          id: tour.id,
          title: tour.title,
          duration: tour.duration,
          price: tour.price,
          image: tour.images?.main || tour.image || '/images/placeholder.jpg',
          section: tour.section,
          category: tour.category
        },
        // FIXED: Added customer fields at root level
        customerName: formData.customerInfo.name,
        customerEmail: formData.customerInfo.email,
        customerPhone: formData.customerInfo.phone,
        // FIXED: Added formData object with customerInfo
        formData: {
          participants: formData.participants,
          customerInfo: {
            name: formData.customerInfo.name,
            email: formData.customerInfo.email,
            phone: formData.customerInfo.phone,
            country: formData.customerInfo.country,
            specialRequirements: formData.customerInfo.specialRequirements
          }
        },
        // FIXED: Added all date fields
        bookingDate: new Date().toISOString(),
        travelDate: formData.date,
        // FIXED: Added departureDate if needed (optional)
        departureDate: formData.date, // Using same date as travelDate
        // FIXED: Added guest count fields
        numberOfGuests: formData.participants,
        // FIXED: Added price fields (support both totalAmount and totalPrice)
        totalAmount: calculateTotal(tour, formData.participants),
        totalPrice: calculateTotal(tour, formData.participants),
        // FIXED: Added status fields
        status: 'confirmed',
        paymentStatus: 'paid',
        // FIXED: Added special requests
        specialRequests: formData.customerInfo.specialRequirements,
        // FIXED: Added timestamps
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