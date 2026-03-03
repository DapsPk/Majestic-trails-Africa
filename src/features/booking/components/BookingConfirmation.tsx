
'use client';

import { BookingConfirmationData } from '../types/booking.types';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

interface BookingConfirmationProps {
  booking: BookingConfirmationData;
  onComplete: () => void;
}

export default function BookingConfirmation({ booking, onComplete }: BookingConfirmationProps) {
  const isSerengetiPackage = booking.tour.title.toLowerCase().includes('serengeti');

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get next steps based on tour type
  const getNextSteps = () => {
    const baseSteps = [
      'Check your email for booking confirmation',
      'Review the packing list and preparation guide',
      'Complete any required medical forms',
      'Arrange travel insurance'
    ];

    if (isSerengetiPackage) {
      return [
        '🦁 Serengeti Migration Guide sent to your email',
        '📸 Photography tips for wildlife viewing',
        '🎒 Packing list for safari conditions',
        '🛂 Visa and travel document requirements'
      ];
    }

    if (booking.tour.section === 'kilimanjaro') {
      return [
        '🏔️ Climbing preparation guide sent',
        '⚡ Physical training recommendations',
        '🎒 Gear checklist and rental options',
        '🛂 Visa and altitude medication info'
      ];
    }

    return baseSteps;
  };

  const nextSteps = getNextSteps();

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Success Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <span className="text-2xl text-white">✓</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Booking Confirmed! 🎉
        </h2>
        <p className="text-gray-600">
          Thank you for choosing Majestic Trails{isSerengetiPackage ? ' for your Serengeti adventure' : ''}!
        </p>
        {isSerengetiPackage && (
          <div className="mt-2 inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            🦁 Serengeti 2025 Adventure Confirmed
          </div>
        )}
      </div>

      {/* Booking Details Card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-green-500 mr-2">📋</span>
          Booking Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Booking Reference:</span>
            <p className="font-mono font-semibold text-gray-800">{booking.bookingReference}</p>
          </div>
          <div>
            <span className="text-gray-600">Booking ID:</span>
            <p className="font-mono text-gray-800">{booking.bookingId}</p>
          </div>
          <div>
            <span className="text-gray-600">Tour:</span>
            <p className="font-semibold text-gray-800">{booking.tour.title}</p>
          </div>
          <div>
            <span className="text-gray-600">Duration:</span>
            <p className="text-gray-800">{booking.tour.duration}</p>
          </div>
          {booking.departureDate && (
            <div>
              <span className="text-gray-600">Departure Date:</span>
              <p className="text-gray-800">{formatDate(booking.departureDate)}</p>
            </div>
          )}
          <div>
            <span className="text-gray-600">Participants:</span>
            <p className="text-gray-800">{booking.formData.participants} people</p>
          </div>
          <div>
            <span className="text-gray-600">Total Amount:</span>
            <p className="text-xl font-bold text-green-600">{formatPrice(booking.totalAmount)}</p>
          </div>
          <div>
            <span className="text-gray-600">Status:</span>
            <p className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              ✓ {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="mt-4 pt-4 border-t border-green-200">
          <h4 className="font-semibold text-gray-700 mb-2">Customer Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Name:</span>
              <p className="text-gray-800">{booking.formData.customerInfo.name}</p>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <p className="text-gray-800">{booking.formData.customerInfo.email}</p>
            </div>
            <div>
              <span className="text-gray-600">Phone:</span>
              <p className="text-gray-800">{booking.formData.customerInfo.phone}</p>
            </div>
            <div>
              <span className="text-gray-600">Country:</span>
              <p className="text-gray-800">{booking.formData.customerInfo.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Serengeti Special Information */}
      {isSerengetiPackage && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-yellow-500 mr-2">🦁</span>
            Your Serengeti Adventure Awaits!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">What's Included:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>✓ 4x4 Safari Vehicle (max 6 guests)</li>
                <li>✓ Professional Wildlife Guide</li>
                <li>✓ All National Park Fees</li>
                <li>✓ Full-Board Accommodation</li>
                <li>✓ Game Drives & Migration Viewing</li>
                <li>✓ Airport Transfers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Pro Tips:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>📸 Bring binoculars and camera</li>
                <li>🌅 Early mornings for best wildlife</li>
                <li>🦁 Prime migration season: June-Oct</li>
                <li>💧 Stay hydrated on game drives</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-blue-500 mr-2">🚀</span>
          What Happens Next?
        </h3>
        <div className="space-y-3">
          {nextSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3 animate-fade-in-up" 
                 style={{ animationDelay: `${index * 200}ms` }}>
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Information */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
        <p className="text-gray-600 text-sm mb-3">
          Our team is here to assist you with any questions about your booking.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span>📧</span>
            <span>bookings@majestictrails.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span>📞</span>
            <span>+255 789 456 123</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span>💬</span>
            <span>24/7 WhatsApp Support</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button
          onClick={onComplete}
          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          {isSerengetiPackage ? '🦁 Start Planning Your Safari' : 'Start Planning Your Adventure'}
        </Button>
        <Button
          variant="outline"
          onClick={() => window.print()}
          className="flex-1"
        >
          🖨️ Print Confirmation
        </Button>
      </div>

      {/* Additional Information */}
      <div className="text-center text-sm text-gray-500">
        <p>
          A detailed confirmation email has been sent to {booking.formData.customerInfo.email}
        </p>
        <p className="mt-1">
          Booking confirmed on {booking.createdAt.toLocaleDateString()} at{' '}
          {booking.createdAt.toLocaleTimeString()}
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
