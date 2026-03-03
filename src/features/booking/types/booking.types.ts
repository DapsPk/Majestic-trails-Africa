import { Tour } from '@/features/tours/types/tour.types';

export interface BookingFormData {
  tourId: string;
  date: string;
  participants: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    specialRequirements?: string;
  };
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
}