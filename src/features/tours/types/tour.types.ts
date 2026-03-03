export interface TourDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

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
  rating: number;
  reviewCount: number;
  category: 'safari' | 'trekking' | 'beach' | 'cultural';
  section: 'safari' | 'kilimanjaro' | 'zanzibar';
  itinerary: TourDay[];
  inclusions: string[];
  exclusions: string[];
  // NEW FIELDS FOR KILIMANJARO ENHANCEMENTS
  packageType?: 'climbing' | 'day-trip' | 'safari-package';
  routeType?: 'machame' | 'marangu' | 'lemosho' | 'rongai' | 'northern-circuit' | 'umbwe';
  activityType?: 'pre-climb' | 'post-climb' | 'general';
  successRate?: number;
  // NEW FIELDS FOR SAFARI PACKAGES
  overview?: string;
  accommodations?: string;
  experience?: string;
  groupPrice?: number;
  familyPrice?: number;
  // NEW FIELD FOR SAFARI CATEGORIZATION
  subCategory?: 'serengeti' | 'ngorongoro' | 'tarangire';
  // NEW FIELD FOR SAFARI STYLE CATEGORIZATION
  tourStyle?: 'multi-day' | 'short-trip' | 'family' | 'group';
  // NEW FIELDS FOR KILIMANJARO CATEGORIZATION
  kilimanjaroCategory?: 'multi-day-climbs' | 'short-climbs' | 'day-trips' | 'luxury-climbs';
  acclimatizationDays?: number;
  groupSize?: 'private' | 'small-group' | 'large-group';
  fitnessLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface TourFilters {
  difficulty: string[];
  priceRange: [number, number];
  duration: string[];
  category: string[];
}