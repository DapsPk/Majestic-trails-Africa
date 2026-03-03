'use client';

import { useState } from 'react';
import { BookingModalProps, BookingFormData } from '../types/booking.types';
import { useBooking } from '../hooks/useBooking';
import BookingForm from './BookingForm';
import PaymentSection from './PaymentSection';
import BookingConfirmation from './BookingConfirmation';
import { formatPrice } from '@/lib/utils';

export default function BookingModal({ isOpen, onClose, tour }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState<'form' | 'payment' | 'confirmation'>('form');
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  
  const { createBooking, isProcessing, calculateTotal, bookingConfirmation } = useBooking();

  if (!isOpen || !tour) return null;

  const handleFormSubmit = async (data: BookingFormData) => {
    setFormData(data);
    setCurrentStep('payment');
  };

  const handlePayment = async () => {
    if (!formData || !tour) return;
    
    const success = await createBooking(formData, tour);
    if (success) {
      setCurrentStep('confirmation');
    }
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  const handleCompleteBooking = () => {
    onClose();
    setCurrentStep('form');
    setFormData(null);
  };

  const totalAmount = formData ? calculateTotal(tour, formData.participants) : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentStep === 'form' && 'Book Your Adventure'}
            {currentStep === 'payment' && 'Complete Payment'}
            {currentStep === 'confirmation' && 'Booking Confirmed!'}
          </h2>
          {currentStep !== 'confirmation' && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          )}
        </div>

        {/* Progress Steps */}
        {currentStep !== 'confirmation' && (
          <div className="flex justify-center py-4 border-b bg-gray-50">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep === 'form' ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'
              }`}>
                1
              </div>
              <div className={`mx-2 ${currentStep === 'form' ? 'text-blue-600 font-semibold' : 'text-green-500'}`}>
                Booking Details
              </div>
              <div className="w-12 h-1 bg-gray-300 mx-2"></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <div className={`mx-2 ${currentStep === 'payment' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Payment
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {currentStep === 'form' ? (
            <BookingForm
              tour={tour}
              onSubmit={handleFormSubmit}
              onCancel={onClose}
              isProcessing={isProcessing}
              calculateTotal={calculateTotal}
            />
          ) : currentStep === 'payment' ? (
            <PaymentSection
              onProcessPayment={handlePayment}
              onBack={handleBackToForm}
              isProcessing={isProcessing}
              totalAmount={totalAmount}
            />
          ) : (
            <BookingConfirmation
              booking={bookingConfirmation!}
              onComplete={handleCompleteBooking}
            />
          )}
        </div>
      </div>
    </div>
  );
}