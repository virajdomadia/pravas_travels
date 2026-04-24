export interface Package {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const packages: Package[] = [
  {
    id: "bali-escape",
    title: "Bali Escape",
    location: "Bali, Indonesia",
    duration: "5D/4N",
    price: 24999,
    image: "https://images.unsplash.com/photo-1520508739298-b900c6fdf0ab?w=800&q=80",
    description: "Experience the serene beauty of Bali with pristine beaches, ancient temples, and lush rice terraces.",
    highlights: [
      "Ubud Monkey Forest exploration",
      "Tanah Lot Temple sunset",
      "Seminyak Beach relaxation",
      "Traditional Balinese spa",
      "Rice terrace trekking"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Seminyak Beach",
        description: "Arrive at Ngurah Rai International Airport. Transfer to hotel and relax at Seminyak Beach."
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: "Visit Ubud Monkey Forest, traditional batik market, and local art galleries."
      },
      {
        day: 3,
        title: "Rice Terraces & Temples",
        description: "Trek through scenic rice fields and visit the ancient Tegallalang Temple."
      },
      {
        day: 4,
        title: "Tanah Lot & Spa",
        description: "Visit the iconic Tanah Lot Temple at sunset and enjoy a traditional Balinese massage."
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisure time before transfer to airport for departure."
      }
    ],
    inclusions: [
      "Accommodation (4 nights)",
      "Daily breakfast",
      "All transfers",
      "Guided tours",
      "Entrance fees",
      "Travel insurance"
    ],
    exclusions: [
      "International flights",
      "Meals not mentioned",
      "Personal expenses",
      "Activities not listed"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520508739298-b900c6fdf0ab?w=600&q=80",
      "https://images.unsplash.com/photo-1537225228614-b19960eeb4c0?w=600&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80"
    ]
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "6D/5N",
    price: 34999,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Discover snow-capped peaks, charming villages, and world-class hiking trails in the heart of the Alps.",
    highlights: [
      "Jungfrau region exploration",
      "Interlaken adventure sports",
      "Lauterbrunnen valley trek",
      "Swiss village tours",
      "Mountain railway experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich",
        description: "Arrive in Zurich, transfer to Interlaken hotel."
      },
      {
        day: 2,
        title: "Jungfrau Excursion",
        description: "Take the scenic train to Jungfraujoch (Top of Europe) with mountain views."
      },
      {
        day: 3,
        title: "Interlaken Activities",
        description: "Choose from paragliding, skydiving, or scenic hiking."
      },
      {
        day: 4,
        title: "Lauterbrunnen Valley Trek",
        description: "Hike through stunning valleys and visit picturesque waterfalls."
      },
      {
        day: 5,
        title: "Grindelwald & Bernese Oberland",
        description: "Explore charming alpine villages and scenic meadows."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to airport for departure."
      }
    ],
    inclusions: [
      "Accommodation (5 nights)",
      "Daily breakfast",
      "Train passes",
      "All guided tours",
      "Mountain activities",
      "Travel insurance"
    ],
    exclusions: [
      "International flights",
      "Meals not mentioned",
      "Adventure sports insurance",
      "Personal expenses"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
    ]
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters",
    location: "Kerala, India",
    duration: "4D/3N",
    price: 14999,
    image: "https://images.unsplash.com/photo-1512100355124-c51b1d82c537?w=800&q=80",
    description: "Cruise through serene backwaters, visit spice plantations, and experience authentic Kerala hospitality.",
    highlights: [
      "Houseboat backwater cruise",
      "Spice plantation tour",
      "Kathakali performance",
      "Beach relaxation",
      "Local cuisine experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Arrive at Kochi airport, settle into hotel, explore local markets."
      },
      {
        day: 2,
        title: "Spice Plantation & Cruise",
        description: "Visit spice plantations and enjoy scenic backwater cruise."
      },
      {
        day: 3,
        title: "Houseboat Experience",
        description: "Full day houseboat journey through tranquil backwaters with meals onboard."
      },
      {
        day: 4,
        title: "Cultural Evening & Departure",
        description: "Kathakali dance performance and departure."
      }
    ],
    inclusions: [
      "Accommodation (3 nights)",
      "Daily breakfast",
      "Houseboat cruise",
      "Spice plantation tour",
      "Guided tours",
      "Meals as per itinerary"
    ],
    exclusions: [
      "Flights",
      "Additional meals",
      "Personal activities",
      "Tips"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512100355124-c51b1d82c537?w=600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1508681269041-ff69e41a0aee?w=600&q=80"
    ]
  },
  {
    id: "paris-romance",
    title: "Paris Romance",
    location: "Paris, France",
    duration: "4D/3N",
    price: 29999,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    description: "Fall in love with the City of Light, iconic landmarks, world-class museums, and fine dining.",
    highlights: [
      "Eiffel Tower experience",
      "Louvre Museum tour",
      "Seine River cruise",
      "Champs-Élysées shopping",
      "Montmartre artistic quarter"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Eiffel Tower",
        description: "Arrive in Paris, visit the iconic Eiffel Tower."
      },
      {
        day: 2,
        title: "Museum & Culture",
        description: "Explore Louvre Museum and Parisian art galleries."
      },
      {
        day: 3,
        title: "Seine Cruise & Montmartre",
        description: "River cruise and visit the artistic district of Montmartre."
      },
      {
        day: 4,
        title: "Shopping & Departure",
        description: "Champs-Élysées shopping and departure."
      }
    ],
    inclusions: [
      "Accommodation (3 nights)",
      "Daily breakfast",
      "Guided tours",
      "Museum entries",
      "River cruise",
      "Travel insurance"
    ],
    exclusions: [
      "Flights",
      "Meals not mentioned",
      "Shopping",
      "Personal expenses"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      "https://images.unsplash.com/photo-1550340579-dac6c8987b8b?w=600&q=80",
      "https://images.unsplash.com/photo-1499856871957-fffd8660a8a0?w=600&q=80"
    ]
  },
  {
    id: "dubai-luxury",
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "5D/4N",
    price: 39999,
    image: "https://images.unsplash.com/photo-1518817284458-5a3f71c6f3fa?w=800&q=80",
    description: "Experience luxury shopping, modern architecture, desert safaris, and world-class entertainment.",
    highlights: [
      "Burj Khalifa visit",
      "Dubai Mall shopping",
      "Desert safari",
      "Gold Souk tour",
      "Marina yacht cruise"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & City Tour",
        description: "Arrive in Dubai, visit Burj Khalifa and The Dubai Mall."
      },
      {
        day: 2,
        title: "Desert Safari",
        description: "Thrilling desert safari with dune bashing and traditional dinner."
      },
      {
        day: 3,
        title: "Marina & Yacht Cruise",
        description: "Marina walk and luxury yacht cruise along the coast."
      },
      {
        day: 4,
        title: "Gold Souk & Shopping",
        description: "Traditional Gold Souk exploration and luxury shopping."
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisure and departure."
      }
    ],
    inclusions: [
      "5-star accommodation",
      "Daily breakfast",
      "All tours and activities",
      "Transfers",
      "Meals as per itinerary"
    ],
    exclusions: [
      "Flights",
      "Shopping",
      "Personal expenses",
      "Tips"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518817284458-5a3f71c6f3fa?w=600&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
      "https://images.unsplash.com/photo-1512906736489-c8099e39bff0?w=600&q=80"
    ]
  },
  {
    id: "japan-cultural",
    title: "Japan Cultural Journey",
    location: "Japan",
    duration: "7D/6N",
    price: 44999,
    image: "https://images.unsplash.com/photo-1522383150241-6c85cf17589f?w=800&q=80",
    description: "Immerse yourself in ancient temples, modern cities, traditional tea ceremonies, and cherry blossoms.",
    highlights: [
      "Tokyo exploration",
      "Kyoto temples",
      "Mount Fuji views",
      "Traditional tea ceremony",
      "Sumo wrestling experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Arrive in Tokyo, explore Shibuya and Shinjuku districts."
      },
      {
        day: 2,
        title: "Tokyo Imperial Tour",
        description: "Visit Imperial Palace, Senso-ji Temple, and Asakusa area."
      },
      {
        day: 3,
        title: "Mt. Fuji & Hakone",
        description: "Day trip to Mt. Fuji and Hakone with scenic views."
      },
      {
        day: 4,
        title: "Travel to Kyoto",
        description: "Bullet train to Kyoto, explore historic districts."
      },
      {
        day: 5,
        title: "Kyoto Temples & Tea Ceremony",
        description: "Visit golden temples and experience traditional tea ceremony."
      },
      {
        day: 6,
        title: "Arashiyama Bamboo Grove",
        description: "Bamboo forest trek and traditional Geisha experience."
      },
      {
        day: 7,
        title: "Departure",
        description: "Return to Tokyo and depart."
      }
    ],
    inclusions: [
      "Accommodation (6 nights)",
      "Daily breakfast",
      "JR Pass",
      "Guided tours",
      "Activities",
      "Travel insurance"
    ],
    exclusions: [
      "International flights",
      "Meals not mentioned",
      "Personal expenses",
      "Shopping"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522383150241-6c85cf17589f?w=600&q=80",
      "https://images.unsplash.com/photo-1540959375944-7049f642e9d4?w=600&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80"
    ]
  }
];

