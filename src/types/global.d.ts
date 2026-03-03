// Global TypeScript definitions for Majestic Trails

export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  image: string;
  location: string;
  highlights: string[];
}

export interface BookingData {
  tourId: string;
  date: string;
  participants: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
  user: any | null;
}