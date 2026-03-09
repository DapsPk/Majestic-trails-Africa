import { Tour } from '../types/tour.types';

export const toursData: Tour[] = [
  // ========== KILIMANJARO CLIMBING ROUTES ==========
  {
    id: 'lemosho-8days',
    title: 'Lemosho Route - 8 Days',
    description: 'The scenic, high-success route with spectacular western views and excellent acclimatization.',
    price: 2650,
    duration: '8 days',
    difficulty: 'Difficult',
    image: '/images/kilimanjaro-lemosho.jpg',
    // ADDED: Optimized images object
    images: {
      main: '/images/tours/kilimanjaro/lemosho-8days/main.jpg',
      mobile: '/images/tours/kilimanjaro/lemosho-8days/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/lemosho-8days/main.jpg',
      alt: 'Lemosho Route on Mount Kilimanjaro showing scenic western views with hikers on trail'
    },
    location: 'Mount Kilimanjaro',
    highlights: ['Highest Success Rate', 'Spectacular Scenery', 'Gradual Acclimatization', 'Barranco Wall', 'Wildlife Spotting'],
    rating: 4.9,
    reviewCount: 127,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'climbing',
    routeType: 'lemosho',
    successRate: 90,
    kilimanjaroCategory: 'multi-day-climbs',
    acclimatizationDays: 3,
    groupSize: 'small-group',
    fitnessLevel: 'intermediate',
    itinerary: [
      {
        day: 1,
        title: 'Londorossi Gate → Mti Mkubwa Camp',
        description: 'Arrive at Kilimanjaro\'s western flank, enter the rainforest. First cultural welcome, meet your guide, porters and enjoy the lush forest sounds and birdlife.',
        activities: ['Registration at gate', 'Rainforest trek', 'Camp setup'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mti Mkubwa Camp'
      },
      {
        day: 2,
        title: 'Mti Mkubwa → Shira 1 Camp',
        description: 'Cross high rainforest to mossy heath, emerge onto the open Shira Plateau — sweeping views and the first sense of altitude.',
        activities: ['Moorland landscape', 'Altitude acclimatization', 'Plateau views'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Shira 1 Camp'
      },
      {
        day: 3,
        title: 'Shira 1 → Shira 2 / Barranco direction',
        description: 'Walk across plateau landscapes, dramatic vistas of Mawenzi and Kibo, camp under wide African skies.',
        activities: ['Plateau crossing', 'Volcanic views', 'Acclimatization hike'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Shira 2 Camp'
      },
      {
        day: 4,
        title: 'Shira/Barranco → Barranco Camp',
        description: 'Descend slightly into moorland and heather zones; climb the famous Barranco Wall for an adrenaline boost and incredible photographic viewpoints.',
        activities: ['Barranco Wall climb', 'Moorland trek', 'Photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Barranco Camp'
      },
      {
        day: 5,
        title: 'Barranco → Karanga Camp',
        description: 'A shorter day focusing on acclimatization and restorative time; alpine plants and lonely vistas of Kibo.',
        activities: ['Acclimatization hike', 'Alpine desert', 'Rest time'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Karanga Camp'
      },
      {
        day: 6,
        title: 'Karanga → Barafu Camp',
        description: 'Cross alpine desert; final preparations for summit night at Barafu, briefing and early rest.',
        activities: ['Alpine desert trek', 'Summit preparation', 'Briefing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Barafu Camp'
      },
      {
        day: 7,
        title: 'Summit Night: Barafu → Uhuru Peak → Mweka Camp',
        description: 'Start pre-dawn, climb to Uhuru Peak at sunrise, then descend to Mweka Camp for celebration and rest.',
        activities: ['Midnight summit start', 'Sunrise at Uhuru Peak', 'Summit celebration', 'Descent'],
        meals: ['Early breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mweka Camp'
      },
      {
        day: 8,
        title: 'Descent to Mweka Gate → Transfer to Moshi',
        description: 'Certificates, warm showers, and debrief; guests depart with unforgettable summit memories.',
        activities: ['Rainforest descent', 'Certificate ceremony', 'Transfer to hotel'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel'
      }
    ],
    inclusions: [
      'Professional mountain guides',
      'Park fees and permits',
      'All meals during trek',
      'Quality camping equipment',
      'Porters for equipment',
      'Emergency oxygen',
      'Summit certificate'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Personal equipment',
      'Tips for crew',
      'Hotel before/after trek'
    ]
  },
  {
    id: 'machame-7days',
    title: 'Machame Route - 7 Days',
    description: 'Conquer Kilimanjaro via the most scenic "Whiskey Route" with optimal acclimatization and breathtaking views.',
    price: 2499,
    duration: '7 days',
    difficulty: 'Difficult',
    image: '/images/kilimanjaro-machame.jpg',
    images: {
      main: '/images/tours/kilimanjaro/machame-7days/main.jpg',
      mobile: '/images/tours/kilimanjaro/machame-7days/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/machame-7days/main.jpg',
      alt: 'Machame Route on Mount Kilimanjaro with hikers ascending through varied landscapes'
    },
    location: 'Mount Kilimanjaro',
    highlights: ['Summit Uhuru Peak', 'Scenic Machame Route', 'Professional Mountain Guides', 'All Meals Included', 'Camping Equipment'],
    rating: 4.9,
    reviewCount: 156,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'climbing',
    routeType: 'machame',
    successRate: 85,
    kilimanjaroCategory: 'short-climbs',
    acclimatizationDays: 2,
    groupSize: 'small-group',
    fitnessLevel: 'intermediate',
    itinerary: [
      {
        day: 1,
        title: 'Machame Gate to Machame Camp',
        description: 'Start trek through rainforest (5-7 hours), elevation: 1,800m to 3,000m',
        activities: ['Registration at gate', 'Rainforest trek', 'Camp setup'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Machame Camp'
      },
      {
        day: 2,
        title: 'Machame Camp to Shira Camp',
        description: 'Ascend through moorland (4-6 hours), elevation: 3,000m to 3,840m',
        activities: ['Moorland landscape', 'Acclimatization hike', 'Sunset views'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Shira Camp'
      },
      {
        day: 3,
        title: 'Shira Camp to Barranco Camp',
        description: 'Cross Shira Plateau (6-8 hours), elevation: 3,840m to 3,900m',
        activities: ['Lava Tower climb', 'High altitude acclimatization', 'Barranco Wall views'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Barranco Camp'
      },
      {
        day: 4,
        title: 'Barranco Camp to Karanga Camp',
        description: 'Climb Barranco Wall (4-5 hours), elevation: 3,900m to 4,000m',
        activities: ['Barranco Wall scramble', 'Alpine desert trek', 'Acclimatization'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Karanga Camp'
      },
      {
        day: 5,
        title: 'Karanga Camp to Barafu Camp',
        description: 'Ascend to base camp (4-5 hours), elevation: 4,000m to 4,673m',
        activities: ['Alpine desert trek', 'Summit preparation', 'Early rest for summit night'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Barafu Camp'
      },
      {
        day: 6,
        title: 'Summit Day - Barafu to Uhuru to Mweka',
        description: 'Summit push (6-8 hours up, 7-8 hours down), elevation: 4,673m to 5,895m to 3,100m',
        activities: ['Midnight summit start', 'Sunrise at Stella Point', 'Uhuru Peak summit', 'Descent to Mweka'],
        meals: ['Early breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mweka Camp'
      },
      {
        day: 7,
        title: 'Mweka Camp to Mweka Gate',
        description: 'Final descent through rainforest (3-4 hours), elevation: 3,100m to 1,640m',
        activities: ['Rainforest descent', 'Certificate ceremony', 'Transfer to hotel'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel'
      }
    ],
    inclusions: [
      'Professional mountain guides',
      'Park fees and permits',
      'All meals during trek',
      'Quality camping equipment',
      'Porters for equipment',
      'Emergency oxygen',
      'Summit certificate'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Personal equipment',
      'Tips for crew',
      'Hotel before/after trek'
    ]
  },
  {
    id: 'marangu-6days',
    title: 'Marangu Route - 6 Days',
    description: 'The classic "Coca-Cola Route" with comfortable hut accommodation and gradual ascent.',
    price: 2199,
    duration: '6 days',
    difficulty: 'Moderate',
    image: '/images/kilimanjaro-marangu.jpg',
    images: {
      main: '/images/tours/kilimanjaro/marangu-6days/main.jpg',
      mobile: '/images/tours/kilimanjaro/marangu-6days/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/marangu-6days/main.jpg',
      alt: 'Marangu Route on Kilimanjaro with hikers staying in mountain huts along the trail'
    },
    location: 'Mount Kilimanjaro',
    highlights: ['Hut Accommodation', 'Gradual Ascent', 'Five Climate Zones', 'All Meals Included'],
    rating: 4.7,
    reviewCount: 89,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'climbing',
    routeType: 'marangu',
    successRate: 70,
    kilimanjaroCategory: 'short-climbs',
    acclimatizationDays: 1,
    groupSize: 'small-group',
    fitnessLevel: 'beginner',
    itinerary: [
      {
        day: 1,
        title: 'Marangu Gate to Mandara Hut',
        description: 'Rainforest trek (4-5 hours), elevation: 1,860m to 2,700m',
        activities: ['Gate registration', 'Rainforest wildlife', 'Mountain views'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mandara Hut'
      },
      {
        day: 2,
        title: 'Mandara Hut to Horombo Hut',
        description: 'Moorland ascent (6-8 hours), elevation: 2,700m to 3,720m',
        activities: ['Moorland landscape', 'Acclimatization', 'Kibo views'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Horombo Hut'
      },
      {
        day: 3,
        title: 'Acclimatization Day',
        description: 'Day hike to Zebra Rocks (3-4 hours)',
        activities: ['Acclimatization hike', 'Landscape photography', 'Rest and preparation'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Horombo Hut'
      },
      {
        day: 4,
        title: 'Horombo Hut to Kibo Hut',
        description: 'Alpine desert trek (5-7 hours), elevation: 3,720m to 4,703m',
        activities: ['Alpine desert', 'Summit preparation', 'Early dinner and rest'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kibo Hut'
      },
      {
        day: 5,
        title: 'Summit Day - Kibo to Uhuru to Horombo',
        description: 'Summit push and descent (12-16 hours), elevation: 4,703m to 5,895m to 3,720m',
        activities: ['Midnight start', 'Gilman\'s Point sunrise', 'Uhuru Peak', 'Descent to Horombo'],
        meals: ['Early breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Horombo Hut'
      },
      {
        day: 6,
        title: 'Horombo Hut to Marangu Gate',
        description: 'Final descent (5-7 hours), elevation: 3,720m to 1,860m',
        activities: ['Rainforest descent', 'Certificate ceremony', 'Celebration'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel'
      }
    ],
    inclusions: [
      'Mountain guide and crew',
      'All park fees and hut fees',
      'All meals on mountain',
      'Hut accommodation',
      'Emergency equipment',
      'Summit certificate'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal gear',
      'Tips',
      'Extra hotel nights'
    ]
  },
  {
    id: 'rongai-7days',
    title: 'Rongai Route - 7 Days',
    description: 'The quiet northern route with gentle slopes and remote wilderness experience.',
    price: 2399,
    duration: '7 days',
    difficulty: 'Moderate',
    image: '/images/kilimanjaro-rongai.jpg',
    images: {
      main: '/images/tours/kilimanjaro/rongai-7days/main.jpg',
      mobile: '/images/tours/kilimanjaro/rongai-7days/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/rongai-7days/main.jpg',
      alt: 'Rongai Route on Kilimanjaro showing remote northern wilderness with gentle slopes'
    },
    location: 'Mount Kilimanjaro',
    highlights: ['Remote Wilderness', 'Gentle Ascent', 'Less Crowded', 'Wildlife Spotting'],
    rating: 4.6,
    reviewCount: 67,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'climbing',
    routeType: 'rongai',
    successRate: 80,
    kilimanjaroCategory: 'short-climbs',
    acclimatizationDays: 2,
    groupSize: 'small-group',
    fitnessLevel: 'intermediate',
    itinerary: [
      {
        day: 1,
        title: 'Rongai Gate → Simba Camp',
        description: 'Northern forest start with gentle slopes and remote wilderness feel.',
        activities: ['Gate registration', 'Northern forest trek', 'Camp setup'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Simba Camp'
      },
      {
        day: 2,
        title: 'Simba → Second Cave / Kikelewa Cave',
        description: 'Open moorland scenery with expansive views of the northern slopes.',
        activities: ['Moorland trek', 'Acclimatization', 'Wildlife viewing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kikelewa Cave Camp'
      },
      {
        day: 3,
        title: 'Kikelewa → Mawenzi Tarn Camp',
        description: 'Stunning Mawenzi views and high-altitude acclimatization.',
        activities: ['Mawenzi views', 'High-altitude acclimatization', 'Alpine landscape'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mawenzi Tarn Camp'
      },
      {
        day: 4,
        title: 'Mawenzi → Kibo / School Hut area',
        description: 'Alpine desert approach with panoramic views of Kibo summit.',
        activities: ['Alpine desert crossing', 'Summit views', 'Rest preparation'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kibo Hut'
      },
      {
        day: 5,
        title: 'Rest / Acclimatization near Kibo',
        description: 'Crucial rest day for optimal acclimatization before summit push.',
        activities: ['Rest day', 'Acclimatization walk', 'Summit briefing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kibo Hut'
      },
      {
        day: 6,
        title: 'Summit push: Kibo → Uhuru → Descent to Millenium Camp',
        description: 'Summit achievement and celebratory descent.',
        activities: ['Summit push', 'Uhuru Peak', 'Victory descent'],
        meals: ['Early breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Millenium Camp'
      },
      {
        day: 7,
        title: 'Descent → Rongai Gate → Transfer',
        description: 'Final descent and transfer with summit celebration.',
        activities: ['Descent', 'Certificate ceremony', 'Transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel'
      }
    ],
    inclusions: [
      'Professional mountain guides',
      'All park fees and permits',
      'Quality camping equipment',
      'All meals during trek',
      'Porters and crew',
      'Emergency equipment',
      'Summit certificate'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Personal equipment',
      'Tips for crew',
      'Hotel before/after trek'
    ]
  },
  {
    id: 'northern-circuit-9days',
    title: 'Northern Circuit - 9 Days',
    description: 'The longest route with 360° panoramic circuit and highest summit success rates.',
    price: 2850,
    duration: '9 days',
    difficulty: 'Difficult',
    image: '/images/kilimanjaro-northern.jpg',
    images: {
      main: '/images/tours/kilimanjaro/northern-circuit-9days/main.jpg',
      mobile: '/images/tours/kilimanjaro/northern-circuit-9days/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/northern-circuit-9days/main.jpg',
      alt: 'Northern Circuit Route on Mount Kilimanjaro with 360-degree panoramic views'
    },
    location: 'Mount Kilimanjaro',
    highlights: ['Highest Success Rate', '360° Panoramic Views', 'Gradual Acclimatization', 'Remote Wilderness'],
    rating: 4.9,
    reviewCount: 94,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'climbing',
    routeType: 'northern-circuit',
    successRate: 95,
    kilimanjaroCategory: 'multi-day-climbs',
    acclimatizationDays: 4,
    groupSize: 'small-group',
    fitnessLevel: 'intermediate',
    itinerary: [
      {
        day: 1,
        title: 'Londorossi Gate → Mti Mkubwa Camp',
        description: 'Western approach through lush rainforest and mountain introduction.',
        activities: ['Gate registration', 'Rainforest trek', 'Wildlife spotting'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mti Mkubwa Camp'
      },
      {
        day: 2,
        title: 'Mti Mkubwa → Shira 1 Camp',
        description: 'Emergence onto Shira Plateau with expansive mountain views.',
        activities: ['Moorland trek', 'Plateau crossing', 'Acclimatization'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Shira 1 Camp'
      },
      {
        day: 3,
        title: 'Shira 1 → Shira 2 / Buffalo Camp',
        description: 'High-altitude plateau exploration and volcanic landscape.',
        activities: ['High-altitude trek', 'Volcanic views', 'Landscape photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Shira 2 Camp'
      },
      {
        day: 4,
        title: 'Shira → Moir Hut / Rongai junction',
        description: 'Northern circuit begins with gradual ascent and wide views.',
        activities: ['Northern circuit start', 'Panoramic views', 'Gradual ascent'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Moir Hut'
      },
      {
        day: 5,
        title: 'Moir → Lava Tower → Third Cave',
        description: 'Acclimatization via "climb high, sleep low" strategy.',
        activities: ['Lava Tower visit', 'Acclimatization hike', 'High-altitude training'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Third Cave'
      },
      {
        day: 6,
        title: 'Third Cave → Kikelewa Cave / High Camps',
        description: 'Approach to summit zone with final acclimatization.',
        activities: ['Summit zone approach', 'Final acclimatization', 'Rest preparation'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kikelewa Cave'
      },
      {
        day: 7,
        title: 'Approach to Kibo / Rest',
        description: 'Strategic rest day for optimal summit success.',
        activities: ['Rest day', 'Summit briefing', 'Equipment check'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Kibo Hut'
      },
      {
        day: 8,
        title: 'Summit Night: Kibo → Uhuru Peak → Descent to Mweka',
        description: 'Summit achievement and victorious descent.',
        activities: ['Summit push', 'Uhuru Peak sunrise', 'Victory descent'],
        meals: ['Early breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mweka Camp'
      },
      {
        day: 9,
        title: 'Mweka → Gate → Transfer to Moshi',
        description: 'Final descent and celebration with summit certificates.',
        activities: ['Rainforest descent', 'Certificate ceremony', 'Celebration'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel'
      }
    ],
    inclusions: [
      'Professional mountain guides',
      'All park fees and permits',
      'Quality camping equipment',
      'All meals during trek',
      'Porters and crew support',
      'Emergency oxygen and equipment',
      'Summit certificate'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Personal equipment',
      'Tips for crew',
      'Hotel before/after trek'
    ]
  },

  // ========== KILIMANJARO DAY TRIPS ==========
  {
    id: 'materuni-day-trip',
    title: 'Materuni Waterfall + Coffee Tour',
    description: 'Chagga Mountain Warm-Up Experience - Perfect before your Mt. Kilimanjaro climb to test fitness and experience local culture.',
    price: 91,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/materuni-waterfall.jpg',
    images: {
      main: '/images/tours/kilimanjaro/materuni-day-trip/main.png',
      mobile: '/images/tours/kilimanjaro/materuni-day-trip/main.png',
      thumbnail: '/images/tours/kilimanjaro/materuni-day-trip/main.png',
      alt: 'Materuni Waterfall in Kilimanjaro region with lush vegetation and cascading water'
    },
    location: 'Materuni Village, Kilimanjaro',
    highlights: ['90m Waterfall', 'Coffee Making Experience', 'Chagga Culture', 'Mountain Views', 'Traditional Lunch'],
    rating: 4.8,
    reviewCount: 45,
    category: 'cultural',
    section: 'kilimanjaro',
    packageType: 'day-trip',
    activityType: 'pre-climb',
    kilimanjaroCategory: 'day-trips',
    groupSize: 'small-group',
    fitnessLevel: 'beginner',
    itinerary: [
      {
        day: 1,
        title: 'Full Day Materuni Experience',
        description: 'Cultural immersion and light hiking perfect for pre-climb acclimatization.',
        activities: ['Waterfall hike', 'Coffee farm tour', 'Traditional lunch', 'Cultural exchange', 'Swimming at waterfall'],
        meals: ['Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private transport',
      'Local English-speaking guide',
      'Traditional Chagga lunch',
      'Coffee experience (hands-on)',
      'Water bottles',
      'All entrance fees'
    ],
    exclusions: [
      'Personal drinks beyond lunch',
      'Tips (optional)',
      'Personal expenses'
    ]
  },
  {
    id: 'chemka-hotsprings',
    title: 'Chemka Hot Springs Day Trip',
    description: 'Blue Lagoon Post-Climb Recovery Escape - The perfect treat after conquering Kilimanjaro to relax and rejuvenate.',
    price: 90,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/chemka-hotsprings.jpg',
    images: {
      main: '/images/tours/kilimanjaro/chemka-hotsprings/main.png',
      mobile: '/images/tours/kilimanjaro/chemka-hotsprings/main.png',
      thumbnail: '/images/tours/kilimanjaro/chemka-hotsprings/main.png',
      alt: 'Chemka Hot Springs with crystal clear turquoise water in natural jungle setting'
    },
    location: 'Chemka Hot Springs, Kilimanjaro',
    highlights: ['Natural Hot Springs', 'Crystal Clear Water', 'Relaxation', 'Swimming', 'Picnic Lunch'],
    rating: 4.7,
    reviewCount: 38,
    category: 'beach',
    section: 'kilimanjaro',
    packageType: 'day-trip',
    activityType: 'post-climb',
    kilimanjaroCategory: 'day-trips',
    groupSize: 'small-group',
    fitnessLevel: 'beginner',
    itinerary: [
      {
        day: 1,
        title: 'Hot Springs Relaxation',
        description: 'Full day of relaxation and recovery in natural geothermal springs.',
        activities: ['Hot springs swimming', 'Picnic lunch', 'Relaxation', 'Optional village walk'],
        meals: ['Picnic lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private transport',
      'Full-day access to Chemka Hot Springs',
      'Picnic lunch',
      'Bottled water',
      'Guide services'
    ],
    exclusions: [
      'Alcoholic or soft drinks',
      'Towels (bring your own)',
      'Tips (optional)'
    ]
  },
  {
    id: 'marangu-day-hike',
    title: '1-Day Marangu Hike: "Rainforest Whisper Walk"',
    description: 'Taste Kilimanjaro\'s soul without the summit marathon. Perfect for casual hikers and short-stay travelers.',
    price: 200,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/marangu-day-hike.jpg',
    images: {
      main: '/images/tours/kilimanjaro/marangu-day-hike/main.jpg',
      mobile: '/images/tours/kilimanjaro/marangu-day-hike/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/marangu-day-hike/main.jpg',
      alt: 'Day hike on Marangu Route through Kilimanjaro rainforest with Colobus monkeys'
    },
    location: 'Marangu Route, Kilimanjaro',
    highlights: ['Rainforest Experience', 'Colobus Monkeys', 'Maundi Crater', 'Mountain Views', 'Nature Walk'],
    rating: 4.5,
    reviewCount: 52,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'day-trip',
    activityType: 'pre-climb',
    kilimanjaroCategory: 'day-trips',
    groupSize: 'small-group',
    fitnessLevel: 'beginner',
    itinerary: [
      {
        day: 1,
        title: 'Rainforest Day Hike',
        description: 'Gentle hike through Kilimanjaro\'s rainforest zone with wildlife and nature immersion.',
        activities: ['Rainforest trek', 'Wildlife spotting', 'Picnic lunch', 'Maundi Crater viewpoint'],
        meals: ['Picnic lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Park fees',
      'Professional guide',
      'Transfers',
      'Packed lunch',
      'Bottled water'
    ],
    exclusions: [
      'Personal expenses',
      'Tips',
      'Additional activities'
    ]
  },
  {
    id: 'horombo-2day',
    title: '2-Day Horombo Hut Trek: "Moorland Star-Trek Escape"',
    description: 'An overnight hike into Kilimanjaro\'s dreamlike middle zone with stargazing and high-altitude experience.',
    price: 710,
    duration: '2 days',
    difficulty: 'Moderate',
    image: '/images/horombo-trek.jpg',
    images: {
      main: '/images/tours/kilimanjaro/horombo-2day/main.jpg',
      mobile: '/images/tours/kilimanjaro/horombo-2day/main.jpg',
      thumbnail: '/images/tours/kilimanjaro/horombo-2day/main.jpg',
      alt: 'Horombo Hut on Kilimanjaro with stargazing and moorland landscape views'
    },
    location: 'Marangu Route, Kilimanjaro',
    highlights: ['Overnight Mountain Stay', 'Stargazing', 'Moorland Landscape', 'High-Altitude Experience', 'Hut Accommodation'],
    rating: 4.6,
    reviewCount: 28,
    category: 'trekking',
    section: 'kilimanjaro',
    packageType: 'day-trip',
    activityType: 'pre-climb',
    kilimanjaroCategory: 'day-trips',
    groupSize: 'small-group',
    fitnessLevel: 'beginner',
    itinerary: [
      {
        day: 1,
        title: 'Marangu Gate → Mandara Hut (Overnight)',
        description: 'Mystical tropical rainforest trek with overnight mountain hut experience.',
        activities: ['Rainforest trek', 'Monkey sightings', 'Maundi Crater sunset', 'Stargazing'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mandara Hut'
      },
      {
        day: 2,
        title: 'Mandara Hut → Maundi Crater → Descent',
        description: 'High-altitude moorland exploration and scenic descent.',
        activities: ['Moorland trek', 'High-altitude experience', 'Scenic descent', 'Mountain photography'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Park fees',
      'Guide and porters',
      'Meals as specified',
      'Hut accommodation',
      'Transfers'
    ],
    exclusions: [
      'Personal equipment',
      'Tips',
      'Additional hotel nights'
    ]
  },

  // ========== SERENGETI SAFARI PACKAGES ==========
  // Multi-Day Serengeti Safari Packages (5-8 Days)
  {
    id: 'serengeti-5day-pulse',
    title: '5-Day Serengeti Pulse: "Heartbeat of the Plains"',
    description: 'Dive into the Serengeti\'s raw rhythm with Majestic Trails\' 5-day immersion—perfect for first-timers craving the Migration\'s thunder and predator drama.',
    overview: 'Dive into the Serengeti\'s raw rhythm with Majestic Trails\' 5-day immersion—perfect for first-timers craving the Migration\'s thunder and predator drama in an intimate, soul-shaking escape.',
    price: 2100,
    groupPrice: 1750,
    duration: '5 days/4 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-pulse.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-5day-pulse/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-5day-pulse/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-5day-pulse/main.jpeg',
      alt: '5-Day Serengeti Pulse safari showing the Great Migration across endless plains'
    },
    location: 'Serengeti National Park',
    highlights: ['Great Migration Viewing', 'Predator Drama', 'Cultural Coffee Stop', 'Bush Breakfasts', 'Intimate Experience'],
    rating: 4.9,
    reviewCount: 89,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Central Serengeti',
        description: 'Transfer to Central Serengeti (flight option +$250); afternoon drive—herds at Seronera River.',
        activities: ['Scenic transfer', 'Afternoon game drive', 'Seronera River wildlife'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Serengeti Kati Kati'
      },
      {
        day: 2,
        title: 'Full Day Central Plains Exploration',
        description: 'Full-day central plains—lion prides, cheetah sprints; picnic under sausage trees.',
        activities: ['Full day game drive', 'Predator tracking', 'Bush picnic'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Kati Kati'
      },
      {
        day: 3,
        title: 'Western Corridor Adventure',
        description: 'Western Corridor—croc-filled Grumeti River; migration river crossings (July–Oct).',
        activities: ['Western corridor exploration', 'River crossing viewing', 'Crocodile spotting'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Kati Kati'
      },
      {
        day: 4,
        title: 'Southern Serengeti & Maasai Culture',
        description: 'Southern Serengeti—wildebeest calving grounds (Jan–Mar); evening Maasai tales.',
        activities: ['Southern plains game drive', 'Calving grounds visit', 'Maasai cultural evening'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Kati Kati'
      },
      {
        day: 5,
        title: 'Dawn Balloon & Return',
        description: 'Dawn hot-air balloon (+$550); Arusha return by 3pm.',
        activities: ['Hot air balloon safari', 'Final game drive', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Expert guide',
      'All meals (bush breakfasts)',
      'Park fees',
      '4x4 game drives',
      'Drinking water',
      'Cultural coffee stop',
      'Arusha transfers'
    ],
    exclusions: [
      'Alcoholic drinks',
      'Personal extras',
      'Hot air balloon ($550)',
      'Flight option ($250)',
      'Tips ($10-15/day)'
    ],
    accommodations: 'Serengeti Kati Kati—mobile luxury tents, hot showers, migration-view decks',
    experience: 'The Migration\'s roar, hyena clans at dawn kills, 2M+ wildebeest painting the horizon—plus fireside stories that echo Africa\'s soul.'
  },
  {
    id: 'serengeti-6day-odyssey',
    title: '6-Day Serengeti Odyssey: "Migration & Majesty"',
    description: 'Majestic Trails unveils the Serengeti\'s full grandeur in 6 days—from northern river crossings to southern calving seas.',
    overview: 'Majestic Trails unveils the Serengeti\'s full grandeur in 6 days—from northern river crossings to southern calving seas—ideal for photographers and nature lovers seeking the Migration\'s every chapter.',
    price: 2500,
    groupPrice: 2100,
    duration: '6 days/5 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-odyssey.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-6day-odyssey/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-6day-odyssey/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-6day-odyssey/main.jpeg',
      alt: '6-Day Serengeti Odyssey exploring the vast plains and river crossings'
    },
    location: 'Serengeti National Park',
    highlights: ['Mara River Crossings', 'Northern Serengeti', 'Photography Focus', 'Night Game Drive', 'Bird Watching'],
    rating: 4.9,
    reviewCount: 67,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Northern Serengeti',
        description: 'Transfer to Northern Serengeti; Mara River stakeout—croc ambushes.',
        activities: ['Northern transfer', 'Mara River stakeout', 'Crocodile viewing'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mara Kati Kati'
      },
      {
        day: 2,
        title: 'Northern Migration Days',
        description: 'Dual northern days—herds plunging, vulture feasts; night drive for genets.',
        activities: ['Full day migration viewing', 'River crossing photography', 'Night game drive'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mara Kati Kati'
      },
      {
        day: 3,
        title: 'Continue Northern Exploration',
        description: 'Continue northern migration observation and predator action.',
        activities: ['Predator tracking', 'Landscape photography', 'Wildlife behavior study'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mara Kati Kati'
      },
      {
        day: 4,
        title: 'Central Serengeti & Culture',
        description: 'Central Serengeti—leopard in kopjes; cultural visit.',
        activities: ['Central plains game drive', 'Kopjes exploration', 'Cultural village visit'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Central Serengeti Camp'
      },
      {
        day: 5,
        title: 'Southern Plains & Sundowner',
        description: 'Southern plains—zebra foals, hyena dens; sunset sundowner.',
        activities: ['Southern plains drive', 'Hyena den viewing', 'Sunset sundowner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Southern Serengeti Camp'
      },
      {
        day: 6,
        title: 'Morning Finale & Return',
        description: 'Morning finale game drive; Arusha return by noon.',
        activities: ['Morning game drive', 'Bird watching', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private guide',
      'Gourmet meals',
      'All park fees',
      'Game drives',
      'Bird checklist',
      'Night game drive',
      'Cultural visits'
    ],
    exclusions: [
      'Balloon safari (+$550)',
      'Personal drinks',
      'Souvenirs',
      'Tips'
    ],
    accommodations: 'Mara Kati Kati—canvas elegance, river proximity, bush dinners',
    experience: 'Mara River chaos, kopje-climbing leopards, 500+ birds in flight—woven with Maasai wisdom under star-drenched skies.'
  },
  {
    id: 'serengeti-7day-fusion',
    title: '7-Day Serengeti & Ngorongoro Fusion: "Plains to Crater Glory"',
    description: 'Majestic Trails merges Serengeti\'s vastness with Ngorongoro\'s intimate caldera for a 7-day northern circuit masterpiece.',
    overview: 'Majestic Trails merges Serengeti\'s vastness with Ngorongoro\'s intimate caldera for a 7-day northern circuit masterpiece—perfect for adventurers craving diversity and depth.',
    price: 3000,
    groupPrice: 2500,
    duration: '7 days/6 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-ngorongoro-fusion.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-7day-fusion/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-7day-fusion/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-7day-fusion/main.jpeg',
      alt: '7-Day Serengeti and Ngorongoro Fusion combining wildlife and crater views'
    },
    location: 'Serengeti & Ngorongoro',
    highlights: ['Serengeti Migration', 'Ngorongoro Crater', 'Big Five', 'Cultural Dance', 'Fossil Site'],
    rating: 4.8,
    reviewCount: 94,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Serengeti',
        description: 'Transfer to Serengeti; central plains—giraffe towers.',
        activities: ['Scenic drive', 'Central plains game drive', 'Giraffe spotting'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Serengeti Lodge'
      },
      {
        day: 2,
        title: 'Serengeti Core Exploration',
        description: 'Serengeti core—migration, big cats; night spotlight.',
        activities: ['Full day game drive', 'Big cat tracking', 'Night spotlight drive'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Lodge'
      },
      {
        day: 3,
        title: 'Continue Serengeti Adventure',
        description: 'Continued Serengeti exploration and wildlife encounters.',
        activities: ['Migration viewing', 'Predator behavior', 'Landscape photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Lodge'
      },
      {
        day: 4,
        title: 'Ngorongoro Arrival',
        description: 'Transfer to Ngorongoro; rim sunset.',
        activities: ['Scenic transfer', 'Crater rim walk', 'Sunset viewing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Descent',
        description: 'Full crater descent—rhinos, hippos; lake picnic.',
        activities: ['Crater floor game drive', 'Rhino tracking', 'Lake picnic lunch'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge'
      },
      {
        day: 6,
        title: 'Crater Rim & Fossils',
        description: 'Crater rim walk; Olduvai fossils.',
        activities: ['Crater rim hike', 'Olduvai Gorge visit', 'Fossil museum'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Lodge'
      },
      {
        day: 7,
        title: 'Morning Wildlife & Return',
        description: 'Morning wildlife viewing; Arusha return by 2pm.',
        activities: ['Final game drive', 'Cultural dance', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'All meals (crater picnics)',
      'Park and crater fees',
      'Game drives',
      'Cultural dance',
      'Fossil site visit',
      'Professional guide',
      '4x4 vehicle'
    ],
    exclusions: [
      'Souvenirs',
      'Personal expenses',
      'Optional activities',
      'Tips'
    ],
    accommodations: 'Ngorongoro Sopa Lodge—rim-edge suites, infinity views, fusion cuisine',
    experience: 'Serengeti\'s endless herds, Ngorongoro\'s Big Five in a volcanic bowl—plus Maasai chants that bridge worlds.'
  },
  {
    id: 'serengeti-8day-ultimate',
    title: '8-Day Serengeti Ultimate: "Wilderness Without Limits"',
    description: 'Majestic Trails\' 8-day deep-dive into every Serengeti corner—north to south, dawn to dusk.',
    overview: 'Majestic Trails\' 8-day deep-dive into every Serengeti corner—north to south, dawn to dusk—for immersive souls craving the park\'s full symphony.',
    price: 3500,
    groupPrice: 2900,
    duration: '8 days/7 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-ultimate.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-8day-ultimate/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-8day-ultimate/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-8day-ultimate/main.jpeg',
      alt: '8-Day Serengeti Ultimate covering every corner of the park'
    },
    location: 'Serengeti National Park',
    highlights: ['Full Park Coverage', 'Night Drives', 'Walking Safari', 'Cultural Immersion', 'Photography Focus'],
    rating: 4.9,
    reviewCount: 56,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Northern Serengeti',
        description: 'Transfer to Northern Serengeti for migration focus.',
        activities: ['Northern transfer', 'Initial game drive', 'Camp orientation'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Northern Serengeti Camp'
      },
      {
        day: 2,
        title: 'Northern Migration Crossings',
        description: 'Focus on Mara River crossings and crocodile action.',
        activities: ['River crossing viewing', 'Predator action', 'Full day safari'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Northern Serengeti Camp'
      },
      {
        day: 3,
        title: 'Central Serengeti Kopjes',
        description: 'Central plains exploration—leopards and kopjes.',
        activities: ['Kopjes exploration', 'Leopard tracking', 'Landscape photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Central Serengeti Camp'
      },
      {
        day: 4,
        title: 'Southern Calving Grounds',
        description: 'Southern plains—calving season focus (Jan-Mar).',
        activities: ['Calving grounds visit', 'Newborn wildlife', 'Predator-prey dynamics'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Southern Serengeti Camp'
      },
      {
        day: 5,
        title: 'Nocturnal Wildlife',
        description: 'Night drive—aardvarks, servals and nocturnal species.',
        activities: ['Night game drive', 'Nocturnal wildlife', 'Spotlight photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Central Serengeti Camp'
      },
      {
        day: 6,
        title: 'Walking Safari Experience',
        description: 'Walking safari—tracks, termites and close nature connection.',
        activities: ['Guided walking safari', 'Track identification', 'Bushcraft skills'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Pioneer Camp'
      },
      {
        day: 7,
        title: 'Full Park Loop & Culture',
        description: 'Full-park loop; cultural immersion with local communities.',
        activities: ['Panoramic game drive', 'Cultural immersion', 'Traditional activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Pioneer Camp'
      },
      {
        day: 8,
        title: 'Dawn Finale & Departure',
        description: 'Dawn finale game drive; Arusha return.',
        activities: ['Sunrise game drive', 'Final photography', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Dedicated guide',
      'Themed meals',
      'Night drives',
      'Walking safari',
      'Photography tips',
      'Cultural immersion',
      'All park fees'
    ],
    exclusions: [
      'Personal extras',
      'Specialty drinks',
      'Optional balloon safari',
      'Tips'
    ],
    accommodations: 'Serengeti Pioneer Camp—luxury tents, 360° views, bush spa',
    experience: 'Every migration phase, nocturnal secrets, walking among giants—Serengeti unfiltered.'
  },
  {
    id: 'serengeti-8day-family',
    title: '8-Day Serengeti Family Quest: "Wild Wonders for All Ages"',
    description: 'Majestic Trails crafts 8 days of gentle thrills and joyful discoveries for families.',
    overview: 'Majestic Trails crafts 8 days of gentle thrills and joyful discoveries for families—turning the Serengeti into a giant playground of wonder.',
    price: 3200,
    familyPrice: 2600,
    duration: '8 days/7 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-family.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-8day-family/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-8day-family/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-8day-family/main.jpeg',
      alt: '8-Day Serengeti Family Quest designed for families with kids'
    },
    location: 'Serengeti National Park',
    highlights: ['Family-Friendly', 'Junior Guide', 'Animal Bingo', 'Bushcraft', 'Star Stories'],
    rating: 4.8,
    reviewCount: 42,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'family',
    itinerary: [
      {
        day: 1,
        title: 'Arusha Launch & Central Herds',
        description: 'Family-friendly transfer to Serengeti; central herds introduction.',
        activities: ['Family orientation', 'Gentle game drive', 'Wildlife introduction'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 2,
        title: 'Migration & Big Cats',
        description: 'Migration viewing and big cat spotting with animal bingo.',
        activities: ['Migration viewing', 'Big cat tracking', 'Animal bingo game'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 3,
        title: 'Continue Wildlife Adventure',
        description: 'Continued wildlife exploration and family activities.',
        activities: ['Game drives', 'Educational activities', 'Wildlife crafts'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 4,
        title: 'Predator Focus & Games',
        description: 'Predator behavior focus with interactive games.',
        activities: ['Predator tracking', 'Interactive games', 'Bush skills'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 5,
        title: 'Night Drive & Glow Animals',
        description: 'Night drive with glow animals and nocturnal discoveries.',
        activities: ['Night game drive', 'Nocturnal wildlife', 'Glow-in-dark activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 6,
        title: 'Bushcraft & Maasai Songs',
        description: 'Bushcraft skills and Maasai cultural songs.',
        activities: ['Bushcraft workshop', 'Maasai songs', 'Cultural exchange'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 7,
        title: 'Star Stories & Sundowner',
        description: 'African star stories and family sundowner.',
        activities: ['Star gazing', 'African stories', 'Family sundowner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Serengeti Acacia Camp'
      },
      {
        day: 8,
        title: 'Morning Fun & Return',
        description: 'Morning wildlife fun and return to Arusha.',
        activities: ['Final game drive', 'Kids activities', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Junior guide',
      'Kid-friendly meals',
      'Family games',
      'Educational activities',
      'All park fees',
      'Child-friendly accommodation',
      'Cultural activities'
    ],
    exclusions: [
      'Toys',
      'Special snacks',
      'Personal expenses',
      'Tips'
    ],
    accommodations: 'Serengeti Acacia Camp—family tents, pool, kids\' menus',
    experience: 'Playful cubs, zebra parades, 500 birds—plus KILI\'s games that spark lifelong love for the wild.'
  },

  // ========== SERENGETI DAY TRIPS & SHORT SAFARIS ==========
  {
    id: 'serengeti-1day-spark',
    title: '1-Day Serengeti Spark: "Migration in a Flash"',
    description: 'Majestic Trails\' one-day whirlwind into Serengeti\'s core—Big Five blitz for time-pressed dreamers.',
    overview: 'Majestic Trails\' one-day whirlwind into Serengeti\'s core—Big Five blitz for time-pressed dreamers.',
    price: 650,
    groupPrice: 550,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/serengeti-spark.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-1day-spark/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-1day-spark/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-1day-spark/main.jpeg',
      alt: '1-Day Serengeti Spark quick safari with Big Five viewing'
    },
    location: 'Serengeti National Park',
    highlights: ['Big Five Blitz', 'Flight Included', 'Full Day Safari', 'Expert Guide', 'Lunch Included'],
    rating: 4.6,
    reviewCount: 78,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Full Day Serengeti Experience',
        description: 'Morning flight from Arusha; 5hr game drive—herds, cats; afternoon return.',
        activities: ['Scenic flight', 'Full day game drive', 'Big Five viewing', 'Return flight'],
        meals: ['Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Return flights Arusha-Serengeti',
      'Expert guide',
      'Lunch',
      'Park fees',
      'Game drives',
      'Bottled water'
    ],
    exclusions: [
      'Personal drinks',
      'Tips',
      'Extra activities'
    ],
    experience: 'One day of migration fire and Big Five encounters in Africa\'s most famous park.'
  },
  {
    id: 'serengeti-2day-teaser',
    title: '2-Day Serengeti Teaser: "Plains at Dawn & Dusk"',
    description: 'Overnight taste of Serengeti\'s golden hours and magical moments.',
    overview: 'Overnight taste of Serengeti\'s golden hours and magical moments.',
    price: 1100,
    groupPrice: 950,
    duration: '2 days/1 night',
    difficulty: 'Easy',
    image: '/images/serengeti-teaser.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-2day-teaser/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-2day-teaser/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-2day-teaser/main.jpeg',
      alt: '2-Day Serengeti Teaser overnight safari capturing dawn and dusk'
    },
    location: 'Serengeti National Park',
    highlights: ['Golden Hour Photography', 'Overnight Stay', 'Sunrise/Sunset Drives', 'Camp Experience'],
    rating: 4.5,
    reviewCount: 63,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Afternoon Arrival & Drive',
        description: 'Flight to Serengeti; afternoon game drive and camp arrival.',
        activities: ['Scenic flight', 'Afternoon game drive', 'Camp setup', 'Evening wildlife'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Serengeti Tented Camp'
      },
      {
        day: 2,
        title: 'Dawn Game & Return',
        description: 'Dawn game drive for sunrise action; return flight to Arusha.',
        activities: ['Sunrise game drive', 'Morning wildlife', 'Return flight', 'Safari debrief'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Return flights',
      'All meals',
      'Tented camp accommodation',
      'Game drives',
      'Park fees',
      'Guide services'
    ],
    exclusions: [
      'Personal expenses',
      'Tips',
      'Extra activities'
    ],
    accommodations: 'Comfortable tented camp with basic amenities',
    experience: 'Two days of plains magic at the most beautiful times of day.'
  },
  {
    id: 'serengeti-3day-trail',
    title: '3-Day Serengeti Trail: "Migration\'s Edge"',
    description: '3-day trail into Serengeti\'s wild heart along the migration routes.',
    overview: '3-day trail into Serengeti\'s wild heart along the migration routes.',
    price: 1600,
    groupPrice: 1350,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-trail.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-3day-trail/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-3day-trail/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-3day-trail/main.jpeg',
      alt: '3-Day Serengeti Trail following the Great Migration routes'
    },
    location: 'Serengeti National Park',
    highlights: ['Migration Routes', 'Central & Western Serengeti', 'River Viewing', 'Full Safari Experience'],
    rating: 4.7,
    reviewCount: 51,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Central Serengeti Herds',
        description: 'Transfer to Central Serengeti; focus on central herds and predators.',
        activities: ['Central plains drive', 'Herds viewing', 'Predator tracking', 'Camp arrival'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Central Serengeti Camp'
      },
      {
        day: 2,
        title: 'Western River Action',
        description: 'Western corridor exploration—Grumeti River and crocodile viewing.',
        activities: ['Western corridor drive', 'River viewing', 'Crocodile spotting', 'Full day safari'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Western Serengeti Camp'
      },
      {
        day: 3,
        title: 'Morning Finale & Return',
        description: 'Morning game drive finale; return to Arusha.',
        activities: ['Morning game drive', 'Final wildlife viewing', 'Return transfer', 'Safari conclusion'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'All transfers',
      'Meals as specified',
      'Camp accommodation',
      'Game drives',
      'Park fees',
      'Professional guide'
    ],
    exclusions: [
      'Personal items',
      'Tips',
      'Optional activities'
    ],
    accommodations: 'Mobile tented camps in prime locations',
    experience: 'Three days on migration\'s edge with front-row seats to nature\'s greatest show.'
  },
  {
    id: 'serengeti-3day-serenity',
    title: '3-Day Serengeti Serenity: "Golden Silence"',
    description: '3-day escape into Serengeti\'s tranquil corners away from crowds.',
    overview: '3-day escape into Serengeti\'s tranquil corners away from crowds.',
    price: 1550,
    groupPrice: 1300,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/serengeti-serenity.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-3day-serenity/main.jpg',
      mobile: '/images/tours/serengeti/serengeti-3day-serenity/main.jpg',
      thumbnail: '/images/tours/serengeti/serengeti-3day-serenity/main.jpg',
      alt: '3-Day Serengeti Serenity peaceful safari in less-visited areas'
    },
    location: 'Serengeti National Park',
    highlights: ['Tranquil Locations', 'Sunset Sundowners', 'Luxury Camp', 'Peaceful Game Drives'],
    rating: 4.6,
    reviewCount: 47,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'serengeti',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Southern Plains Tranquility',
        description: 'Transfer to Southern Serengeti; peaceful plains exploration.',
        activities: ['Southern plains drive', 'Tranquil wildlife viewing', 'Sunset viewing', 'Luxury camp arrival'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Luxury Serengeti Camp'
      },
      {
        day: 2,
        title: 'Central Silence & Solitude',
        description: 'Central Serengeti exploration in less-visited areas.',
        activities: ['Quiet game drives', 'Landscape appreciation', 'Sundowner experience', 'Stargazing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Serengeti Camp'
      },
      {
        day: 3,
        title: 'Dawn Peace & Return',
        description: 'Peaceful dawn game drive and return to Arusha.',
        activities: ['Sunrise game drive', 'Final tranquil moments', 'Return transfer', 'Relaxed conclusion'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Luxury camp accommodation',
      'All meals',
      'Sundowner drinks',
      'Game drives',
      'Park fees',
      'Professional guide'
    ],
    exclusions: [
      'Premium drinks',
      'Personal purchases',
      'Tips',
      'Extra activities'
    ],
    accommodations: 'Luxury tented camp with premium amenities',
    experience: 'Three days of golden serenity in Africa\'s most peaceful wilderness areas.'
  },

  // ========== TARANGIRE SAFARI PACKAGES - PHASE 1: MULTI-DAY SAFARIS ==========
  {
    id: 'tarangire-explorer-3days',
    title: 'The Tarangire Explorer - 3 Days/2 Nights',
    description: 'Experience Tarangire\'s elephant super herds and ancient baobab landscapes in this immersive 3-day safari adventure.',
    overview: 'Begin your adventure with afternoon game drive through Tarangire\'s diverse ecosystems. Encounter massive elephant herds, graceful giraffes, and elusive leopards. Watch the sunset behind ancient baobabs as wildlife gathers at the river.',
    price: 890,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/tarangire-explorer.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-explorer-3days/main.jpeg',
      mobile: '/images/tours/tarangire/tarangire-explorer-3days/main.jpeg',
      thumbnail: '/images/tours/tarangire/tarangire-explorer-3days/main.jpeg',
      alt: '3-Day Tarangire Explorer safari with elephant herds and baobab trees'
    },
    location: 'Tarangire National Park',
    highlights: ['Elephant Super Herds', 'Baobab Landscapes', 'Diverse Birdlife', 'Intimate Safari Experience', 'Sunset Game Drives'],
    rating: 4.8,
    reviewCount: 34,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & First Safari',
        description: 'Begin your adventure with afternoon game drive through Tarangire\'s diverse ecosystems. Encounter massive elephant herds, graceful giraffes, and elusive leopards. Watch the sunset behind ancient baobabs as wildlife gathers at the river.',
        activities: ['Afternoon game drive', 'Elephant herd viewing', 'Sunset photography', 'Wildlife at river'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 2,
        title: 'Full Day Tarangire Exploration',
        description: 'Dawn game drive captures predators during active hunting hours. Explore Silale Swamp, where elephants dig for underground water. Picnic lunch under acacia trees, then afternoon drive through the park\'s southern sections where buffalo herds and rare antelopes roam.',
        activities: ['Dawn game drive', 'Silale Swamp exploration', 'Picnic lunch', 'Southern section safari', 'Predator tracking'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 3,
        title: 'Morning Safari & Departure',
        description: 'Final early morning game drive for last wildlife encounters and bird watching—spot the endemic yellow-collared lovebird. Return to lodge for breakfast, then transfer to Arusha with memories of Africa\'s elephant paradise.',
        activities: ['Morning game drive', 'Bird watching', 'Yellow-collared lovebird spotting', 'Breakfast at lodge'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional safari guide',
      'All park entrance fees',
      'Accommodation at Tarangire Sopa Lodge',
      'All meals as specified',
      '4x4 safari vehicle',
      'Bottled water during game drives',
      'Government taxes and VAT'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa fees',
      'Travel insurance',
      'Personal expenses and tips',
      'Alcoholic beverages',
      'Optional activities'
    ],
    accommodations: 'Tarangire Sopa Lodge - Mid-range option with pool and stunning views',
    experience: 'Elephant super herds, baobab landscapes, diverse birdlife, and intimate safari experience away from crowds.'
  },
  {
    id: 'tarangire-immersion-4days',
    title: 'The Tarangire Immersion - 4 Days/3 Nights',
    description: 'Deep dive into Tarangire\'s wilderness with luxury tented camp experience, walking safari, and Maasai cultural visit.',
    overview: 'Afternoon arrival followed by sunset game drive. Spot elephants bathing in the Tarangire River while hippos grunt in the shallows. Introduction to the park\'s unique ecosystem and wildlife patterns.',
    price: 1340,
    duration: '4 days/3 nights',
    difficulty: 'Easy',
    image: '/images/tarangire-immersion.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-immersion-4days/main.jpeg',
      mobile: '/images/tours/tarangire/tarangire-immersion-4days/main.jpeg',
      thumbnail: '/images/tours/tarangire/tarangire-immersion-4days/main.jpeg',
      alt: '4-Day Tarangire Immersion with walking safari and luxury tented camp'
    },
    location: 'Tarangire National Park',
    highlights: ['Walking Safari', 'Maasai Cultural Visit', 'Luxury Tented Camp', 'Photography Focus', 'Sundowner Experience'],
    rating: 4.9,
    reviewCount: 28,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Elephant Country',
        description: 'Afternoon arrival followed by sunset game drive. Spot elephants bathing in the Tarangire River while hippos grunt in the shallows. Introduction to the park\'s unique ecosystem and wildlife patterns.',
        activities: ['Sunset game drive', 'Elephant river viewing', 'Sundowner drinks', 'Wildlife briefing'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 2,
        title: 'Deep Tarangire Exploration',
        description: 'Full day safari with picnic lunch in the bush. Track lions through acacia woodlands, observe zebra and wildebeest migrations, and discover hidden waterholes teeming with life. Visit the termite mound landscape where dwarf mongooses make their homes.',
        activities: ['Full day game drive', 'Predator tracking', 'Bush picnic', 'Termite mound exploration', 'Wildlife photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 3,
        title: 'Walking Safari & Maasai Culture',
        description: 'Morning walking safari with armed ranger—experience the bush on foot, learning animal tracks and medicinal plants. Afternoon visit to authentic Maasai village to understand traditional pastoralist culture. Evening game drive targeting predators.',
        activities: ['Walking safari', 'Maasai village visit', 'Cultural exchange', 'Evening game drive', 'Track identification'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 4,
        title: 'Final Wildlife Encounters',
        description: 'Early bird watching safari—Tarangire hosts over 550 species including kori bustards and martial eagles. Brunch at lodge, final game drive enroute to exit, then transfer to Arusha with comprehensive safari memories.',
        activities: ['Bird watching safari', 'Final game drive', 'Brunch at lodge', 'Wildlife photography'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional English-speaking safari guide',
      'Luxury tented camp accommodation',
      'All park entrance fees',
      'Walking safari with armed ranger',
      'Maasai cultural village visit',
      'All meals and bottled water',
      '4x4 safari vehicle with pop-up roof'
    ],
    exclusions: [
      'International flights',
      'Visa fees ($50-100)',
      'Travel insurance',
      'Personal expenses and tips',
      'Alcoholic beverages',
      'Optional activities unless specified'
    ],
    accommodations: 'Tarangire Treetops - Luxury tented camp with exceptional service and wilderness atmosphere',
    experience: 'Walking safari, Maasai cultural visit, photography-focused game drives, and luxury bush experience in Tarangire\'s pristine wilderness.'
  },
  {
    id: 'grand-tarangire-6days',
    title: 'The Grand Tarangire Safari - 6 Days/5 Nights',
    description: 'Ultimate immersive Tarangire experience with remote wilderness camping, night safaris, and exclusive access to rarely visited areas.',
    overview: 'Afternoon game drive introduction to Tarangire\'s wonders. Settle into luxury tented camp, evening wildlife briefing with expert guide, and starlit dinner in the bush.',
    price: 2450,
    duration: '6 days/5 nights',
    difficulty: 'Moderate',
    image: '/images/grand-tarangire.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/grand-tarangire-6days/main.jpeg',
      mobile: '/images/tours/tarangire/grand-tarangire-6days/main.jpeg',
      thumbnail: '/images/tours/tarangire/grand-tarangire-6days/main.jpeg',
      alt: '6-Day Grand Tarangire Safari with remote wilderness camping'
    },
    location: 'Tarangire National Park',
    highlights: ['Remote Wilderness Camping', 'Night Safaris', 'Expert Naturalist Guides', 'Photography Focus', 'Exclusive Access'],
    rating: 5.0,
    reviewCount: 19,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Orientation',
        description: 'Afternoon game drive introduction to Tarangire\'s wonders. Settle into luxury tented camp, evening wildlife briefing with expert guide, and starlit dinner in the bush.',
        activities: ['Afternoon game drive', 'Camp orientation', 'Wildlife briefing', 'Starlit dinner'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 2,
        title: 'Southern Tarangire Wilderness',
        description: 'Journey to rarely visited southern regions where wildlife encounters feel exclusive. Track endangered wild dogs, observe massive buffalo herds, and explore seasonal swamps. Bush lunch under shady trees.',
        activities: ['Southern wilderness exploration', 'Wild dog tracking', 'Buffalo herd viewing', 'Bush lunch', 'Seasonal swamp visit'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Exclusive Mobile Camp'
      },
      {
        day: 3,
        title: 'Walking Safari & Bush Skills',
        description: 'Extended walking safari learning survival skills, animal behavior, and ecosystem interconnections. Afternoon at leisure or optional additional game drive. Night game drive seeking nocturnal species like aardvarks, civets, and honey badgers.',
        activities: ['Extended walking safari', 'Bush skills training', 'Night game drive', 'Nocturnal wildlife spotting'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Exclusive Mobile Camp'
      },
      {
        day: 4,
        title: 'Silale Swamp & Baobab Circuit',
        description: 'Focus on the famous Silale Swamp where elephant herds congregate. Photograph ancient baobabs estimated at 1,500 years old. Track tree-climbing pythons and observe rare antelopes like fringe-eared oryx. Sunset at panoramic viewpoint.',
        activities: ['Silale Swamp exploration', 'Baobab photography', 'Python tracking', 'Rare antelope viewing', 'Panoramic sunset'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Exclusive Mobile Camp'
      },
      {
        day: 5,
        title: 'Photography & Special Interests',
        description: 'Customized day based on your interests—serious bird watching, predator tracking, or photography masterclass. Access to exclusive areas with expert naturalist guide. Bush breakfast and sundowner experience at secret location.',
        activities: ['Customized activities', 'Photography masterclass', 'Bush breakfast', 'Exclusive area access', 'Sundowner experience'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 6,
        title: 'Farewell Safari',
        description: 'Final early morning game drive capturing any missed species. Leisurely breakfast, last wildlife encounters, then transfer to Arusha. Depart with comprehensive understanding of Tarangire\'s ecosystem and unforgettable memories.',
        activities: ['Morning game drive', 'Leisurely breakfast', 'Final wildlife viewing', 'Ecosystem debrief'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Expert naturalist guide',
      'Mix of luxury tented camp and exclusive mobile camping',
      'All park fees and special permits',
      'Night game drives',
      'Walking safaris with armed rangers',
      'All meals including bush dinners',
      'Professional photography guidance',
      'Exclusive access to remote areas'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Personal photography equipment',
      'Premium alcoholic beverages',
      'Personal expenses and tips'
    ],
    accommodations: 'Mix of Tarangire Treetops and exclusive mobile camping in remote wilderness areas',
    experience: 'Remote wilderness camping, night safaris, expert naturalist guides, photography focus, exclusive access, and cultural immersion in Tarangire\'s most pristine areas.'
  },

  // ========== TARANGIRE SAFARI PACKAGES - PHASE 2: SHORT TRIP PACKAGES ==========
  {
    id: 'tarangire-day-safari',
    title: 'Tarangire Day Safari - 1 Day',
    description: 'Perfect for travelers with limited time. Full day adventure exploring Tarangire\'s diverse habitats from riverine forests to acacia woodlands.',
    overview: 'Perfect for travelers with limited time. Early morning departure reaches Tarangire by 8:30 AM for full day game driving. Hot lunch at lodge or picnic in the bush.',
    price: 220,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/tarangire-day-safari.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-day-safari/main.jpeg',
      mobile: '/images/tours/tarangire/tarangire-day-safari/main.jpeg',
      thumbnail: '/images/tours/tarangire/tarangire-day-safari/main.jpeg',
      alt: 'Day safari in Tarangire National Park with guaranteed elephant encounters'
    },
    location: 'Tarangire National Park',
    highlights: ['Convenient Day Trip', 'Maximum Wildlife in Minimum Time', 'Elephant Encounters Guaranteed', 'Comprehensive Park Tour', 'Hot Lunch Included'],
    rating: 4.6,
    reviewCount: 67,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Full Day Tarangire Adventure',
        description: 'Depart 6:00 AM from Arusha, reach Tarangire by 8:30 AM for full day game driving. Explore diverse habitats from riverine forests to acacia woodlands. Encounter elephants, lions, giraffes, and hundreds of bird species.',
        activities: ['Early morning departure', 'Full day game drive', 'Elephant herd viewing', 'Bird watching', 'Hot lunch'],
        meals: ['Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional English-speaking safari guide',
      '4x4 safari vehicle with pop-up roof',
      'All park entrance fees',
      'Hot lunch at lodge or picnic in bush',
      'Bottled water during game drives',
      'Government taxes and VAT',
      'Flying Doctor emergency evacuation insurance'
    ],
    exclusions: [
      'International flights',
      'Visa fees ($50-100)',
      'Travel insurance (highly recommended)',
      'Personal expenses and tips',
      'Alcoholic beverages',
      'Optional activities'
    ],
    experience: 'Convenient day trip with maximum wildlife viewing in minimum time. Elephant encounters guaranteed and comprehensive park tour covering all major habitats.'
  },
  {
    id: 'tarangire-weekend-escape',
    title: 'Tarangire Weekend Escape - 2 Days/1 Night',
    description: 'Perfect weekend getaway with sunset and sunrise safaris, relaxation time at comfortable lodge with swimming pool and river views.',
    overview: 'Perfect weekend getaway. Lunch enroute, afternoon game drive through prime wildlife areas. Watch elephants at river crossing points and track predators preparing for evening hunts.',
    price: 485,
    duration: '2 days/1 night',
    difficulty: 'Easy',
    image: '/images/tarangire-weekend.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-weekend-escape/main.jpg',
      mobile: '/images/tours/tarangire/tarangire-weekend-escape/main.jpg',
      thumbnail: '/images/tours/tarangire/tarangire-weekend-escape/main.jpg',
      alt: 'Weekend safari getaway in Tarangire with sunrise and sunset game drives'
    },
    location: 'Tarangire National Park',
    highlights: ['Perfect Weekend Getaway', 'Sunrise & Sunset Safaris', 'Relaxation Time at Lodge', 'Efficient Yet Comprehensive', 'Pool & River Views'],
    rating: 4.7,
    reviewCount: 42,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Afternoon Arrival & Sunset Safari',
        description: 'Lunch enroute, afternoon game drive through prime wildlife areas. Watch elephants at river crossing points, track predators preparing for evening hunts, and photograph golden-hour landscapes. Relaxed dinner at lodge overlooking wilderness.',
        activities: ['Afternoon game drive', 'Elephant river viewing', 'Predator tracking', 'Sunset photography', 'Lodge relaxation'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Safari Lodge'
      },
      {
        day: 2,
        title: 'Dawn Safari & Return',
        description: 'Early morning game drive catches animals at their most active—lions on kills, elephants feeding, and incredible bird activity. Bush breakfast experience. Final game drive exiting the park, lunch stop, return to Arusha by afternoon.',
        activities: ['Dawn game drive', 'Bush breakfast', 'Morning wildlife activity', 'Final game drive', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional safari guide',
      'Comfortable mid-range accommodation',
      'All park entrance fees',
      'All meals as specified',
      '4x4 safari vehicle',
      'Bottled water during drives',
      'Government taxes'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic drinks',
      'Optional activities'
    ],
    accommodations: 'Tarangire Safari Lodge - Comfortable mid-range with swimming pool and river views',
    experience: 'Perfect weekend getaway with sunrise and sunset safaris, relaxation time at lodge, and efficient yet comprehensive Tarangire experience.'
  },
  {
    id: 'tarangire-express-3days',
    title: 'Tarangire Express - 3 Days/2 Nights',
    description: 'Balanced wildlife and cultural experience with authentic tented camp atmosphere and comprehensive Tarangire understanding.',
    overview: 'Afternoon arrival, settle into comfortable tented camp. Evening game drive focusing on predators and elephant herds gathering for the night.',
    price: 765,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/tarangire-express.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-express-3days/main.jpeg',
      mobile: '/images/tours/tarangire/tarangire-express-3days/main.jpeg',
      thumbnail: '/images/tours/tarangire/tarangire-express-3days/main.jpeg',
      alt: '3-Day Tarangire Express with authentic tented camp experience'
    },
    location: 'Tarangire National Park',
    highlights: ['Balanced Wildlife & Culture', 'Authentic Tented Camp Experience', 'Comprehensive But Concise', 'Maasai Cultural Visit', 'Bush Dinner Option'],
    rating: 4.5,
    reviewCount: 38,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Game Drive',
        description: 'Afternoon arrival, settle into comfortable tented camp. Evening game drive focusing on predators and elephant herds gathering for the night. Dinner under African stars.',
        activities: ['Camp arrival', 'Evening game drive', 'Predator tracking', 'Elephant herd viewing', 'Starlit dinner'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Sangaiwe Tented Camp'
      },
      {
        day: 2,
        title: 'Full Tarangire Experience',
        description: 'Entire day exploring diverse park regions. Morning focuses on predators and large mammals, afternoon targets unique species and birds. Picnic lunch at scenic viewpoint. Optional bush dinner experience available.',
        activities: ['Full day game drive', 'Predator focus', 'Bird watching', 'Picnic lunch', 'Optional bush dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Sangaiwe Tented Camp'
      },
      {
        day: 3,
        title: 'Morning Safari & Culture',
        description: 'Final game drive emphasizing any missed sightings. Visit local Maasai community for cultural exchange. Return to Arusha with complete Tarangire understanding and cultural insights.',
        activities: ['Morning game drive', 'Maasai village visit', 'Cultural exchange', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional guide',
      'Authentic tented camp accommodation',
      'All park fees',
      'All meals as specified',
      'Maasai cultural village visit',
      '4x4 safari vehicle',
      'Bottled water'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Optional bush dinner',
      'Tips'
    ],
    accommodations: 'Sangaiwe Tented Camp - Authentic safari atmosphere outside park with easy access',
    experience: 'Balanced wildlife and cultural experience with authentic tented camp atmosphere, comprehensive Tarangire understanding, and meaningful cultural insights.'
  },

  // ========== TARANGIRE SAFARI PACKAGES - PHASE 3: SPECIALIZED PACKAGES ==========
  {
    id: 'tarangire-family-adventure',
    title: 'Tarangire Family Adventure - 4 Days/3 Nights',
    description: 'Family-focused safari with child-friendly activities, educational programs, and flexible scheduling for all ages.',
    overview: 'Gentle afternoon game drive introduction. Children receive safari activity books and binoculars. Spot elephants, giraffes, and zebras—animals that fascinate young explorers.',
    price: 1180,
    familyPrice: 890,
    duration: '4 days/3 nights',
    difficulty: 'Easy',
    image: '/images/tarangire-family.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-family-adventure/main.jpg',
      mobile: '/images/tours/tarangire/tarangire-family-adventure/main.jpg',
      thumbnail: '/images/tours/tarangire/tarangire-family-adventure/main.jpg',
      alt: 'Family-friendly Tarangire safari with educational activities for children'
    },
    location: 'Tarangire National Park',
    highlights: ['Child-Friendly Activities', 'Educational Programs', 'Flexible Scheduling', 'Family Bonding', 'Safe Environment', 'Junior Ranger Program'],
    rating: 4.9,
    reviewCount: 56,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'family',
    itinerary: [
      {
        day: 1,
        title: 'Family Safari Begins',
        description: 'Gentle afternoon game drive introduction. Children receive safari activity books and binoculars. Spot elephants, giraffes, and zebras—animals that fascinate young explorers. Pool time at lodge.',
        activities: ['Family orientation', 'Gentle game drive', 'Safari activity books', 'Animal spotting', 'Pool time'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 2,
        title: 'Junior Ranger Program',
        description: 'Morning game drive with educational focus—animal tracks, behaviors, and ecosystem lessons. Lunch and pool time. Afternoon visit to Maasai village where children interact with Maasai peers, learn traditional games and customs.',
        activities: ['Educational game drive', 'Animal track lessons', 'Maasai village visit', 'Traditional games', 'Pool time'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 3,
        title: 'Full Family Exploration',
        description: 'Flexible full day with picnic lunch. Focus on family photography, wildlife identification games, and interactive learning. Short guided nature walk suitable for children to experience bush safely.',
        activities: ['Flexible game drive', 'Family photography', 'Wildlife games', 'Guided nature walk', 'Interactive learning'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 4,
        title: 'Final Adventures',
        description: 'Morning game drive seeking any animals missed. Family bush breakfast experience. Children complete their junior ranger certificates. Transfer to Arusha with family memories lasting lifetime.',
        activities: ['Morning game drive', 'Family bush breakfast', 'Junior ranger certificates', 'Final wildlife viewing'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private vehicle with family-friendly guide',
      'Family-friendly accommodation',
      'All park entrance fees',
      'Educational wildlife activities',
      'Safari journals and binoculars for kids',
      'Junior ranger program',
      'All meals with child-friendly options',
      'Maasai cultural village visit'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Special snacks and toys',
      'Tips'
    ],
    accommodations: 'Tarangire Sopa Lodge - Family-friendly with spacious rooms, pool, and child-safe environment',
    experience: 'Child-friendly activities, educational programs, flexible scheduling, family bonding in wilderness, safe environment, and memorable experiences for all ages.'
  },
  {
    id: 'tarangire-group-adventure',
    title: 'Tarangire Group Adventure - 5 Days/4 Nights',
    description: 'Team bonding experiences with flexible group activities, shared adventures, and celebratory atmosphere for groups of 6-12 people.',
    overview: 'Group bonding starts with afternoon game drive and sundowner drinks. Team wildlife spotting competitions begin. Camp setup with welcome dinner around campfire sharing safari expectations.',
    price: 1590,
    duration: '5 days/4 nights',
    difficulty: 'Easy',
    image: '/images/tarangire-group.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/tarangire/tarangire-group-adventure/main.jpg',
      mobile: '/images/tours/tarangire/tarangire-group-adventure/main.jpg',
      thumbnail: '/images/tours/tarangire/tarangire-group-adventure/main.jpg',
      alt: 'Group adventure in Tarangire with team bonding and shared experiences'
    },
    location: 'Tarangire National Park',
    highlights: ['Team Bonding Experiences', 'Flexible Group Activities', 'Shared Adventures', 'Celebratory Atmosphere', 'Cost-Effective for Groups', 'Private Experiences'],
    rating: 4.8,
    reviewCount: 31,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'tarangire',
    tourStyle: 'group',
    itinerary: [
      {
        day: 1,
        title: 'Group Orientation & Welcome Safari',
        description: 'Group bonding starts with afternoon game drive and sundowner drinks. Team wildlife spotting competitions begin. Camp setup with welcome dinner around campfire sharing safari expectations.',
        activities: ['Group orientation', 'Afternoon game drive', 'Sundowner drinks', 'Wildlife competitions', 'Campfire dinner'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Private Group Camping'
      },
      {
        day: 2,
        title: 'Full Group Exploration',
        description: 'Extensive game drives with photo challenges and wildlife bingo for fun group participation. Bush lunch at exclusive location. Afternoon split options: more game driving or relaxation at camp.',
        activities: ['Full day game drive', 'Photo challenges', 'Wildlife bingo', 'Bush lunch', 'Group activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Private Group Camping'
      },
      {
        day: 3,
        title: 'Adventure Day',
        description: 'Morning walking safari in groups with armed rangers—team challenge identifying tracks and birds. Return for brunch. Afternoon cultural visit to Maasai village with group participation in traditional activities.',
        activities: ['Walking safari', 'Track identification', 'Maasai village visit', 'Traditional activities', 'Group challenges'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Private Group Camping'
      },
      {
        day: 4,
        title: 'Wilderness Immersion',
        description: 'Full day focusing on group interests—photography enthusiasts get special stops, bird watchers target specific species, adventure seekers explore remote areas. Private bush dinner with traditional Tanzanian entertainment.',
        activities: ['Customized game drive', 'Photography focus', 'Bird watching', 'Remote exploration', 'Bush dinner with entertainment'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Private Group Camping'
      },
      {
        day: 5,
        title: 'Celebration & Departure',
        description: 'Final sunrise game drive with coffee in the bush. Group breakfast celebration with certificate presentation. Last wildlife encounters exiting park. Group photo opportunities at iconic baobab locations.',
        activities: ['Sunrise game drive', 'Bush coffee', 'Group celebration', 'Certificate presentation', 'Group photos'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private customized safari vehicle',
      'Dedicated guide and camp crew',
      'Private group camping accommodation',
      'All park fees and permits',
      'Flexible itinerary based on group interests',
      'Team-building activities',
      'Private bush dining experiences',
      'Traditional Tanzanian entertainment'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Premium alcoholic beverages',
      'Tips for crew'
    ],
    accommodations: 'Private group camping with dedicated camp crew and chef - Exclusive wilderness experience',
    experience: 'Team bonding experiences, flexible group activities, shared adventures, celebratory atmosphere, cost-effective for groups, private experiences, and memorable group moments in Tarangire wilderness.'
  },

  // ========== NGORONGORO SAFARI PACKAGES ==========
  // Multi-Day Ngorongoro Safaris
  {
    id: 'ngorongoro-classic-3days',
    title: 'Ngorongoro Classic - 3 Days/2 Nights',
    description: 'Eden\'s Timeless Stage Awaits. Experience the world\'s largest intact volcanic caldera with its incredible wildlife density and breathtaking landscapes.',
    overview: 'Journey from Arusha through the scenic highlands. Afternoon visit to a Maasai village on the crater rim to understand traditional culture and see how communities coexist with wildlife.',
    price: 1150,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-classic.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-classic-3days/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-classic-3days/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-classic-3days/main.jpeg',
      alt: 'Classic 3-day Ngorongoro Crater safari with Big Five viewing'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Big Five in one day', 'Black rhino sightings', 'Crater rim views', 'Archaeological history', 'Maasai cultural interaction'],
    rating: 4.9,
    reviewCount: 127,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Crater Rim Exploration',
        description: 'Journey from Arusha through the scenic highlands. Afternoon visit to a Maasai village on the crater rim to understand traditional culture and see how communities coexist with wildlife. Evening at your lodge watching the sunset over the crater—one of Africa\'s most stunning vistas.',
        activities: ['Scenic highland drive', 'Maasai village visit', 'Crater rim sunset', 'Cultural exchange'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Rhino Lodge / Ngorongoro Wildlife Lodge'
      },
      {
        day: 2,
        title: 'Full Day Crater Floor Safari',
        description: 'Pre-dawn descent into the crater for unforgettable wildlife encounters. Morning is prime time for predator activity—spot lions, hyenas, and possibly the rare black rhino. Explore Lake Magadi\'s flamingo populations and hippo pools. Picnic lunch at hippo pool viewpoint.',
        activities: ['Crater descent', 'Predator tracking', 'Lake Magadi visit', 'Hippo pool viewing', 'Black rhino spotting'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Rhino Lodge / Ngorongoro Wildlife Lodge'
      },
      {
        day: 3,
        title: 'Olduvai Gorge & Departure',
        description: 'Morning visit to Olduvai Gorge Museum, the archaeological site where human evolution evidence was discovered. Learn about our ancestors who lived here 2 million years ago. Optional stop at Maasai craft market. Scenic drive back to Arusha through the Great Rift Valley.',
        activities: ['Olduvai Gorge visit', 'Archaeological exploration', 'Museum tour', 'Great Rift Valley drive'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional English-speaking safari guide',
      '4x4 safari Land Cruiser with pop-up roof',
      'All Ngorongoro Conservation Area fees',
      'Crater descent permits',
      'Accommodation as specified',
      'All meals indicated',
      'Bottled mineral water',
      'Government taxes and VAT'
    ],
    exclusions: [
      'International and domestic flights',
      'Tanzania visa fees ($50-100)',
      'Comprehensive travel insurance',
      'Personal expenses and tips',
      'Alcoholic and premium beverages',
      'Optional activities unless specified'
    ],
    accommodations: 'Ngorongoro Rhino Lodge / Ngorongoro Wildlife Lodge - Crater rim lodges with spectacular views into the caldera',
    experience: 'Big Five in one day, black rhino sightings, crater rim views, archaeological history, and authentic Maasai cultural interaction in one of Africa\'s most extraordinary natural wonders.'
  },
  {
    id: 'ngorongoro-discovery-4days',
    title: 'Ngorongoro Discovery - 4 Days/3 Nights',
    description: 'Luxury crater rim accommodation with extended exploration of Ngorongoro\'s diverse ecosystems and cultural heritage.',
    overview: 'Scenic drive through coffee plantations and highland villages. Afternoon arrival at crater rim with breathtaking first views. Guided walk along crater rim learning about the caldera\'s volcanic formation and ecology.',
    price: 1680,
    duration: '4 days/3 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-discovery.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-discovery-4days/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-discovery-4days/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-discovery-4days/main.jpeg',
      alt: '4-day Ngorongoro Discovery with luxury crater rim accommodation'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Luxury crater rim accommodation', 'Empakaai walking safari', 'Archaeological exploration', 'Extended crater time', 'Maasai cultural depth'],
    rating: 4.9,
    reviewCount: 89,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Highland Journey & Cultural Immersion',
        description: 'Scenic drive through coffee plantations and highland villages. Afternoon arrival at crater rim with breathtaking first views. Guided walk along crater rim learning about the caldera\'s volcanic formation and ecology. Visit authentic Maasai boma for cultural exchange.',
        activities: ['Highland scenic drive', 'Crater rim walk', 'Maasai boma visit', 'Cultural exchange', 'Traditional ceremonies'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Safari Lodge'
      },
      {
        day: 2,
        title: 'Crater Floor Expedition',
        description: 'Early morning descent into the crater. Extended full day exploring all crater habitats—grasslands, Lerai Forest, Gorigor Swamp, and Lake Magadi. Encounter massive elephant bulls with giant tusks, observe lion prides, track endangered black rhinos.',
        activities: ['Full crater exploration', 'Elephant tracking', 'Lion pride observation', 'Black rhino tracking', 'Bird diversity viewing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Safari Lodge'
      },
      {
        day: 3,
        title: 'Empakaai Crater & Walking Safari',
        description: 'Adventure to the less-visited Empakaai Crater, a stunning crater lake surrounded by steep forested walls. Guided walking safari descending into Empakaai—spot blue monkeys, bushbucks, and spectacular highland bird species.',
        activities: ['Empakaai Crater visit', 'Walking safari', 'Highland bird watching', 'Crater lake exploration', 'Pristine wilderness experience'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Safari Lodge'
      },
      {
        day: 4,
        title: 'Olduvai Gorge & Shifting Sands',
        description: 'Morning exploration of Olduvai Gorge with expert guide explaining paleontological discoveries. Visit museum showcasing fossil exhibits and human evolution timeline. Stop at Shifting Sands—unique volcanic dunes that move across the landscape.',
        activities: ['Olduvai Gorge exploration', 'Paleontological discoveries', 'Museum visit', 'Shifting Sands visit', 'Final scenic views'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional Ngorongoro specialist guide',
      'Luxury crater rim accommodation',
      'All conservation area fees and permits',
      'Walking safari with armed ranger',
      'All meals and bottled water',
      'Cultural village visits',
      'Archaeological site entries'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Premium beverages',
      'Optional activities'
    ],
    accommodations: 'Ngorongoro Serena Safari Lodge - Luxury lodge built into crater rim with stunning design and exceptional service',
    experience: 'Luxury crater rim accommodation, Empakaai walking safari, archaeological exploration, extended crater time, Maasai cultural depth, and pristine wilderness experience in Tanzania\'s most diverse conservation area.'
  },
  {
    id: 'ngorongoro-grand-explorer-6days',
    title: 'Ngorongoro Grand Explorer - 6 Days/5 Nights',
    description: 'World-class luxury accommodation with multiple crater descents, remote crater expeditions, and exclusive wilderness camping.',
    overview: 'Arrive at the legendary Ngorongoro Crater Lodge—often rated Africa\'s best safari lodge. Settle into opulent suite with butler service. Afternoon orientation walk along crater rim with naturalist guide.',
    price: 2890,
    duration: '6 days/5 nights',
    difficulty: 'Moderate',
    image: '/images/ngorongoro-grand-explorer.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-grand-explorer-6days/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-grand-explorer-6days/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-grand-explorer-6days/main.jpeg',
      alt: '6-day Ngorongoro Grand Explorer with multiple crater descents and luxury camping'
    },
    location: 'Ngorongoro Crater',
    highlights: ['World-class luxury accommodation', 'Multiple crater descents', 'Remote crater expeditions', 'Walking safaris', 'Archaeological depth'],
    rating: 5.0,
    reviewCount: 67,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Luxurious Arrival',
        description: 'Arrive at the legendary Ngorongoro Crater Lodge—often rated Africa\'s best safari lodge. Settle into opulent suite with butler service. Afternoon orientation walk along crater rim with naturalist guide. Champagne sundowner at viewpoint overlooking the crater.',
        activities: ['Luxury lodge arrival', 'Crater rim orientation', 'Naturalist guide briefing', 'Champagne sundowner', 'Gourmet dining'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Crater Lodge'
      },
      {
        day: 2,
        title: 'First Crater Descent',
        description: 'Early morning crater descent for prime wildlife viewing. Track black rhinos with expert guide who knows individual animals. Extended photography session with big cats. Observe elephant interactions and behavior. Picnic lunch in exclusive location.',
        activities: ['Crater descent', 'Black rhino tracking', 'Big cat photography', 'Elephant behavior study', 'Exclusive picnic'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Crater Lodge'
      },
      {
        day: 3,
        title: 'Olmoti Crater & Munge Waterfall',
        description: 'Adventure to remote Olmoti Crater on the conservation area\'s northern edge. Guided walking safari through highland grasslands where Maasai herd cattle among wildlife. Trek to spectacular Munge Waterfall cascading into the gorge.',
        activities: ['Olmoti Crater exploration', 'Walking safari', 'Munge Waterfall trek', 'Highland wildlife', 'Wilderness picnic'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Exclusive Highland Camping'
      },
      {
        day: 4,
        title: 'Empakaai Crater Expedition',
        description: 'Full day exploring Empakaai Crater—one of Tanzania\'s hidden gems. Descend 300 meters into this deep crater containing a beautiful soda lake. Walk along the lakeshore observing flamingos and waterfowl. Stunning views of Ol Doinyo Lengai volcano.',
        activities: ['Empakaai Crater descent', 'Lakeshore walking', 'Flamingo observation', 'Volcano views', 'Pristine wilderness'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Exclusive Highland Camping'
      },
      {
        day: 5,
        title: 'Second Crater Descent & Olduvai',
        description: 'Another crater floor safari exploring different areas and seeking any missed species. Focus on wildlife behavior and photography masterclass with your guide. Ascend and drive to Olduvai Gorge for extended archaeological exploration with specialist guide.',
        activities: ['Second crater descent', 'Wildlife behavior focus', 'Photography masterclass', 'Olduvai Gorge exploration', 'Archaeological specialist'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Crater Lodge'
      },
      {
        day: 6,
        title: 'Cultural Immersion & Farewell',
        description: 'Morning visit to traditional Maasai village participating in daily activities—cattle herding, beadwork lessons, warrior training demonstrations. Learn medicinal plant uses and traditional survival skills. Scenic farewell drive through highlands.',
        activities: ['Maasai village immersion', 'Cultural activities', 'Medicinal plant learning', 'Traditional skills', 'Farewell drive'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'World-class luxury accommodation',
      'Exclusive wilderness camping experience',
      'Multiple crater descent permits',
      'Expert naturalist and archaeological guides',
      'All meals including gourmet bush dinners',
      'Private butler service at luxury lodge',
      'Walking safaris with armed rangers',
      'All conservation area fees and permits'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal photography equipment',
      'Premium alcoholic beverages',
      'Personal expenses and tips'
    ],
    accommodations: 'Mix of Ngorongoro Crater Lodge (world\'s leading luxury lodge) and exclusive highland camping',
    experience: 'World-class luxury accommodation, multiple crater descents, remote crater expeditions, walking safaris, archaeological depth, authentic cultural immersion, exclusive wilderness camping, and photography focus in Africa\'s most spectacular natural amphitheater.'
  },

  // ========== NGORONGORO SHORT TRIP PACKAGES ==========
  {
    id: 'ngorongoro-day-crater-safari',
    title: 'Ngorongoro Day Crater Safari - 1 Day',
    description: 'Ultimate day trip for time-constrained travelers seeking Africa\'s most spectacular one-day safari experience.',
    overview: 'Perfect for time-constrained travelers seeking Africa\'s most spectacular one-day safari. Early departure arrives at crater rim by 7:30 AM for intensive game viewing.',
    price: 280,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/ngorongoro-day-safari.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-day-crater-safari/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-day-crater-safari/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-day-crater-safari/main.jpeg',
      alt: 'One-day Ngorongoro Crater safari with Big Five viewing'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Maximum wildlife minimum time', 'Big Five potential', 'World wonder visited', 'Efficient comprehensive experience', 'Guaranteed incredible sightings'],
    rating: 4.7,
    reviewCount: 156,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Full Day Crater Experience',
        description: 'Early departure (5:00 AM) from Arusha arrives at crater rim by 7:30 AM. Descend into the crater for five hours of intensive game viewing. Encounter Big Five in single location—lions, elephants, buffalos, rhinos, and possibly leopards. Hot picnic lunch at designated site.',
        activities: ['Early morning departure', 'Crater descent', 'Big Five viewing', 'Intensive game driving', 'Picnic lunch', 'Wildlife photography'],
        meals: ['Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional English-speaking safari guide',
      '4x4 safari Land Cruiser with pop-up roof',
      'All Ngorongoro Conservation Area fees',
      'Crater descent permit',
      'Hot picnic lunch',
      'Bottled mineral water throughout',
      'Government taxes and VAT'
    ],
    exclusions: [
      'International and domestic flights',
      'Tanzania visa fees',
      'Travel insurance',
      'Personal expenses and tips',
      'Alcoholic beverages',
      'Optional activities'
    ],
    experience: 'Maximum wildlife viewing in minimum time with Big Five potential, world wonder experience, and guaranteed incredible sightings in Africa\'s most concentrated wildlife area.'
  },
  {
    id: 'ngorongoro-weekend-escape',
    title: 'Ngorongoro Weekend Escape - 2 Days/1 Night',
    description: 'Perfect weekend adventure with crater rim accommodation and comprehensive crater tour at sunrise and sunset.',
    overview: 'Perfect weekend adventure. Afternoon arrival at crater rim lodge with welcome drinks overlooking the caldera. Short guided walk along rim learning about volcanic formation and ecosystems.',
    price: 650,
    duration: '2 days/1 night',
    difficulty: 'Easy',
    image: '/images/ngorongoro-weekend.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-weekend-escape/main.jpg',
      mobile: '/images/tours/ngorongoro/ngorongoro-weekend-escape/main.jpg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-weekend-escape/main.jpg',
      alt: 'Weekend getaway to Ngorongoro Crater with crater rim accommodation'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Perfect weekend adventure', 'Crater rim accommodation', 'Comprehensive crater tour', 'Sunrise and sunset experiences', 'Efficient yet thorough'],
    rating: 4.6,
    reviewCount: 89,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Crater Rim Arrival & Sunset Safari',
        description: 'Afternoon arrival at crater rim lodge. Check-in with welcome drinks overlooking the caldera. Short guided walk along rim learning about volcanic formation and ecosystems. Visit viewpoint for sunset photography—watch shadows fill the crater as wildlife moves below.',
        activities: ['Crater rim arrival', 'Welcome drinks', 'Guided rim walk', 'Sunset photography', 'Traditional Tanzanian dinner'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Wildlife Lodge'
      },
      {
        day: 2,
        title: 'Crater Descent & Return',
        description: 'Early morning descent into crater floor for extended game viewing. Comprehensive tour covering all major crater habitats and wildlife zones. Seek black rhinos, photograph lions, observe elephants, and explore Lake Magadi. Bush breakfast or picnic lunch.',
        activities: ['Crater descent', 'Extended game viewing', 'Black rhino tracking', 'Lake Magadi exploration', 'Bush breakfast/picnic'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional safari guide',
      'Crater rim lodge accommodation',
      'All conservation area fees',
      'Crater descent permit',
      'All meals as specified',
      'Bottled water during game drives',
      'Government taxes'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic drinks',
      'Optional activities'
    ],
    accommodations: 'Ngorongoro Wildlife Lodge - Comfortable crater rim hotel with stunning positioning and views',
    experience: 'Perfect weekend adventure with crater rim accommodation, comprehensive crater tour, sunrise and sunset experiences, and efficient yet thorough Ngorongoro exploration.'
  },
  {
    id: 'ngorongoro-highlights-3days',
    title: 'Ngorongoro Highlights - 3 Days/2 Nights',
    description: 'Charming accommodation with full crater day experience, archaeological exploration, and cultural depth.',
    overview: 'Afternoon drive through scenic highlands arriving at colonial-style farm lodge. Coffee plantation tour learning bean-to-cup process. Evening visit to nearby Maasai village for cultural exchange.',
    price: 950,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-highlights.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-highlights-3days/main.jpg',
      mobile: '/images/tours/ngorongoro/ngorongoro-highlights-3days/main.jpg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-highlights-3days/main.jpg',
      alt: 'Ngorongoro highlights tour with coffee plantation and crater views'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Charming accommodation', 'Full crater day', 'Archaeological exploration', 'Cultural depth', 'Coffee experience'],
    rating: 4.5,
    reviewCount: 73,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Highlands & Culture',
        description: 'Afternoon drive through scenic highlands arriving at colonial-style farm lodge. Coffee plantation tour learning bean-to-cup process. Evening visit to nearby Maasai village for cultural exchange and traditional dance performance.',
        activities: ['Highland scenic drive', 'Coffee plantation tour', 'Maasai village visit', 'Cultural exchange', 'Traditional dance'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Farm House'
      },
      {
        day: 2,
        title: 'Full Crater Experience',
        description: 'Dawn departure for crater descent. Comprehensive full day exploring the entire crater floor. Morning predator activity viewing, midday hippo pool observations, afternoon black rhino tracking. Picnic lunch at scenic spot. Photography-focused game driving.',
        activities: ['Dawn crater descent', 'Full day exploration', 'Predator viewing', 'Black rhino tracking', 'Photography focus', 'Picnic lunch'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Farm House'
      },
      {
        day: 3,
        title: 'Olduvai & Departure',
        description: 'Morning visit to Olduvai Gorge archaeological site, the "Cradle of Mankind." Learn about human evolution discoveries. Optional stop at Shifting Sands or Maasai market. Scenic return to Arusha through Great Rift Valley.',
        activities: ['Olduvai Gorge visit', 'Archaeological learning', 'Museum exploration', 'Cultural market', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional guide',
      'Charming farm lodge accommodation',
      'All park and conservation fees',
      'Coffee plantation tour',
      'Maasai cultural village visit',
      'All meals as specified',
      'Bottled water'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Optional activities',
      'Tips'
    ],
    accommodations: 'Ngorongoro Farm House - Charming coffee estate lodge on crater outskirts with colonial atmosphere',
    experience: 'Charming accommodation, full crater day experience, archaeological exploration, cultural depth, coffee plantation experience, and balanced wildlife and cultural immersion.'
  },

  // ========== NGORONGORO SPECIALIZED PACKAGES ==========
  {
    id: 'ngorongoro-family-safari',
    title: 'Ngorongoro Family Safari - 4 Days/3 Nights',
    description: 'Family-focused safari with child-friendly activities, educational programs, and flexible scheduling for all ages.',
    overview: 'Gentle afternoon arrival with scenic highland drive. Children receive safari activity kits and junior ranger journals. Short crater rim walk suitable for all ages with family-friendly guide.',
    price: 1380,
    familyPrice: 1050,
    duration: '4 days/3 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-family.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-family-safari/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-family-safari/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-family-safari/main.jpeg',
      alt: 'Family safari in Ngorongoro Crater with child-friendly activities'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Child-friendly activities', 'Educational programs', 'Flexible scheduling', 'Family bonding', 'Safe environments', 'Junior ranger certification'],
    rating: 4.8,
    reviewCount: 94,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'family',
    itinerary: [
      {
        day: 1,
        title: 'Family Adventure Begins',
        description: 'Gentle afternoon arrival with scenic highland drive. Children receive safari activity kits and junior ranger journals. Short crater rim walk suitable for all ages with family-friendly guide. Evening wildlife documentary screening. Introduction to safari rules.',
        activities: ['Family orientation', 'Scenic drive', 'Crater rim walk', 'Activity kits distribution', 'Wildlife documentary'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge'
      },
      {
        day: 2,
        title: 'Crater Floor Family Safari',
        description: 'Exciting early morning crater descent—children love the winding road into the caldera. Extended game viewing with focus on animals kids love—elephants, lions, hippos, zebras. Interactive wildlife identification games and photography lessons for young photographers.',
        activities: ['Crater descent', 'Family game drive', 'Interactive games', 'Young photographer lessons', 'Hippo pool viewing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge'
      },
      {
        day: 3,
        title: 'Junior Ranger & Cultural Day',
        description: 'Morning visit to Maasai village where children interact with Maasai peers. Learn traditional games, try beadwork, practice throwing spears (safely supervised), and understand cattle herding. Afternoon family-paced crater rim walk identifying birds and plants.',
        activities: ['Maasai village visit', 'Cultural interaction', 'Traditional games', 'Beadwork lessons', 'Crater rim walk'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge'
      },
      {
        day: 4,
        title: 'Final Adventures & Certificates',
        description: 'Morning visit to Olduvai Gorge—kids love learning about early humans and seeing fossils. Interactive museum activities designed for families. Children receive junior ranger certificates celebrating their safari achievements. Scenic return to Arusha.',
        activities: ['Olduvai Gorge visit', 'Interactive museum', 'Fossil learning', 'Junior ranger certificates', 'Family photo stops'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private family vehicle with child-friendly guide',
      'Family-friendly accommodation',
      'Junior ranger educational program',
      'All conservation area fees',
      'Safari activity kits for children',
      'Cultural village visits',
      'All meals with child-friendly options',
      'Junior ranger certification'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Special snacks and toys',
      'Tips'
    ],
    accommodations: 'Ngorongoro Sopa Lodge - Family-friendly with spacious family rooms, gardens, and child-safe environment',
    experience: 'Child-appropriate activities, educational programs, cultural interaction for kids, flexible schedules, safe environments, family bonding, memorable for all ages, and junior ranger certification in one of Africa\'s most family-friendly safari destinations.'
  },
  {
    id: 'ngorongoro-group-adventure',
    title: 'Ngorongoro Group Adventure - 5 Days/4 Nights',
    description: 'Team bonding experiences with flexible group activities, shared adventures, and celebratory atmosphere for groups of 6-12 people.',
    overview: 'Group bonding starts with afternoon arrival and scenic drive through highlands with photo stops. Crater rim welcome drinks with spectacular views. Group activity: Wildlife spotting competition rules explained.',
    price: 1850,
    duration: '5 days/4 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-group.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-group-adventure/main.jpg',
      mobile: '/images/tours/ngorongoro/ngorongoro-group-adventure/main.jpg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-group-adventure/main.jpg',
      alt: 'Group adventure in Ngorongoro Crater with team activities'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Shared adventures', 'Team bonding activities', 'Flexible for different interests', 'Cost-effective group rates', 'Celebration opportunities'],
    rating: 4.7,
    reviewCount: 58,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'group',
    itinerary: [
      {
        day: 1,
        title: 'Group Bonding & Orientation',
        description: 'Afternoon arrival with group orientation. Scenic drive through highlands with photo stops. Crater rim welcome drinks with spectacular views. Group activity: Wildlife spotting competition rules explained. Evening welcome dinner with traditional entertainment.',
        activities: ['Group orientation', 'Scenic drive', 'Welcome drinks', 'Wildlife competition briefing', 'Traditional entertainment'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge / Exclusive Camping'
      },
      {
        day: 2,
        title: 'First Crater Descent Adventure',
        description: 'Early group crater descent with friendly wildlife spotting competition. Full day exploring crater floor with points awarded for rare animal sightings, best photos, and wildlife knowledge. Bush picnic lunch with group celebration.',
        activities: ['Group crater descent', 'Wildlife competition', 'Full day exploration', 'Bush picnic', 'Team challenges'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge / Exclusive Camping'
      },
      {
        day: 3,
        title: 'Cultural Immersion & Activities',
        description: 'Morning split options: energetic members do crater rim hiking, others enjoy leisure at lodge or cultural visit prep. Afternoon entire group visits Maasai community for authentic cultural exchange. Participate together in traditional ceremonies.',
        activities: ['Flexible morning options', 'Maasai community visit', 'Cultural exchange', 'Traditional ceremonies', 'Group activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge / Exclusive Camping'
      },
      {
        day: 4,
        title: 'Adventure Day Flexibility',
        description: 'Customized day based on group interests—second crater descent for wildlife enthusiasts, Empakaai walking safari for adventurers, Olduvai archaeological exploration for history lovers, or relaxation/spa day at lodge.',
        activities: ['Customized activities', 'Interest-based options', 'Flexible exploration', 'Group choice activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Sopa Lodge / Exclusive Camping'
      },
      {
        day: 5,
        title: 'Farewell & Memories',
        description: 'Final sunrise viewing of crater together—group photos at iconic viewpoints. Visit Olduvai Gorge as group learning human origins. Stop at craft market where group can support local artisans together. Scenic return to Arusha.',
        activities: ['Sunrise viewing', 'Group photos', 'Olduvai Gorge visit', 'Craft market', 'Farewell lunch'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private safari vehicles for entire group',
      'Dedicated experienced guide and support staff',
      'Private group lodge booking or exclusive camping',
      'Customizable itinerary based on group interests',
      'All conservation area fees and permits',
      'Team activities and wildlife competitions',
      'Private dining experiences and campfire events',
      'Cultural village visits and activities'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Premium alcoholic beverages',
      'Tips for crew'
    ],
    accommodations: 'Private group lodge booking at Ngorongoro Sopa Lodge or exclusive camping on crater rim - Group\'s choice based on preference and budget',
    experience: 'Shared adventures, team bonding activities, flexible for different interests, cost-effective group rates, celebration opportunities, private experiences, competitive fun elements, memorable group moments, and customizable activities in Africa\'s most spectacular group safari destination.'
  },
  {
    id: 'ngorongoro-expedition',
    title: 'Ngorongoro Crater Expedition',
    description: 'Descend into the world\'s largest intact volcanic caldera for unparalleled wildlife density.',
    overview: 'Comprehensive Ngorongoro experience with expert guides and comfortable accommodations.',
    price: 1799,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-expedition.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/ngorongoro/ngorongoro-expedition/main.jpeg',
      mobile: '/images/tours/ngorongoro/ngorongoro-expedition/main.jpeg',
      thumbnail: '/images/tours/ngorongoro/ngorongoro-expedition/main.jpeg',
      alt: 'Ngorongoro Crater expedition with wildlife viewing in the caldera'
    },
    location: 'Ngorongoro Crater',
    highlights: ['Crater Floor Safari', 'Big Five Encounters', 'Lodge Accommodation', 'Maasai Culture'],
    rating: 4.8,
    reviewCount: 94,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Ngorongoro Highlands',
        description: 'Scenic drive to Ngorongoro Conservation Area, settling into your lodge on the crater rim with spectacular views.',
        activities: ['Scenic drive', 'Lodge check-in', 'Highlands exploration'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Lodge on Crater Rim'
      },
      {
        day: 2,
        title: 'Ngorongoro Crater Full Day',
        description: 'Descend into the crater for a full day of game viewing. Encounter lions, elephants, rhinos, hippos, and more in this natural amphitheater.',
        activities: ['Early descent into crater', 'Full day game drive', 'Picnic lunch'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Lodge on Crater Rim'
      },
      {
        day: 3,
        title: 'Maasai Village & Return',
        description: 'Visit a traditional Maasai village for cultural exchange before returning to Arusha.',
        activities: ['Maasai village visit', 'Cultural experience', 'Return drive'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional guide',
      'All park and crater fees',
      'Lodge accommodation',
      'All meals',
      '4x4 safari vehicle',
      'Maasai village visit'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Insurance',
      'Personal expenses',
      'Tips',
      'Extra activities'
    ]
  },

  // ========== NGORONGORO COMBINATION PACKAGES ==========
  {
    id: 'ngorongoro-tarangire-combo',
    title: 'Ngorongoro & Tarangire Combo - 5 Days/4 Nights',
    description: 'Experience two of Tanzania\'s greatest parks in one comprehensive safari. Two days Ngorongoro Crater (Big Five and archaeological sites), two days Tarangire (elephant herds and baobabs).',
    overview: 'Special offer: Save $200 compared to separate bookings. Perfect combination showcasing diverse ecosystems and wildlife from crater to savanna.',
    price: 1750,
    duration: '5 days/4 nights',
    difficulty: 'Easy',
    image: '/images/ngorongoro-tarangire-combo.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/safari/ngorongoro-tarangire-combo/main.jpeg',
      mobile: '/images/tours/safari/ngorongoro-tarangire-combo/main.jpeg',
      thumbnail: '/images/tours/safari/ngorongoro-tarangire-combo/main.jpeg',
      alt: 'Combination safari covering Ngorongoro Crater and Tarangire National Park'
    },
    location: 'Ngorongoro & Tarangire',
    highlights: ['Two iconic parks', 'Big Five viewing', 'Elephant super herds', 'Archaeological sites', 'Diverse ecosystems', 'Special offer savings'],
    rating: 4.8,
    reviewCount: 112,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Tarangire Elephant Adventure',
        description: 'Arrive at Tarangire National Park, famous for its massive elephant herds and ancient baobab trees. Afternoon game drive through diverse habitats. Sunset viewing as wildlife gathers at the Tarangire River.',
        activities: ['Tarangire arrival', 'Elephant herd viewing', 'Baobab landscape', 'River wildlife', 'Sunset photography'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 2,
        title: 'Full Tarangire Exploration',
        description: 'Full day exploring Tarangire\'s wonders. Morning focus on predators and large mammals, afternoon target bird watching and unique species. Visit Silale Swamp and termite mound landscapes. Bush lunch experience.',
        activities: ['Full day game drive', 'Predator tracking', 'Bird watching', 'Silale Swamp', 'Bush lunch'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Sopa Lodge'
      },
      {
        day: 3,
        title: 'Transfer to Ngorongoro',
        description: 'Morning game drive in Tarangire, then scenic transfer to Ngorongoro Highlands. Afternoon arrival at crater rim lodge. Guided walk along rim with breathtaking views. Evening preparation for crater descent.',
        activities: ['Morning game drive', 'Scenic transfer', 'Crater rim walk', 'Viewpoint photography', 'Evening briefing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Wildlife Lodge'
      },
      {
        day: 4,
        title: 'Ngorongoro Crater Descent',
        description: 'Early morning descent into the world\'s largest volcanic caldera. Full day exploring crater floor with highest wildlife density in Africa. Big Five viewing, Lake Magadi flamingos, hippo pools, and black rhino tracking.',
        activities: ['Crater descent', 'Big Five viewing', 'Lake Magadi', 'Hippo pools', 'Black rhino tracking'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Wildlife Lodge'
      },
      {
        day: 5,
        title: 'Olduvai Gorge & Departure',
        description: 'Morning visit to Olduvai Gorge archaeological site, the "Cradle of Mankind." Learn about human evolution discoveries. Optional Maasai craft market visit. Scenic return to Arusha through Great Rift Valley.',
        activities: ['Olduvai Gorge visit', 'Archaeological learning', 'Museum exploration', 'Cultural market', 'Return transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Professional safari guide',
      'Luxury accommodation at both parks',
      'All park and conservation fees',
      'Crater descent permit',
      'All meals as specified',
      '4x4 safari vehicle',
      'Bottled water throughout',
      'Government taxes and VAT'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic beverages',
      'Optional activities'
    ],
    accommodations: 'Tarangire Sopa Lodge & Ngorongoro Wildlife Lodge - Luxury accommodation with stunning views and excellent service',
    experience: 'Two iconic Tanzanian parks in one comprehensive safari, Big Five viewing in Ngorongoro, elephant super herds in Tarangire, archaeological exploration, diverse ecosystems, and special offer savings for the ultimate northern circuit experience.'
  },
  {
    id: 'northern-circuit-grand-safari',
    title: 'Northern Circuit Grand Safari - 7 Days/6 Nights',
    description: 'Ultimate northern Tanzania experience: Ngorongoro Crater, Tarangire, Lake Manyara, plus Olduvai Gorge and cultural experiences.',
    overview: 'Comprehensive wildlife viewing, all Big Five, diverse landscapes, archaeological exploration, and authentic cultural immersion across Tanzania\'s most famous parks.',
    price: 2650,
    duration: '7 days/6 nights',
    difficulty: 'Easy',
    image: '/images/northern-circuit-grand.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/safari/northern-circuit-grand-safari/main.jpeg',
      mobile: '/images/tours/safari/northern-circuit-grand-safari/main.jpeg',
      thumbnail: '/images/tours/safari/northern-circuit-grand-safari/main.jpeg',
      alt: 'Complete Northern Circuit safari covering Tanzania\'s most famous parks'
    },
    location: 'Northern Tanzania Circuit',
    highlights: ['Comprehensive northern circuit', 'All Big Five animals', 'Diverse landscapes', 'Archaeological exploration', 'Cultural immersion', 'Luxury accommodation'],
    rating: 4.9,
    reviewCount: 78,
    category: 'safari',
    section: 'safari',
    packageType: 'safari-package',
    subCategory: 'ngorongoro',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Tarangire National Park',
        description: 'Begin your grand safari in Tarangire, home to massive elephant herds and ancient baobabs. Afternoon game drive through diverse ecosystems. Sunset viewing over the savanna.',
        activities: ['Tarangire arrival', 'Elephant viewing', 'Baobab landscapes', 'Game drive', 'Sunset photography'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 2,
        title: 'Full Tarangire Exploration',
        description: 'Full day exploring Tarangire\'s wonders. Focus on predator-prey dynamics, bird diversity, and unique landscapes. Bush lunch experience. Optional walking safari or cultural visit.',
        activities: ['Full day safari', 'Predator tracking', 'Bird watching', 'Bush lunch', 'Optional activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Tarangire Treetops'
      },
      {
        day: 3,
        title: 'Lake Manyara National Park',
        description: 'Transfer to Lake Manyara, famous for tree-climbing lions and diverse birdlife. Game drive through groundwater forest and along the lake shore. Afternoon transfer to Ngorongoro Highlands.',
        activities: ['Lake Manyara game drive', 'Tree-climbing lions', 'Bird watching', 'Lake viewing', 'Highland transfer'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Lodge'
      },
      {
        day: 4,
        title: 'Ngorongoro Crater Descent',
        description: 'Early descent into Ngorongoro Crater for full day exploration. Highest wildlife density in Africa with Big Five viewing. Lake Magadi flamingos, hippo pools, and endangered black rhino tracking.',
        activities: ['Crater descent', 'Big Five viewing', 'Lake Magadi', 'Hippo pools', 'Black rhino tracking'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Lodge'
      },
      {
        day: 5,
        title: 'Cultural & Archaeological Day',
        description: 'Morning visit to Olduvai Gorge, the "Cradle of Mankind" with expert archaeological guide. Afternoon Maasai cultural immersion with traditional activities and village life experience.',
        activities: ['Olduvai Gorge visit', 'Archaeological exploration', 'Maasai village', 'Cultural activities', 'Traditional learning'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Lodge'
      },
      {
        day: 6,
        title: 'Empakaai Crater Adventure',
        description: 'Day trip to Empakaai Crater, a stunning volcanic crater with deep soda lake. Walking safari along the rim and descent to lakeshore. Spectacular views and pristine wilderness experience.',
        activities: ['Empakaai Crater visit', 'Walking safari', 'Lakeshore exploration', 'Wilderness experience', 'Panoramic views'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Ngorongoro Serena Lodge'
      },
      {
        day: 7,
        title: 'Farewell & Return',
        description: 'Morning crater rim walk with final breathtaking views. Visit to local craft market supporting community artisans. Scenic return to Arusha with comprehensive northern circuit memories.',
        activities: ['Crater rim walk', 'Craft market visit', 'Community support', 'Return transfer', 'Safari conclusion'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Expert naturalist safari guide',
      'Luxury accommodation throughout',
      'All park and conservation fees',
      'Crater descent permits',
      'Walking safari experiences',
      'Cultural village visits',
      'Archaeological site entries',
      'All meals and bottled water',
      '4x4 safari vehicle'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Premium alcoholic beverages',
      'Optional activities'
    ],
    accommodations: 'Tarangire Treetops & Ngorongoro Serena Lodge - Luxury accommodation with exceptional service and stunning locations',
    experience: 'Comprehensive northern Tanzania circuit covering all major parks, Big Five viewing, diverse landscapes from savanna to crater, archaeological exploration at Olduvai Gorge, authentic cultural immersion, and luxury accommodation for the ultimate African safari experience.'
  },

  // ========== EXISTING SAFARI PACKAGES (Updated with subCategory and tourStyle) ==========
  {
    id: 'serengeti-migration',
    title: 'Serengeti Great Migration Safari',
    description: 'Witness the spectacular Great Migration with luxury tented camps and expert guides.',
    price: 2899,
    duration: '5 days',
    difficulty: 'Easy',
    image: '/images/serengeti-migration.jpg',
    // ADDED: Images object for safari package
    images: {
      main: '/images/tours/serengeti/serengeti-migration/main.jpeg',
      mobile: '/images/tours/serengeti/serengeti-migration/main.jpeg',
      thumbnail: '/images/tours/serengeti/serengeti-migration/main.jpeg',
      alt: 'Great Migration safari in Serengeti with wildebeest crossings'
    },
    location: 'Serengeti National Park',
    highlights: ['Great Migration Viewing', 'Big Five Safari', 'Luxury Tented Camps', 'Professional Guide'],
    rating: 4.9,
    reviewCount: 156,
    category: 'safari',
    section: 'safari',
    subCategory: 'serengeti',
    tourStyle: 'group',
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Central Serengeti',
        description: 'Scenic flight to Serengeti, afternoon game drive',
        activities: ['Flight to Serengeti', 'Afternoon game drive', 'Sunset in wilderness'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 2,
        title: 'Central Serengeti Exploration',
        description: 'Full day exploring Central Serengeti and river crossings',
        activities: ['Morning game drive', 'River crossing viewing', 'Predator tracking'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 3,
        title: 'Northern Serengeti Migration',
        description: 'Focus on Mara River crossing areas',
        activities: ['Mara River area', 'Migration viewing', 'Full day safari'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 4,
        title: 'Hot Air Balloon & Game Drives',
        description: 'Optional balloon safari and continued wildlife viewing',
        activities: ['Balloon safari', 'Game drives', 'Bush dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 5,
        title: 'Final Game Drive & Departure',
        description: 'Morning game drive and flight back to Arusha',
        activities: ['Morning game drive', 'Flight to Arusha', 'Safari debrief'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Hotel (optional)'
      }
    ],
    inclusions: [
      'Professional safari guide',
      'All park fees and taxes',
      'Luxury tented accommodation',
      'All meals and drinks',
      'Game drives in 4x4 vehicle',
      'Internal flights',
      'Emergency medical evacuation'
    ],
    exclusions: [
      'International flights',
      'Tanzania visa',
      'Travel insurance',
      'Optional balloon safari',
      'Personal expenses',
      'Tips for guides'
    ]
  },

  // ========== ZANZIBAR PACKAGES - PHASE 1: MULTI-DAY PACKAGES ==========
  {
    id: 'zanzibar-explorer-5days',
    title: 'Zanzibar Explorer - 5 Days/4 Nights',
    description: 'Step into Zanzibar, Tanzania\'s dazzling "Spice Island," where turquoise Indian Ocean waves kiss powdery beaches, and clove-scented breezes carry whispers of ancient traders.',
    overview: 'Experience the perfect blend of culture, history, and beach relaxation in this comprehensive 5-day Zanzibar adventure.',
    price: 950,
    duration: '5 days/4 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/explorer/main.jpg',
    images: {
      main: '/images/tours/zanzibar/explorer/main.jpg',
      mobile: '/images/tours/zanzibar/explorer/main.jpg',
      thumbnail: '/images/tours/zanzibar/explorer/main.jpg',
      alt: 'Zanzibar explorer tour showing Stone Town culture and pristine Indian Ocean beaches'
    },
    location: 'Zanzibar',
    highlights: ['Stone Town Cultural Immersion', 'Spice Plantation Education', 'Pristine Beach Relaxation', 'World-Class Snorkeling', 'Giant Tortoises', 'Swahili Cuisine'],
    rating: 4.8,
    reviewCount: 89,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Stone Town Discovery',
        description: 'Airport pickup and transfer to Stone Town. Afternoon guided walking tour through UNESCO-listed alleyways—explore the House of Wonders, Old Fort, Sultan\'s Palace Museum, and intricately carved Zanzibari doors. Visit the former slave market and Anglican Cathedral built on the site, learning this sobering history. Browse vibrant Darajani Market with its spices, seafood, and tropical fruits. Sunset at Forodhani Gardens watching local life unfold. Dinner at waterfront restaurant sampling Swahili cuisine—fresh seafood, coconut curries, and spiced rice.',
        activities: ['Airport pickup', 'Stone Town walking tour', 'Historical sites visit', 'Market exploration', 'Sunset at Forodhani Gardens', 'Swahili dinner'],
        meals: ['Dinner'],
        accommodation: 'Stone Town Guesthouse'
      },
      {
        day: 2,
        title: 'Spice Tour & Beach Transfer',
        description: 'Morning spice plantation tour—walk through farms growing cloves, vanilla, cinnamon, nutmeg, cardamom, and lemongrass. Learn cultivation methods, taste fresh fruits (rambutan, jackfruit, starfruit), and see how spices are processed. Included fresh coconut water and tropical fruit tasting. Optional visit to Maruhubi Palace Ruins or Persian Baths. Afternoon transfer to Nungwi Beach on the northern tip. Check into beachfront accommodation. Evening at leisure exploring beach village, sunset dhow watching, and seafood dinner.',
        activities: ['Spice plantation tour', 'Fruit tasting', 'Beach transfer', 'Sunset dhow watching', 'Beach village exploration'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Amaan Bungalows Nungwi / Similar'
      },
      {
        day: 3,
        title: 'Full Day Beach & Water Activities',
        description: 'Leisurely breakfast with ocean views. Morning snorkeling trip to nearby coral reefs—encounter tropical fish, sea urchins, and possibly turtles. Equipment and guide included. Return for lunch. Afternoon options: relax on pristine beach, kayaking, paddleboarding, or village exploration. Visit local fish market where dhows return with catches. Optional sunset dhow cruise with drinks ($35 supplement). Evening beachfront barbecue dinner. Stargazing on the beach.',
        activities: ['Snorkeling trip', 'Beach relaxation', 'Water sports', 'Fish market visit', 'Beach barbecue', 'Stargazing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Amaan Bungalows Nungwi / Similar'
      },
      {
        day: 4,
        title: 'Mnemba Island Adventure',
        description: 'Early morning boat trip to Mnemba Atoll—Zanzibar\'s premier diving and snorkeling location. Extended snorkeling session over vibrant coral gardens teeming with marine life including dolphins, turtles, rays, and hundreds of tropical fish species. Professional guides ensure safety and point out interesting creatures. Beach picnic on sandbank with fresh seafood, tropical fruits, and refreshments. Afternoon swimming and relaxation. Return to hotel. Evening at leisure—optional beach massage, beach bars, or traditional Taarab music performance.',
        activities: ['Mnemba Atoll boat trip', 'Snorkeling adventure', 'Marine life viewing', 'Beach picnic', 'Swimming relaxation'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Amaan Bungalows Nungwi / Similar'
      },
      {
        day: 5,
        title: 'Prison Island & Departure',
        description: 'Morning boat excursion to Prison Island (Changuu Island)—meet giant Aldabra tortoises, some over 150 years old. Snorkel the surrounding coral reefs or relax on the small beach. Learn island history as former quarantine station and tortoise sanctuary. Return to Stone Town for souvenir shopping—spices, kangas, carved doors, and local crafts. Lunch at atmospheric Stone Town restaurant. Airport transfer for departure with memories of paradise and pockets full of spices.',
        activities: ['Prison Island visit', 'Giant tortoise encounter', 'Snorkeling', 'Souvenir shopping', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '4 nights accommodation (Stone Town guesthouse & beachfront hotel)',
      'All meals as specified',
      'Professional English-speaking guide',
      'Stone Town walking tour',
      'Spice plantation tour',
      'Snorkeling equipment',
      'Prison Island boat trip',
      'All entrance fees and taxes'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa ($50)',
      'Travel insurance',
      'Optional activities (sunset dhow cruise $35)',
      'Personal expenses and tips',
      'Alcoholic beverages'
    ],
    accommodations: 'Amaan Bungalows Nungwi / Similar - Beachfront mid-range hotel with restaurant, pool, and dive center access',
    experience: 'Stone Town cultural immersion, spice plantation education, pristine beach relaxation, world-class snorkeling, giant tortoises, Swahili cuisine, and diverse activities showcasing Zanzibar\'s best offerings.'
  },
  {
    id: 'zanzibar-immersion-7days',
    title: 'Zanzibar Immersion - 7 Days/6 Nights',
    description: 'Comprehensive cultural immersion and beach experience with authentic Swahili encounters, world-class marine life, and pristine beaches.',
    overview: 'Deep dive into Zanzibar\'s rich culture and natural beauty with extended stays in Stone Town and beach resorts, plus authentic village experiences.',
    price: 1480,
    duration: '7 days/6 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/immersion/main.jpg',
    images: {
      main: '/images/tours/zanzibar/immersion/main.jpg',
      mobile: '/images/tours/zanzibar/immersion/main.jpg',
      thumbnail: '/images/tours/zanzibar/immersion/main.jpg',
      alt: 'Zanzibar immersion tour with authentic Swahili experiences and marine adventures'
    },
    location: 'Zanzibar',
    highlights: ['Comprehensive Cultural Immersion', 'Authentic Swahili Experiences', 'World-Class Marine Life', 'Endemic Wildlife', 'Cooking Classes', 'Village Interactions'],
    rating: 4.9,
    reviewCount: 67,
    category: 'cultural',
    section: 'zanzibar',
    packageType: 'cultural-package',
    subCategory: 'zanzibar',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Stone Town Arrival & Cultural Orientation',
        description: 'Airport welcome and transfer to charming boutique hotel in Stone Town\'s heart. Afternoon orientation walking tour discovering hidden gems—secret courtyards, rooftop terraces, local coffee houses. Visit Tippu Tip\'s House, Mercury House (Freddie Mercury\'s birthplace), and Old Dispensary with its ornate balconies. Evening Forodhani Night Food Market experience—taste Zanzibar pizza, sugarcane juice, seafood skewers, and urojo soup alongside locals. Rooftop dinner overlooking the harbor with traditional Taarab music.',
        activities: ['Airport welcome', 'Orientation walking tour', 'Historical sites visit', 'Forodhani Night Market', 'Taarab music experience'],
        meals: ['Dinner'],
        accommodation: 'Stone Town Boutique Hotel'
      },
      {
        day: 2,
        title: 'Deep Stone Town Exploration',
        description: 'Morning comprehensive heritage tour—Sultan\'s Palace Museum showcasing royal history, House of Wonders with Swahili coast exhibitions, and Peace Memorial Museum. Visit working dhow construction yard where traditional boats are built using ancient methods. Explore Darajani Market\'s spice section with expert guide explaining uses and medicinal properties. Lunch at local Swahili home (arranged experience) learning family recipes. Afternoon at Old Arab Fort, now cultural center hosting events. Visit Anglican Cathedral built on slave market site—powerful historical experience. Evening sunset dhow cruise around Stone Town harbor with drinks and snacks.',
        activities: ['Heritage tour', 'Dhow construction visit', 'Spice market exploration', 'Swahili home lunch', 'Sunset dhow cruise'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Stone Town Boutique Hotel'
      },
      {
        day: 3,
        title: 'Spice Farm & Beach Paradise Transfer',
        description: 'Full morning spice tour at multiple plantations—comprehensive education on clove, vanilla, cinnamon, nutmeg, black pepper, and cardamom cultivation. Participate in climbing for coconuts, taste exotic fruits, learn traditional medicine uses. Purchase fresh spices directly from farmers. Visit Kidichi Persian Baths built by Sultan Said. Lunch at spice farm. Afternoon scenic drive to Matemwe on the northeast coast—passing rural villages, schools, and coconut plantations. Check into beachfront retreat. Evening beach walk at low tide, dinner with toes in sand, and starlit Indian Ocean views.',
        activities: ['Comprehensive spice tour', 'Coconut climbing', 'Traditional medicine learning', 'Persian Baths visit', 'Scenic coastal drive'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Matemwe Retreat'
      },
      {
        day: 4,
        title: 'Mnemba Marine Adventure',
        description: 'Early morning boat to Mnemba Atoll—world-renowned diving and snorkeling site. Extended snorkeling with professional guide exploring multiple reef sites. Encounter bottlenose dolphins (often seen here), green turtles feeding on seagrass, octopuses, moray eels, and kaleidoscopic fish—butterflyfish, angelfish, parrotfish, triggerfish. Lunch on pristine sandbank appearing at low tide—grilled seafood, fresh fruits, and Zanzibari specialties. Afternoon relaxation or more snorkeling. Return to resort. Optional beach massage. Sunset cocktails, seafood dinner, and traditional drumming performance.',
        activities: ['Mnemba Atoll expedition', 'Dolphin encounters', 'Marine life snorkeling', 'Sandbank picnic', 'Traditional drumming'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Matemwe Retreat'
      },
      {
        day: 5,
        title: 'Cultural Village Experience',
        description: 'Morning visit authentic fishing village experiencing real Swahili life. Meet families, see traditional dhow fishing methods, visit coral-stone homes, and learn about seaweed farming—important local industry. Participate in cooking class preparing Swahili lunch—coconut fish curry, pilau rice, chapati, and kachumbari salad. Afternoon at leisure—swimming, beach reading, kayaking in mangroves. Optional visit to Muyuni Village nearby. Evening beach bonfire with fresh seafood barbecue and star gazing far from city lights.',
        activities: ['Fishing village visit', 'Traditional fishing methods', 'Seaweed farming learning', 'Swahili cooking class', 'Beach bonfire'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Matemwe Retreat'
      },
      {
        day: 6,
        title: 'Jozani Forest & Eastern Beaches',
        description: 'Morning excursion to Jozani Chwaka Bay National Park—Zanzibar\'s only national park. Guided forest walk encountering Kirk\'s red colobus monkeys found only here, Sykes monkeys, bushbabies, and duikers. Explore mangrove boardwalk learning about coastal ecosystems. Visit nature trail identifying medicinal plants and massive trees. Return via Paje or Jambiani villages on the east coast—excellent kite surfing beaches with stunning vistas. Lunch at beachfront restaurant. Afternoon return to resort for final beach relaxation. Farewell dinner with special Zanzibari feast.',
        activities: ['Jozani Forest exploration', 'Red colobus monkey viewing', 'Mangrove boardwalk', 'Eastern beaches visit', 'Farewell Zanzibari feast'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Matemwe Retreat'
      },
      {
        day: 7,
        title: 'Leisure & Departure',
        description: 'Final morning swimming in crystal waters or beach relaxation. Leisurely breakfast. Optional last-minute activities depending on flight time—snorkeling, village walk, or souvenir shopping at local craft markets. Check-out and scenic transfer to Stone Town. If time permits, final spice purchases and lunch. Airport transfer with head full of memories, heart full of joy, and bags full of spices.',
        activities: ['Morning beach relaxation', 'Optional activities', 'Souvenir shopping', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '6 nights accommodation (boutique hotel & beachfront resort)',
      'All meals as specified',
      'Professional English-speaking guide throughout',
      'All entrance fees and activities mentioned',
      'Spice plantation tours',
      'Snorkeling equipment and boat trips',
      'Cultural experiences and cooking class',
      'Traditional entertainment'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Optional activities (beach massage, etc.)',
      'Personal expenses and tips',
      'Alcoholic beverages beyond included'
    ],
    accommodations: 'Mix of Stone Town boutique hotel (2 nights) and Matemwe Retreat (4 nights) or similar beachfront resort with excellent service',
    experience: 'Comprehensive cultural immersion, authentic Swahili experiences, world-class marine life, endemic wildlife, cooking classes, village interactions, pristine beaches, and balanced activities and relaxation for the ultimate Zanzibar experience.'
  },
  {
    id: 'zanzibar-grand-tour-10days',
    title: 'Zanzibar Grand Tour - 10 Days/9 Nights',
    description: 'Complete island exploration covering all major attractions with diverse accommodations, comprehensive cultural immersion, and extensive marine adventures.',
    overview: 'The ultimate Zanzibar experience covering every corner of the island from historic Stone Town to remote beaches, with luxury accommodations and exclusive access.',
    price: 2350,
    duration: '10 days/9 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/grand-tour/main.jpg',
    images: {
      main: '/images/tours/zanzibar/grand-tour/main.jpg',
      mobile: '/images/tours/zanzibar/grand-tour/main.jpg',
      thumbnail: '/images/tours/zanzibar/grand-tour/main.jpg',
      alt: 'Complete Zanzibar island tour covering all major attractions and diverse experiences'
    },
    location: 'Zanzibar',
    highlights: ['Complete Island Exploration', 'All Major Attractions', 'Diverse Accommodations', 'Comprehensive Cultural Immersion', 'Extensive Marine Adventures', 'Photography Opportunities'],
    rating: 5.0,
    reviewCount: 45,
    category: 'cultural',
    section: 'zanzibar',
    packageType: 'cultural-package',
    subCategory: 'zanzibar',
    tourStyle: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Stone Town Immersion Begins',
        description: 'Arrival and transfer to beautifully restored heritage hotel—former merchant\'s mansion with authentic Zanzibari architecture. Afternoon gentle orientation walk through ancient streets. Evening welcome dinner at Emerson Spice rooftop restaurant—one of Stone Town\'s finest with panoramic views, exceptional Swahili-fusion cuisine, and romantic ambiance. Taarab musicians provide traditional soundtrack.',
        activities: ['Airport arrival', 'Heritage hotel check-in', 'Orientation walk', 'Welcome rooftop dinner'],
        meals: ['Dinner'],
        accommodation: 'Stone Town Heritage Hotel'
      },
      {
        day: 2,
        title: 'Stone Town Heritage & Culture',
        description: 'Full day comprehensive exploration with expert guide. Morning: House of Wonders, Sultan\'s Palace Museum, Old Fort, and Anglican Cathedral with slave chambers. Visit Freddie Mercury Museum and learn his Zanzibar childhood. Afternoon: Darajani Market immersion learning spices, fruits, and daily life. Visit Mtoni Palace Ruins and Maruhubi Palace Ruins—former royal residences with fascinating histories. Hamamni Persian Baths from 1888. Evening sunset dhow cruise with champagne and seafood platter. Dinner at atmospheric Stone Town restaurant.',
        activities: ['Comprehensive heritage tour', 'Freddie Mercury Museum', 'Market immersion', 'Palace ruins visit', 'Sunset champagne cruise'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Stone Town Heritage Hotel'
      },
      {
        day: 3,
        title: 'Southern Explorations',
        description: 'Morning drive to southern Zanzibar stopping at traditional villages. Visit Kizimkazi\'s 12th-century mosque—oldest Islamic building in East Africa. Dolphin watching excursion—spinner and bottlenose dolphins frequent these waters (swimming with them if conditions permit). Lunch at local restaurant. Afternoon visit Fumba Peninsula and Menai Bay. Transfer to Jozani area eco-lodge built sustainably within forest buffer zone. Evening nature walk with guide identifying nocturnal creatures.',
        activities: ['Southern villages visit', 'Kizimkazi Mosque', 'Dolphin watching', 'Fumba Peninsula', 'Evening nature walk'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Jozani Eco-Lodge'
      },
      {
        day: 4,
        title: 'Jozani Forest & Mangrove Ecosystems',
        description: 'Morning extensive Jozani National Park exploration. Guided walks encountering red colobus monkeys, Sykes monkeys, and diverse birdlife. Learn forest ecology and conservation efforts. Explore mangrove boardwalk understanding coastal ecosystems vital for fish breeding. Visit butterfly center. Afternoon visit traditional pottery village and seaweed farm where women harvest crops at low tide. Learn about seaweed industry. Evening relaxation at eco-lodge with organic farm-to-table dinner.',
        activities: ['Jozani Forest exploration', 'Red colobus monkey viewing', 'Mangrove boardwalk', 'Pottery village', 'Seaweed farm visit'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Jozani Eco-Lodge'
      },
      {
        day: 5,
        title: 'Spice Farm Experience & Eastern Coast',
        description: 'Morning comprehensive spice tour at multiple plantations. Not just observation—participate in harvesting, processing, and cooking with spices. Full explanation of cloves, vanilla, cinnamon, nutmeg, pepper, cardamom, turmeric, and more. Lunch at spice farm with spice-infused dishes. Afternoon transfer to Paje on eastern coast. Check into beachfront resort. Evening exploring this laid-back beach town famous for kite surfing. Sunset watching dramatic tides. Seafood dinner.',
        activities: ['Hands-on spice farming', 'Spice harvesting participation', 'Eastern coast transfer', 'Paje beach exploration'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Eastern Beach Resort'
      },
      {
        day: 6,
        title: 'Eastern Beach & Tidal Adventures',
        description: 'Full day enjoying Paje\'s unique tidal beaches. Morning low tide explore tidal pools discovering starfish, sea urchins, and small reef fish. Visit local fishing village and observe traditional seaweed farming. Learn about sustainable ocean farming. Lunch at beach restaurant. Afternoon options: kite surfing lessons (additional cost), stand-up paddleboarding, beach relaxation, or visit nearby Jambiani village with its beautiful beaches. Evening beach bonfire and barbecue. Traditional ngoma dancing performance.',
        activities: ['Tidal pool exploration', 'Seaweed farming observation', 'Water sports options', 'Beach bonfire', 'Traditional dancing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Eastern Beach Resort'
      },
      {
        day: 7,
        title: 'Stone Town Day Return & Pemba Channel',
        description: 'Day trip back to Stone Town for deeper cultural experiences. Visit working fish market at dawn, spice shops for purchases, local woodcarving workshop, and textile market. Lunch at local Swahili home with family (arranged authentic experience). Afternoon Prison Island excursion—giant tortoises and snorkeling. Return to eastern resort. Evening at leisure or optional night snorkeling for different marine life experience.',
        activities: ['Fish market visit', 'Woodcarving workshop', 'Swahili home lunch', 'Prison Island excursion', 'Optional night snorkeling'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Eastern Beach Resort'
      },
      {
        day: 8,
        title: 'Transfer to Northern Beaches',
        description: 'Morning scenic drive to Nungwi passing through rural Zanzibar—villages, schools, farms, and local life. Stop at traditional fishing dhow building yard. Check into beachfront luxury hotel in Nungwi—Zanzibar\'s most developed beach area with excellent facilities. Afternoon relaxation by pool or beach. Evening village walk exploring Nungwi\'s lively atmosphere, sunset viewing, and dinner at beachfront restaurant. Optional visit to local bar with live music.',
        activities: ['Scenic northern drive', 'Dhow building visit', 'Nungwi beach relaxation', 'Village walk', 'Sunset viewing'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Northern Beach Luxury Hotel'
      },
      {
        day: 9,
        title: 'Mnemba Island & Marine Adventures',
        description: 'Full day Mnemba Atoll expedition. Multiple snorkeling sessions at different reef sites with expert guides. Possibility of diving for certified divers (additional cost). Extended time seeking dolphins—often playful here. Lunch on sandbank. Afternoon swimming, snorkeling, and underwater photography. Return to resort. Evening sunset dhow cruise with champagne and canapés. Farewell dinner at resort\'s special restaurant with seafood extravaganza.',
        activities: ['Mnemba expedition', 'Multiple snorkeling sessions', 'Dolphin seeking', 'Underwater photography', 'Sunset champagne cruise'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Northern Beach Luxury Hotel'
      },
      {
        day: 10,
        title: 'Leisure & Farewell',
        description: 'Final morning enjoying beach paradise. Optional activities based on flight time: diving, spa treatments, last snorkeling, beach relaxation, or village shopping for final souvenirs. Checkout and transfer to Stone Town for last-minute explorations or direct airport transfer. Depart with comprehensive Zanzibar experience—culture, history, beaches, marine life, and authentic connections.',
        activities: ['Morning beach time', 'Optional activities', 'Last-minute shopping', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '9 nights accommodation (heritage hotel, eco-lodge, beach resorts)',
      'All meals as specified',
      'Expert English-speaking guide throughout',
      'All activities and entrance fees mentioned',
      'Boat trips and snorkeling equipment',
      'Traditional experiences and workshops',
      'Champagne sunset cruise',
      'All taxes and service charges'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Optional activities (kite surfing, diving, spa)',
      'Personal expenses and tips',
      'Premium alcoholic beverages'
    ],
    accommodations: 'Mix of Stone Town heritage hotel (2 nights), Jozani area eco-lodge (2 nights), eastern beach resort (3 nights), and northern beach luxury hotel (2 nights)',
    experience: 'Complete island exploration, all major attractions, diverse accommodations, comprehensive cultural immersion, extensive marine adventures, authentic village experiences, varied landscapes, photography opportunities, relaxation and adventure balance—the ultimate Zanzibar experience.'
  },

  // ========== ZANZIBAR PACKAGES - PHASE 2: SHORT ESCAPES ==========
  {
    id: 'zanzibar-highlights-3days',
    title: 'Zanzibar Highlights - 3 Days/2 Nights',
    description: 'Essential Zanzibar experience packed into 3 days—perfect for travelers with limited time wanting culture, beaches, and marine adventures.',
    overview: 'Efficient comprehensive introduction to Zanzibar\'s main highlights including Stone Town, spice farms, and beautiful beaches.',
    price: 580,
    duration: '3 days/2 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/highlights/main.jpg',
    images: {
      main: '/images/tours/zanzibar/highlights/main.jpg',
      mobile: '/images/tours/zanzibar/highlights/main.jpg',
      thumbnail: '/images/tours/zanzibar/highlights/main.jpg',
      alt: 'Essential Zanzibar highlights tour covering Stone Town, spice farms and beaches'
    },
    location: 'Zanzibar',
    highlights: ['Essential Zanzibar in Short Time', 'Cultural Highlights', 'Beach Relaxation', 'Snorkeling Adventures', 'Spice Education', 'Efficient Comprehensive Introduction'],
    rating: 4.6,
    reviewCount: 78,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Stone Town & Beach Transfer',
        description: 'Morning arrival, Stone Town walking tour covering main highlights—House of Wonders, Old Fort, narrow alleyways, and vibrant markets. Lunch at local restaurant. Afternoon spice farm tour learning about Zanzibar\'s famous spices with tastings. Transfer to beach resort on northern coast. Evening beach relaxation and seafood dinner.',
        activities: ['Stone Town walking tour', 'Market exploration', 'Spice farm tour', 'Beach transfer', 'Evening relaxation'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Zanzibar Beach Resort / Similar'
      },
      {
        day: 2,
        title: 'Beach & Marine Adventure',
        description: 'Morning snorkeling excursion to nearby coral reefs—tropical fish, sea urchins, and marine life. Return for lunch. Afternoon beach relaxation, swimming, or optional water sports. Evening sunset viewing and beachfront barbecue. Optional village walk or beach bars.',
        activities: ['Snorkeling excursion', 'Beach relaxation', 'Water sports options', 'Sunset viewing', 'Beach barbecue'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Zanzibar Beach Resort / Similar'
      },
      {
        day: 3,
        title: 'Prison Island & Departure',
        description: 'Morning boat trip to Prison Island meeting giant tortoises and snorkeling pristine waters. Return to Stone Town for last-minute shopping—spices, crafts, textiles. Lunch before airport transfer. Depart with taste of Zanzibar\'s magic.',
        activities: ['Prison Island visit', 'Giant tortoise encounter', 'Snorkeling', 'Souvenir shopping', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '2 nights beachfront accommodation',
      'All meals as specified',
      'Stone Town walking tour',
      'Spice farm tour',
      'Snorkeling equipment',
      'Prison Island boat trip',
      'All entrance fees'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Optional water sports',
      'Personal expenses and tips',
      'Alcoholic beverages'
    ],
    accommodations: 'Zanzibar Beach Resort or similar - Comfortable beachfront hotel with restaurant and water sports',
    experience: 'Essential Zanzibar experience in short time, cultural highlights, beach relaxation, snorkeling adventures, spice education, and efficient comprehensive introduction to the island\'s main attractions.'
  },
  {
    id: 'zanzibar-weekend-getaway-2days',
    title: 'Zanzibar Weekend Getaway - 2 Days/1 Night',
    description: 'Perfect quick beach escape focusing on relaxation and essential marine experiences for time-pressed travelers.',
    overview: 'Quick beach paradise experience with maximum relaxation and minimum travel time—perfect for weekend escapes.',
    price: 420,
    duration: '2 days/1 night',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/weekend/main.avif',
    images: {
      main: '/images/tours/zanzibar/weekend/main.avif',
      mobile: '/images/tours/zanzibar/weekend/main.avif',
      thumbnail: '/images/tours/zanzibar/weekend/main.avif',
      alt: 'Weekend beach getaway to Zanzibar focusing on relaxation and marine experiences'
    },
    location: 'Zanzibar',
    highlights: ['Perfect Quick Beach Escape', 'Essential Marine Experience', 'Relaxation Focus', 'Stress-Free Itinerary', 'Beautiful Beaches'],
    rating: 4.5,
    reviewCount: 63,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Paradise',
        description: 'Airport pickup, scenic drive to northern beaches. Check into beachfront accommodation. Afternoon beach relaxation and swimming in crystal-clear waters. Sunset viewing at famous Kendwa sunset spot. Evening seafood dinner at beach restaurant. Optional beach bars with live music.',
        activities: ['Airport pickup', 'Scenic beach drive', 'Beach relaxation', 'Sunset viewing', 'Seafood dinner'],
        meals: ['Dinner'],
        accommodation: 'Beach Bungalow at Nungwi or Kendwa'
      },
      {
        day: 2,
        title: 'Marine Experience & Departure',
        description: 'Early morning snorkeling trip to nearby reefs or Mnemba Atoll. Return for breakfast. Morning beach relaxation or optional village exploration. Checkout and scenic return to Stone Town. Quick market visit for spices if time permits. Airport transfer with refreshed spirit and relaxed mind.',
        activities: ['Snorkeling trip', 'Beach relaxation', 'Village exploration option', 'Market visit', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '1 night beachfront accommodation',
      'Meals as specified',
      'Snorkeling equipment',
      'Beach activities',
      'All taxes and fees'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Optional activities',
      'Personal expenses and tips',
      'Alcoholic beverages'
    ],
    accommodations: 'Beach bungalow at Nungwi or Kendwa - Simple comfortable beachfront accommodation',
    experience: 'Perfect quick beach escape, essential marine experience, relaxation focus, stress-free itinerary, and beautiful beaches for maximum rejuvenation in minimum time.'
  },
  {
    id: 'zanzibar-day-trip',
    title: 'Zanzibar Day Trip - 1 Day',
    description: 'Maximum Zanzibar experience in minimum time—perfect for cruise passengers or travelers with limited time.',
    overview: 'Flexible day trip options covering either cultural Stone Town and spice tours or beach and snorkeling experiences.',
    price: 180,
    duration: '1 day',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/day-trip/main.jpeg',
    images: {
      main: '/images/tours/zanzibar/day-trip/main.jpeg',
      mobile: '/images/tours/zanzibar/day-trip/main.jpeg',
      thumbnail: '/images/tours/zanzibar/day-trip/main.jpeg',
      alt: 'Zanzibar day trip covering Stone Town culture and spice plantation experience'
    },
    location: 'Zanzibar',
    highlights: ['Maximum Experience Minimum Time', 'Flexible Options', 'Essential Zanzibar Taste', 'Efficient Touring', 'Perfect for Cruise Passengers'],
    rating: 4.4,
    reviewCount: 92,
    category: 'cultural',
    section: 'zanzibar',
    packageType: 'cultural-package',
    subCategory: 'zanzibar',
    tourStyle: 'short-trip',
    itinerary: [
      {
        day: 1,
        title: 'Stone Town & Spice Tour Combination',
        description: 'Morning Stone Town guided tour—major historical sites, bustling markets, and cultural landmarks. Traditional Swahili lunch. Afternoon spice plantation tour with fruit tasting. Evening return with spices and memories. Perfect for cruise passengers or quick visits.',
        activities: ['Stone Town guided tour', 'Market exploration', 'Historical sites', 'Spice plantation tour', 'Fruit tasting'],
        meals: ['Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'All transfers',
      'Professional English-speaking guide',
      'Stone Town tour',
      'Spice plantation visit',
      'Traditional Swahili lunch',
      'All entrance fees',
      'Bottled water'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Personal expenses and tips',
      'Additional activities',
      'Alcoholic beverages'
    ],
    experience: 'Maximum Zanzibar experience in minimum time with flexible options covering essential cultural highlights, efficient touring perfect for cruise passengers or quick visits, and comprehensive introduction to the island\'s main attractions.'
  },

  // ========== ZANZIBAR PACKAGES - PHASE 3: LUXURY EXPERIENCES ==========
  {
    id: 'zanzibar-luxury-escape-7days',
    title: 'Zanzibar Luxury Escape - 7 Days/6 Nights',
    description: 'Ultimate luxury experience with private island paradise, world-class diving, personalized service, and complete exclusivity.',
    overview: 'The most exclusive Zanzibar experience featuring private island accommodation, gourmet dining, and personalized service in ultra-luxury settings.',
    price: 3850,
    duration: '7 days/6 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/luxury/main.jpg',
    images: {
      main: '/images/tours/zanzibar/luxury/main.jpg',
      mobile: '/images/tours/zanzibar/luxury/main.jpg',
      thumbnail: '/images/tours/zanzibar/luxury/main.jpg',
      alt: 'Ultimate luxury Zanzibar escape with private island accommodation and exclusive experiences'
    },
    location: 'Zanzibar',
    highlights: ['Ultimate Exclusivity', 'Private Island Paradise', 'World-Class Diving', 'Personalized Service', 'Gourmet Dining', 'Complete Luxury', 'Absolute Privacy'],
    rating: 5.0,
    reviewCount: 34,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'luxury',
    itinerary: [
      {
        day: 1,
        title: 'Luxurious Arrival',
        description: 'Private airport transfer to Emerson Zanzibar—stunning rooftop palace hotel in Stone Town\'s heart. Settle into opulent suite with four-poster bed, Persian rugs, antique furnishings, and modern luxuries. Afternoon private guided tour of Stone Town with historian guide revealing hidden stories. Sunset champagne at hotel\'s famous rooftop. Multi-course dinner at Emerson Spice rooftop restaurant—finest dining in Zanzibar with Taarab musicians.',
        activities: ['Private airport transfer', 'Luxury hotel check-in', 'Private Stone Town tour', 'Champagne sunset', 'Gourmet rooftop dinner'],
        meals: ['Dinner'],
        accommodation: 'Emerson Zanzibar'
      },
      {
        day: 2,
        title: 'Private Cultural Immersion',
        description: 'Private driver and expert guide for personalized explorations. Visit House of Wonders before crowds, private access to Sultan\'s Palace with curator. Behind-scenes tour of working spice warehouses. Private cooking class at historic house learning Swahili cuisine secrets from master chef. Lunch enjoying your creations. Afternoon private dhow cruise around harbor. Henna painting session with local artist. Evening at leisure or spa treatment at hotel. Gourmet dinner with wine pairing.',
        activities: ['Private guided tour', 'Exclusive palace access', 'Spice warehouse tour', 'Private cooking class', 'Private dhow cruise', 'Henna painting'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Emerson Zanzibar'
      },
      {
        day: 3,
        title: 'Private Island Transfer',
        description: 'Morning private spice plantation tour with botanist guide—in-depth plant knowledge and medicinal uses. Lunch at exclusive location. Afternoon helicopter transfer to Mnemba Island (weather permitting) or luxury speedboat. Arrive at &Beyond Mnemba Island Lodge—one of Africa\'s most exclusive resorts with only 12 beachfront bandas on private island. Personal butler service. Settle into your beach banda with outdoor shower, private beach area. Sunset cocktails, snorkeling off your beach. Dinner under stars—private tables on beach.',
        activities: ['Private spice tour', 'Helicopter/speedboat transfer', 'Private island arrival', 'Butler service', 'Private beach snorkeling', 'Starlit dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '&Beyond Mnemba Island Lodge'
      },
      {
        day: 4,
        title: 'Private Island Paradise',
        description: 'Wake to ocean sounds, private beach at your doorstep. All-inclusive experience—unlimited water sports, diving, snorkeling, kayaking, fishing. Morning guided snorkeling with marine biologist over pristine reefs. Return to banda for private breakfast. Midday spa treatment—massage in beach pavilion with ocean breezes. Lunch on your veranda or beach. Afternoon diving (certified guests) or more snorkeling seeking dolphins and turtles. Sunset dhow cruise with champagne. Dinner at different beach location nightly—lobster, prawns, fresh fish, international cuisine. Stargazing with telescope.',
        activities: ['Private beach access', 'Marine biologist snorkeling', 'Spa treatment', 'Water sports', 'Sunset champagne cruise', 'Gourmet beach dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '&Beyond Mnemba Island Lodge'
      },
      {
        day: 5,
        title: 'Marine Adventure Day',
        description: 'Full day tailored to your preferences. Options: deep sea fishing expedition, multiple dive sites, extended dolphin encounters, visit to nearby sandbanks for secluded picnic, sea kayaking exploration. All equipment and expert guides included. Everything prepared to your wishes. Beach picnic lunch on uninhabited sandbank. Afternoon continue adventures or return for spa and relaxation. Evening beach bonfire with traditional entertainment. Private candlelit dinner on beach.',
        activities: ['Customized marine activities', 'Deep sea fishing option', 'Sandbank picnic', 'Beach bonfire', 'Private candlelit dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '&Beyond Mnemba Island Lodge'
      },
      {
        day: 6,
        title: 'Ultimate Relaxation',
        description: 'Final full day on private island. Morning at complete leisure—beach, snorkeling, reading, spa. Personalized activities arranged by butler. Lunch at restaurant or delivered anywhere on island. Afternoon options: final snorkeling, beach walks, hammock relaxation, or water sports. Sunset photography session with professional. Final night celebratory dinner—special menu with chef, wine sommelier selections. After-dinner cocktails under stars with traditional music.',
        activities: ['Complete leisure', 'Personalized activities', 'Sunset photography', 'Celebratory gourmet dinner', 'Starlit cocktails'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '&Beyond Mnemba Island Lodge'
      },
      {
        day: 7,
        title: 'Farewell to Paradise',
        description: 'Final morning swim in pristine waters. Farewell breakfast on your veranda. Checkout and speedboat or helicopter transfer to Stone Town. Brief final shopping if desired—hotel staff arrange special access to best shops. Airport transfer in luxury vehicle. Depart with memories of ultimate luxury, paradise experienced, and soul rejuvenated.',
        activities: ['Final morning swim', 'Farewell breakfast', 'Helicopter/speedboat transfer', 'Special shopping access', 'Luxury airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private airport transfers',
      'Luxury accommodation throughout',
      'All meals and premium beverages',
      'Private guided tours and activities',
      'Helicopter/speedboat transfers',
      'Personal butler service',
      'All water sports and equipment',
      'Spa treatments',
      'Private dining experiences',
      'All taxes and service charges'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Personal shopping',
      'Additional premium services',
      'Special requests beyond package'
    ],
    accommodations: 'Emerson Zanzibar (2 nights) - Stone Town\'s most luxurious hotel + &Beyond Mnemba Island Lodge (4 nights) - ultra-exclusive private island paradise with only 12 beachfront bandas',
    experience: 'Ultimate exclusivity, private island paradise, world-class diving, personalized service, gourmet dining, complete luxury, absolute privacy, once-in-lifetime experience, sophisticated indulgence in Africa\'s most exclusive island retreat.'
  },

  // ========== ZANZIBAR PACKAGES - PHASE 4: ROMANTIC PACKAGES ==========
  {
    id: 'zanzibar-honeymoon-dream-6days',
    title: 'Zanzibar Honeymoon Dream - 6 Days/5 Nights',
    description: 'Romantic escape designed for couples with private experiences, luxury accommodations, and special honeymoon inclusions.',
    overview: 'The ultimate romantic getaway with couple-focused activities, private dining, and luxury beachfront accommodation perfect for honeymoons or anniversaries.',
    price: 1850,
    couplePrice: 1850,
    duration: '6 days/5 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/honeymoon/main.jpg',
    images: {
      main: '/images/tours/zanzibar/honeymoon/main.jpg',
      mobile: '/images/tours/zanzibar/honeymoon/main.jpg',
      thumbnail: '/images/tours/zanzibar/honeymoon/main.jpg',
      alt: 'Romantic Zanzibar honeymoon experience with couple-focused activities and luxury beachfront accommodation'
    },
    location: 'Zanzibar',
    highlights: ['Designed for Connection', 'Private Intimate Experiences', 'No Distractions', 'Couples Activities', 'Romantic Settings', 'Perfect Honeymoon or Anniversary'],
    rating: 4.9,
    reviewCount: 56,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'romantic',
    itinerary: [
      {
        day: 1,
        title: 'Romantic Arrival',
        description: 'Private airport transfer with welcome drinks. Arrive at romantic beachfront resort where room is decorated with flowers, candles, and champagne waiting. Afternoon at leisure settling in. Sunset viewing from private beach area. Welcome couples\' massage at spa. Romantic dinner on beach—private table with candles, flowers, and special menu. Starlit walk on beach.',
        activities: ['Private airport transfer', 'Romantic room setup', 'Sunset viewing', 'Couples massage', 'Private beach dinner', 'Starlit beach walk'],
        meals: ['Dinner'],
        accommodation: 'Boutique Beachfront Resort'
      },
      {
        day: 2,
        title: 'Spice of Love',
        description: 'Late morning breakfast in bed or on private terrace. Afternoon couples\' spice tour—playful and educational with aphrodisiac spice focus. Sample exotic fruits together. Return to resort. Couples\' spa afternoon—synchronized massage, facial treatments, body scrubs. Champagne and fresh fruits. Evening at leisure. Romantic dinner at resort\'s fine dining restaurant. Bonfire on beach with cocktails.',
        activities: ['Breakfast in bed', 'Couples spice tour', 'Spa afternoon', 'Champagne treatment', 'Fine dining dinner', 'Beach bonfire'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Boutique Beachfront Resort'
      },
      {
        day: 3,
        title: 'Marine Romance',
        description: 'Morning private boat excursion to secluded sandbank appearing at low tide—just you two, captain, and pristine nature. Snorkeling in crystal waters, swimming, sunbathing. Gourmet picnic lunch with champagne on deserted sandbank. Return for afternoon relaxation or couples\' activities—paddleboarding together, beach walks. Evening sunset dhow cruise with champagne and canapés. Romantic dinner under stars with live music.',
        activities: ['Private sandbank excursion', 'Snorkeling together', 'Champagne picnic', 'Couples activities', 'Sunset dhow cruise', 'Starlit dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Boutique Beachfront Resort'
      },
      {
        day: 4,
        title: 'Cultural Connection',
        description: 'Flexible day based on your energy. Option for gentle Stone Town day trip with private guide—holding hands through romantic alleyways, shopping together for memories. Couples\' cooking class learning Swahili cuisine together. Or simply stay at resort enjoying beach, pool, spa, and each other\'s company. Evening private beach dinner—specially arranged table, personal waiter, candlelight, customized menu, photographer captures moments.',
        activities: ['Flexible day options', 'Stone Town romance', 'Couples cooking class', 'Resort relaxation', 'Private beach dinner', 'Professional photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Boutique Beachfront Resort'
      },
      {
        day: 5,
        title: 'Adventure Together',
        description: 'Morning snorkeling excursion to Mnemba Atoll or nearby reefs—share excitement of underwater discoveries. Return for lunch. Afternoon options: jet skiing together, kayaking, kite surfing lessons, or beach relaxation. Final couples\' spa treatment—foot massage, scalp treatment, aromatherapy. Sunset cocktails. Final night special celebration dinner with live entertainment. Beach bonfire with s\'mores and champagne.',
        activities: ['Snorkeling adventure', 'Water sports together', 'Couples spa treatment', 'Sunset cocktails', 'Celebration dinner', 'Beach bonfire'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Boutique Beachfront Resort'
      },
      {
        day: 6,
        title: 'Lingering Goodbye',
        description: 'Final morning swimming together, breakfast on beach, last moments in paradise. Late checkout arranged. Room upgraded if available for final hours. Transfer to airport with hearts full, relationship strengthened, and memories created together forever.',
        activities: ['Morning swim together', 'Beach breakfast', 'Late checkout', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Private airport transfers',
      '5 nights luxury beachfront accommodation',
      'All meals and premium beverages',
      'Champagne and chocolate on arrival',
      'Romantic flower petal turndowns nightly',
      'Private candlelit beach dinners (3 included)',
      'Couples\' spa package with massage',
      'Sunset dhow cruise with champagne',
      'Anniversary/honeymoon cake',
      'Couples\' photo session',
      'All romantic inclusions mentioned'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Personal shopping',
      'Additional premium services',
      'Special requests beyond package'
    ],
    accommodations: 'Boutique beachfront resort with romantic beach bungalows, private pools, and couple-focused amenities',
    experience: 'Designed for connection, private intimate experiences, no distractions, couples\' activities, romantic settings, perfect honeymoon or anniversary, celebrate love in paradise, memories for lifetime.'
  },
  {
    id: 'lovers-zanzibar-escape-4days',
    title: 'Lovers\' Zanzibar Escape - 4 Days/3 Nights',
    description: 'Intimate romantic getaway with adult-focused atmosphere, couples\' activities, and flexible romance-focused itinerary.',
    overview: 'Shorter romantic escape perfect for couples seeking quality time together in intimate settings with romance-focused activities.',
    price: 1180,
    couplePrice: 1180,
    duration: '4 days/3 nights',
    difficulty: 'Easy',
    image: '/images/tours/zanzibar/lovers/main.jpeg',
    images: {
      main: '/images/tours/zanzibar/lovers/main.jpeg',
      mobile: '/images/tours/zanzibar/lovers/main.jpeg',
      thumbnail: '/images/tours/zanzibar/lovers/main.jpeg',
      alt: 'Intimate romantic Zanzibar escape with adult-focused atmosphere and couple activities'
    },
    location: 'Zanzibar',
    highlights: ['Intimate Atmosphere', 'Adult-Focused', 'Couples Activities', 'Flexible Romance', 'Beach Paradise', 'Quality Time Together'],
    rating: 4.8,
    reviewCount: 42,
    category: 'beach',
    section: 'zanzibar',
    packageType: 'beach-package',
    subCategory: 'zanzibar',
    tourStyle: 'romantic',
    itinerary: [
      {
        day: 1,
        title: 'Lovers\' Arrival',
        description: 'Afternoon arrival, immediate relaxation. Romantic room awaits—rose petals, candles, welcome sparkling wine, fruit platter. Rest and refresh. Sunset watching from beach hand-in-hand. Welcome dinner at beachfront restaurant—table for two with ocean views. Evening beach walk under stars, moonlight swimming.',
        activities: ['Airport arrival', 'Romantic room setup', 'Sunset watching', 'Beachfront dinner', 'Moonlight beach walk'],
        meals: ['Dinner'],
        accommodation: 'Intimate Boutique Hotel'
      },
      {
        day: 2,
        title: 'Beach Intimacy',
        description: 'Lazy morning, breakfast in bed or beach breakfast. Full day beach relaxation as couple—swimming, sunbathing, beach games. Afternoon couples\' spa treatment—synchronized massage in open-air pavilion with ocean sounds. Relax together in spa gardens. Evening sunset dhow cruise with champagne and snacks—just you two and crew. Return for romantic candlelit beach dinner—private table, personal service, seafood specialties, special touches.',
        activities: ['Breakfast in bed', 'Beach relaxation', 'Couples spa treatment', 'Sunset dhow cruise', 'Private beach dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Intimate Boutique Hotel'
      },
      {
        day: 3,
        title: 'Shared Adventures',
        description: 'Morning snorkeling excursion together discovering underwater wonders, helping each other, shared excitement. Return for lunch. Afternoon option: Prison Island trip meeting giant tortoises together, Stone Town brief exploration shopping for shared memories, or simply beach time. Evening at leisure—beach bars, live music, romantic cocktails, or quiet dinner. Photographers capture sunset photos of you both.',
        activities: ['Snorkeling together', 'Prison Island option', 'Shared exploration', 'Sunset photography', 'Romantic evening'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Intimate Boutique Hotel'
      },
      {
        day: 4,
        title: 'Final Romance',
        description: 'Morning final beach time together, swimming, coffee on beach. Couples\' photo session with professional—capture your love with Zanzibar beauty. Brunch together. Checkout and transfer reminiscing about shared experiences, already planning return.',
        activities: ['Final beach time', 'Couples photo session', 'Romantic brunch', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'Not included'
      }
    ],
    inclusions: [
      'Airport transfers',
      '3 nights intimate boutique accommodation',
      'All meals as specified',
      'Romantic room setup with flowers and wine',
      'One private candlelit beach dinner',
      'Couples\' sunset dhow cruise',
      'Shared spa treatment',
      'Couples\' photo session on beach',
      'All romantic inclusions mentioned'
    ],
    exclusions: [
      'International flights',
      'Zanzibar visa',
      'Travel insurance',
      'Optional activities',
      'Personal expenses and tips',
      'Additional premium services'
    ],
    accommodations: 'Intimate boutique hotel on Kendwa Beach with adults-only section, romantic atmosphere, and couple-focused environment',
    experience: 'Intimate atmosphere, adult-focused, couples\' activities, flexible romance, beach paradise, quality time together, strengthen bonds, celebrate relationship, affordable luxury romance.'
  }
];