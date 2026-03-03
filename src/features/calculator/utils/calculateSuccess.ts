export interface SuccessFactors {
  fitnessLevel: number; // 1-5
  preparation: number; // 1-5
  experience: number; // 1-5
  route: string;
  season: string;
  duration: string; // Added duration factor
}

export function calculateSuccessRate(factors: SuccessFactors): number {
  let baseRate = 50; // Base success rate

  // Fitness level impact (up to 20%)
  baseRate += (factors.fitnessLevel - 1) * 5;

  // Preparation impact (up to 15%)
  baseRate += (factors.preparation - 1) * 3.75;

  // Experience impact (up to 10%)
  baseRate += (factors.experience - 1) * 2.5;

  // Route difficulty impact (more accurate based on real data)
  const routeModifiers: { [key: string]: number } = {
    'marangu': 5,    // Moderate difficulty, hut accommodation
    'rongai': 8,     // Gentle ascent, good for beginners
    'machame': 12,   // Popular route with good acclimatization
    'lemosho': 15,   // Excellent acclimatization, high success
    'northern-circuit': 18, // Best acclimatization, highest success
    'umbwe': -5      // Very challenging, steep ascent
  };
  baseRate += routeModifiers[factors.route] || 0;

  // Season impact
  const seasonModifiers: { [key: string]: number } = {
    'dry': 10,       // Best conditions
    'shoulder': 5,   // Good conditions
    'wet': -15       // Challenging conditions
  };
  baseRate += seasonModifiers[factors.season] || 0;

  // Duration impact (Based on itinerary length)
  const durationModifiers: { [key: string]: number } = {
    '5-6': -10,      // Fast ascent, higher risk
    '7-8': 8,        // Recommended duration
    '9+': 15         // Best acclimatization
  };
  baseRate += durationModifiers[factors.duration] || 0;

  // Ensure rate is between 10-97% (never 0% or 100% as it's always possible/impossible)
  return Math.max(10, Math.min(97, Math.round(baseRate)));
}

export function getSuccessMessage(rate: number): string {
  if (rate >= 90) return "Outstanding preparation! You have excellent chances of summiting. Your fitness, preparation, and route choice are optimal for success.";
  if (rate >= 80) return "Excellent chance of success! You're well-prepared with good fitness and experience. Maintain your training and you'll likely summit.";
  if (rate >= 70) return "Good chance of success. You have solid preparation. Consider focusing on cardio training and altitude preparation to improve your odds.";
  if (rate >= 60) return "Moderate chance of success. With proper training and preparation in the coming months, you can significantly improve your chances.";
  if (rate >= 50) return "Challenging but achievable. Consider a longer itinerary, additional training, and possibly choosing a less difficult route.";
  if (rate >= 40) return "Considerable challenge ahead. We recommend extensive training, a longer itinerary, and possibly guided support for best results.";
  return "This will be very challenging. We strongly recommend a longer itinerary (8+ days), comprehensive training program, and experienced guide support.";
}

// Get improvement suggestions based on factors
export function getImprovementSuggestions(factors: SuccessFactors): string[] {
  const suggestions: string[] = [];

  if (factors.fitnessLevel < 3) {
    suggestions.push("Focus on cardiovascular training (running, cycling) and leg strength exercises");
  }

  if (factors.preparation < 3) {
    suggestions.push("Research altitude sickness prevention and practice with your gear");
  }

  if (factors.experience < 3) {
    suggestions.push("Consider doing some high-altitude day hikes or shorter treks first");
  }

  if (factors.route === 'umbwe' && factors.experience < 4) {
    suggestions.push("Consider switching to a less technical route like Lemosho or Machame");
  }

  if (factors.season === 'wet') {
    suggestions.push("If possible, consider climbing during dry season for better conditions");
  }

  if (factors.duration === '5-6') {
    suggestions.push("Strongly consider a 7-8 day itinerary for much better acclimatization");
  }

  if (suggestions.length === 0) {
    suggestions.push("Maintain your current training regimen and focus on mental preparation");
  }

  return suggestions;
}

// Calculate optimal route based on factors
export function getRecommendedRoute(factors: SuccessFactors): string {
  const { fitnessLevel, experience, duration } = factors;

  if (fitnessLevel >= 4 && experience >= 4 && duration === '9+') {
    return 'northern-circuit';
  } else if (fitnessLevel >= 3 && experience >= 3) {
    return 'lemosho';
  } else if (fitnessLevel >= 3) {
    return 'machame';
  } else if (fitnessLevel >= 2) {
    return 'rongai';
  } else {
    return 'marangu';
  }
}

// Get route information for display
export function getRouteInfo(route: string) {
  const routeInfo = {
    'marangu': { 
      difficulty: 'Moderate', 
      success: '70-80%', 
      description: 'Hut accommodation, gradual ascent',
      duration: '6 days',
      bestFor: 'First-time climbers, those preferring comfort'
    },
    'rongai': { 
      difficulty: 'Moderate', 
      success: '75-85%', 
      description: 'Gentle slopes, remote wilderness',
      duration: '7 days',
      bestFor: 'Less experienced climbers, solitude seekers'
    },
    'machame': { 
      difficulty: 'Difficult', 
      success: '80-90%', 
      description: 'Scenic route, good acclimatization',
      duration: '7 days',
      bestFor: 'Adventurous climbers, photography enthusiasts'
    },
    'lemosho': { 
      difficulty: 'Difficult', 
      success: '85-95%', 
      description: 'Highest success rate, beautiful scenery',
      duration: '8 days',
      bestFor: 'Those prioritizing success, scenic lovers'
    },
    'northern-circuit': { 
      difficulty: 'Difficult', 
      success: '90-95%', 
      description: 'Longest route, best acclimatization',
      duration: '9 days',
      bestFor: 'Maximum success chance, comprehensive experience'
    },
    'umbwe': { 
      difficulty: 'Very Difficult', 
      success: '60-70%', 
      description: 'Most challenging, steep ascent',
      duration: '6 days',
      bestFor: 'Experienced climbers seeking challenge'
    }
  };
  return routeInfo[route as keyof typeof routeInfo] || routeInfo.machame;
}