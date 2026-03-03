
'use client';

import { useState } from 'react';
import { Tour } from '@/features/tours/types/tour.types';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';

interface PaymentSectionProps {
  onProcessPayment: () => void;
  onBack: () => void;
  isProcessing: boolean;
  totalAmount: number;
  tour: Tour;
  participantCount: number;
}

export default function PaymentSection({ 
  onProcessPayment, 
  onBack, 
  isProcessing, 
  totalAmount,
  tour,
  participantCount 
}: PaymentSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'bank_transfer'>('credit_card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const isSerengetiPackage = tour.title.toLowerCase().includes('serengeti');

  const handleCardDetailChange = (field: string, value: string) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    onProcessPayment();
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches ? matches[0] : '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
    }
    return value;
  };

  return (
    <div className="space-y-6">
      {/* Booking Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-gray-800 mb-2">Booking Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Tour:</span>
            <p className="font-medium truncate">{tour.title}</p>
          </div>
          <div>
            <span className="text-gray-600">Participants:</span>
            <p className="font-medium">{participantCount} people</p>
          </div>
          <div>
            <span className="text-gray-600">Duration:</span>
            <p className="font-medium">{tour.duration}</p>
          </div>
          <div>
            <span className="text-gray-600">Total:</span>
            <p className="font-medium text-green-600">{formatPrice(totalAmount)}</p>
          </div>
        </div>
        {isSerengetiPackage && (
          <div className="mt-2 p-2 bg-green-100 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm">
              🦁 <strong>Serengeti 2025 Package:</strong> All inclusive - No hidden fees
            </p>
          </div>
        )}
      </div>

      {/* Payment Method Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setPaymentMethod('credit_card')}
            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
              paymentMethod === 'credit_card'
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                paymentMethod === 'credit_card' ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
              }`}></div>
              <div>
                <div className="font-semibold">Credit Card</div>
                <div className="text-sm text-gray-600">Visa, MasterCard, Amex</div>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPaymentMethod('bank_transfer')}
            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
              paymentMethod === 'bank_transfer'
                ? 'border-green-500 bg-green-50 shadow-md'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                paymentMethod === 'bank_transfer' ? 'border-green-500 bg-green-500' : 'border-gray-400'
              }`}></div>
              <div>
                <div className="font-semibold">Bank Transfer</div>
                <div className="text-sm text-gray-600">Wire transfer</div>
              </div>
            </div>
          </button>
        </div>

        {/* Credit Card Form */}
        {paymentMethod === 'credit_card' && (
          <div className="space-y-4 animate-fade-in">
            <Input
              label="Card Number"
              type="text"
              value={cardDetails.cardNumber}
              onChange={(e) => handleCardDetailChange('cardNumber', formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                type="text"
                value={cardDetails.expiryDate}
                onChange={(e) => handleCardDetailChange('expiryDate', formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                required
              />
              <Input
                label="CVV"
                type="text"
                value={cardDetails.cvv}
                onChange={(e) => handleCardDetailChange('cvv', e.target.value.replace(/\D/g, ''))}
                placeholder="123"
                maxLength={4}
                required
              />
            </div>

            <Input
              label="Name on Card"
              type="text"
              value={cardDetails.nameOnCard}
              onChange={(e) => handleCardDetailChange('nameOnCard', e.target.value)}
              placeholder="John Doe"
              required
            />

            {/* Security Badge */}
            <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg border border-gray-300">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="text-green-500">🔒</span>
                <span>Secure SSL encrypted payment</span>
              </div>
            </div>
          </div>
        )}

        {/* Bank Transfer Instructions */}
        {paymentMethod === 'bank_transfer' && (
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 animate-fade-in">
            <h4 className="font-semibold text-yellow-800 mb-2">Bank Transfer Instructions</h4>
            <div className="space-y-2 text-sm text-yellow-700">
              <p>• Account Name: Majestic Trails Tanzania Ltd</p>
              <p>• Bank: CRDB Bank Tanzania</p>
              <p>• Account Number: 01J1045373100</p>
              <p>• SWIFT Code: CORUTZTZ</p>
              <p>• Amount: {formatPrice(totalAmount)}</p>
              <p className="mt-2 font-semibold">
                Please include your name and booking reference in the transfer description.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            required
          />
          <div className="text-sm text-gray-700">
            I agree to the{' '}
            <a href="/terms" className="text-blue-600 hover:underline" target="_blank">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-600 hover:underline" target="_blank">
              Privacy Policy
            </a>
            . I understand that {isSerengetiPackage ? 'Serengeti safari bookings' : 'this booking'} 
            are subject to availability and cancellation policies.
          </div>
        </label>
        
        {isSerengetiPackage && (
          <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm">
              🦁 <strong>Serengeti Cancellation Policy:</strong> Free cancellation up to 60 days before departure. 
              50% refund 30-59 days before. No refund within 30 days.
            </p>
          </div>
        )}
      </div>

      {/* Final Price Breakdown */}
      <div className="bg-white p-4 rounded-xl border-2 border-green-200 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-800">Total Amount</span>
          <span className="text-2xl font-bold text-green-600">{formatPrice(totalAmount)}</span>
        </div>
        <p className="text-sm text-gray-600">
          {isSerengetiPackage ? 'Includes all Serengeti park fees, accommodation, meals, and guided game drives' : 'Includes all tour components as specified'}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
          disabled={isProcessing}
        >
          ← Back to Details
        </Button>
        <Button
          type="button"
          onClick={handlePayment}
          className={`flex-1 ${
            isSerengetiPackage 
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          }`}
          disabled={isProcessing || !agreeToTerms}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing Payment...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {isSerengetiPackage ? '🦁' : '💳'} Complete Booking
              <span className="ml-2 text-sm opacity-90">({formatPrice(totalAmount)})</span>
            </span>
          )}
        </Button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