export const destinations: Destination[] = [
  {
    id: "asia",
    name: "Asia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    description: "Explore ancient temples and vibrant cultures"
  },
  {
    id: "europe",
    name: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=80",
    description: "Experience historic landmarks and charming villages"
  },
  {
    id: "middle-east",
    name: "Middle East",
    image: "https://images.unsplash.com/photo-1518817284458-5a3f71c6f3fa?w=500&q=80",
    description: "Discover luxury and modern architecture"
  },
  {
    id: "africa",
    name: "Africa",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80",
    description: "Safari adventures and natural wonders"
  },
  {
    id: "americas",
    name: "Americas",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80",
    description: "Natural beauty and cultural diversity"
  },
  {
    id: "oceania",
    name: "Oceania",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80",
    description: "Island paradises and tropical escapes"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Adventure Enthusiast",
    content: "Our Bali trip was absolutely magical! Every detail was perfectly arranged. The team's attention to detail made it unforgettable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Honeymooner",
    content: "The Paris package exceeded all our expectations. Romantic, well-organized, and incredible value. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: "3",
    name: "Anjali Patel",
    role: "Family Traveler",
    content: "Kerala backwaters were a perfect family getaway. Peaceful, beautiful, and the kids had the time of their lives!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Solo Traveler",
    content: "Japan was a dream come true! The guided tours, cultural experiences, and WhatsApp support throughout was fantastic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }
];

export const whyChooseUs = [
  {
    icon: "🎯",
    title: "Curated Experiences",
    description: "Handpicked packages designed for maximum enjoyment and unforgettable memories."
  },
  {
    icon: "💰",
    title: "Best Value Pricing",
    description: "Competitive rates with transparent pricing. No hidden costs, just great deals."
  },
  {
    icon: "📱",
    title: "24/7 WhatsApp Support",
    description: "Instant assistance whenever you need it. Our team is always just a message away."
  },
  {
    icon: "🛡️",
    title: "Secure & Verified",
    description: "All packages include travel insurance and verified accommodation partners."
  }
];
