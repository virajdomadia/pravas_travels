export const WHATSAPP_NUMBER = "919167439172";

export const whatsappURL = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface Package {
  id: string;
  title: string;
  location: string;
  category: "international" | "domestic";
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  description: string;
  perfectForCouples: boolean;
  bestTimeToVisit: string;
  featured: boolean;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  faq: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  content: string;
  rating: number;
  image: string;
}

export const packages: Package[] = [
  // ── INTERNATIONAL ────────────────────────────────────────────────
  {
    id: "bali-escape",
    title: "Bali Romantic Escape",
    location: "Bali, Indonesia",
    category: "international",
    duration: "5D/4N",
    price: 24999,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description:
      "Lose yourselves in Bali's serene rice terraces, ancient temples, and couples spa rituals. An intimate escape designed for two.",
    perfectForCouples: true,
    bestTimeToVisit: "April to October",
    featured: true,
    highlights: [
      "Sunrise over Tegalalang Rice Terraces",
      "Private Tanah Lot sunset visit",
      "Couples Balinese spa ritual",
      "Ubud cultural & art tour",
      "Seminyak beachfront leisure",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Seminyak", description: "Arrive at Ngurah Rai Airport, transfer to your boutique beachfront hotel. Evening stroll at Seminyak Beach with a sunset cocktail." },
      { day: 2, title: "Ubud Cultural Immersion", description: "Visit the Ubud Monkey Forest, local art galleries, and a traditional batik workshop. Romantic candlelit dinner by the rice fields." },
      { day: 3, title: "Rice Terraces & Spa", description: "Morning at Tegalalang rice terraces. Afternoon couples spa at a luxury wellness resort — Balinese massage and flower bath included." },
      { day: 4, title: "Tanah Lot & Kecak Dance", description: "Visit the iconic Tanah Lot sea temple at sunset. Evening Kecak Fire Dance performance." },
      { day: 5, title: "Leisure & Departure", description: "Relaxed morning — last-minute shopping at Seminyak boutiques. Transfer to airport for departure." },
    ],
    inclusions: [
      "4 nights in boutique hotel (breakfast daily)",
      "Airport transfers (private car)",
      "All guided day tours",
      "Couples spa session (90 min)",
      "Kecak dance show tickets",
      "Travel insurance",
    ],
    exclusions: [
      "International airfare",
      "Meals beyond breakfast",
      "Personal shopping & expenses",
      "Optional activity upgrades",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
      "https://images.unsplash.com/photo-1531778272849-d1dd22444c06?w=600&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
    ],
    faq: [
      { question: "Is this package customisable?", answer: "Yes. Our travel expert will tailor the itinerary to your preferences — hotel category, add-on experiences, or extra nights." },
      { question: "Do I need a visa for Bali?", answer: "Indian passport holders get a free Visa on Arrival (30 days) at Bali airport. We guide you through the process." },
      { question: "Is this suitable for a honeymoon?", answer: "Absolutely. Bali is one of our top honeymoon picks — this package is specifically curated for couples." },
      { question: "What's the group size?", answer: "This is a private package — just the two of you (or your group). No shared tours." },
    ],
  },
  {
    id: "paris-romance",
    title: "Paris Romance",
    location: "Paris, France",
    category: "international",
    duration: "4D/3N",
    price: 29999,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    description:
      "The City of Light, crafted for lovers. Iconic landmarks, world-class cuisine, and a Seine River cruise — Paris at its most romantic.",
    perfectForCouples: true,
    bestTimeToVisit: "April to June, September to November",
    featured: true,
    highlights: [
      "Eiffel Tower illumination experience",
      "Private Seine River dinner cruise",
      "Louvre Museum guided tour",
      "Montmartre artistic quarter stroll",
      "Champagne toast at sunset",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Eiffel Tower", description: "Arrive in Paris, check into your boutique hotel near the Seine. Evening visit to the Eiffel Tower — watch the city light up at dusk." },
      { day: 2, title: "Louvre & Latin Quarter", description: "Morning at the Louvre Museum. Afternoon in the Latin Quarter — café, bookshops, Seine banks." },
      { day: 3, title: "Montmartre & Dinner Cruise", description: "Explore the artistic Montmartre hill. Evening: private Seine dinner cruise with a glass of champagne." },
      { day: 4, title: "Shopping & Departure", description: "Morning on Champs-Élysées. Transfer to Charles de Gaulle airport for departure." },
    ],
    inclusions: [
      "3 nights boutique hotel (breakfast daily)",
      "Airport transfers",
      "Louvre Museum tickets",
      "Private Seine dinner cruise",
      "City orientation tour",
      "Travel insurance",
    ],
    exclusions: [
      "International flights",
      "Lunches & dinners (beyond cruise)",
      "Shopping",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=600&q=80",
      "https://images.unsplash.com/photo-1499856871957-fffd8660a8a0?w=600&q=80",
    ],
    faq: [
      { question: "Is a Schengen visa difficult to get?", answer: "We guide you through the full Schengen visa application. Most applicants get it within 5-10 working days when applied correctly." },
      { question: "Can we extend the trip to other European cities?", answer: "Yes — we can extend to Amsterdam, Rome, or Zurich. Talk to your travel expert." },
      { question: "Is Paris safe for couples?", answer: "Paris is extremely popular with couples and is safe in all tourist areas with standard precautions." },
      { question: "Best time for the Eiffel Tower?", answer: "The sparkling light show runs every hour after dark — it's magical and completely free to watch from below." },
    ],
  },
  {
    id: "dubai-luxury",
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    category: "international",
    duration: "5D/4N",
    price: 39999,
    image: "https://images.unsplash.com/photo-1518817284458-5a3f71c6f3fa?w=800&q=80",
    description:
      "From rooftop infinity pools to desert stargazing — Dubai's contrast of ultra-modern luxury and ancient desert culture, curated for couples.",
    perfectForCouples: true,
    bestTimeToVisit: "November to March",
    featured: true,
    highlights: [
      "Burj Khalifa observation deck (At The Top)",
      "Private desert safari & stargazing dinner",
      "Dubai Marina sunset yacht cruise",
      "Gold Souk & Spice Souk exploration",
      "Atlantis Aquaventure or spa access",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Burj Khalifa", description: "Arrive at Dubai International. Check in to your 5-star hotel. Evening at Burj Khalifa 'At the Top' followed by Dubai Fountain show." },
      { day: 2, title: "Desert Safari", description: "Morning leisure. Afternoon: private desert safari — dune bashing, camel ride, sundowner, and starlit dinner with live music." },
      { day: 3, title: "Dubai Marina & Yacht", description: "Stroll Dubai Marina. Sunset private yacht cruise along the Palm and JBR coastline. Dinner at a Marina waterfront restaurant." },
      { day: 4, title: "Old Dubai & Souks", description: "Gold Souk, Spice Souk, Abra ride across Dubai Creek, Al Fahidi Historic District." },
      { day: 5, title: "Leisure & Departure", description: "Pool or spa morning at the hotel. Transfer to airport." },
    ],
    inclusions: [
      "4 nights 5-star hotel (breakfast daily)",
      "All private transfers",
      "Burj Khalifa 'At the Top' tickets",
      "Private desert safari with dinner",
      "Sunset yacht cruise",
      "Travel insurance",
    ],
    exclusions: [
      "International flights",
      "Meals beyond breakfast & desert dinner",
      "Alcohol",
      "Shopping & personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518817284458-5a3f71c6f3fa?w=600&q=80",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80",
      "https://images.unsplash.com/photo-1512906736489-c8099e39bff0?w=600&q=80",
    ],
    faq: [
      { question: "Do I need a visa for Dubai?", answer: "Indian passport holders get a visa-on-arrival for 14 days (free) or can apply for a 30-day visa. We handle the paperwork." },
      { question: "Is Dubai suitable for couples?", answer: "Dubai is one of the top luxury honeymoon destinations in the world — extremely couple-friendly." },
      { question: "What's the best hotel zone to stay?", answer: "We recommend Downtown Dubai (near Burj Khalifa) or the Palm for the best couple experience. We'll suggest based on your budget." },
      { question: "Can we add Maldives after Dubai?", answer: "Yes — a Dubai + Maldives combo is very popular. Ask your travel expert for a custom quote." },
    ],
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    category: "international",
    duration: "6D/5N",
    price: 34999,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Snow-capped peaks, turquoise alpine lakes, and charming villages. Switzerland — timeless, unhurried, and impossibly beautiful.",
    perfectForCouples: false,
    bestTimeToVisit: "June to September (summer); December to February (snow)",
    featured: false,
    highlights: [
      "Jungfraujoch — Top of Europe",
      "Lauterbrunnen Valley waterfalls",
      "Interlaken adventure activities",
      "Lucerne Old Town walk",
      "Scenic mountain train rides",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Zurich / Interlaken", description: "Arrive in Zurich. Scenic train to Interlaken. Hotel check-in and orientation walk." },
      { day: 2, title: "Jungfraujoch", description: "Take the cog railway to Jungfraujoch (3,454 m) — the Sphinx Observatory, Ice Palace, and panoramic views." },
      { day: 3, title: "Lauterbrunnen & Grindelwald", description: "Day in the valley — Staubbach Falls, Trümmelbach Falls, and views of Eiger North Face." },
      { day: 4, title: "Interlaken Activities", description: "Choose from paragliding, skydiving, river rafting, or a scenic hike." },
      { day: 5, title: "Lucerne", description: "Train to Lucerne. Kapellbrücke bridge, Lion Monument, lakeside promenade." },
      { day: 6, title: "Zurich & Departure", description: "Morning in Zurich's Altstadt. Flight departure." },
    ],
    inclusions: [
      "5 nights hotel (breakfast daily)",
      "Swiss Travel Pass (trains, buses, boats)",
      "Jungfraujoch tickets",
      "All guided tours",
      "Travel insurance",
    ],
    exclusions: [
      "International flights",
      "Meals beyond breakfast",
      "Adventure sports extras",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    ],
    faq: [
      { question: "Is Switzerland very expensive?", answer: "Switzerland is premium but our packages include most costs. We offer transparent pricing with no hidden surprises." },
      { question: "Best season to visit?", answer: "June–September for green landscapes; December–February for snow and skiing. Both are spectacular." },
      { question: "Schengen visa required?", answer: "Yes. We guide you through the complete Swiss Schengen application process." },
      { question: "Can this be extended?", answer: "Easily extended to France, Germany, or Austria — all neighbouring countries." },
    ],
  },
  {
    id: "japan-cultural",
    title: "Japan Cultural Journey",
    location: "Japan",
    category: "international",
    duration: "7D/6N",
    price: 44999,
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
    description:
      "Ancient temples, bamboo forests, bullet trains, and cherry blossoms. Japan is unlike anywhere else on earth — and this journey proves it.",
    perfectForCouples: true,
    bestTimeToVisit: "March to May (cherry blossom); October to November (autumn)",
    featured: false,
    highlights: [
      "Shibuya crossing & Shinjuku",
      "Mount Fuji day trip",
      "Kyoto's Arashiyama Bamboo Grove",
      "Traditional tea ceremony",
      "Bullet train (Shinkansen) experience",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", description: "Arrive at Narita/Haneda. Hotel check-in. Evening in Shinjuku." },
      { day: 2, title: "Tokyo — Imperial & Asakusa", description: "Imperial Palace, Senso-ji Temple, Nakamise shopping street." },
      { day: 3, title: "Mount Fuji & Hakone", description: "Day trip to Mt. Fuji 5th Station and Hakone for volcanic views and hot springs." },
      { day: 4, title: "Bullet Train to Kyoto", description: "Shinkansen to Kyoto. Check in. Evening in Gion district." },
      { day: 5, title: "Kyoto Temples & Tea", description: "Fushimi Inari, Kinkaku-ji (Golden Pavilion), traditional tea ceremony." },
      { day: 6, title: "Arashiyama", description: "Bamboo grove trek, Tenryu-ji temple garden, Togetsukyo bridge." },
      { day: 7, title: "Return to Tokyo & Departure", description: "Shinkansen back to Tokyo. Departure from Narita/Haneda." },
    ],
    inclusions: [
      "6 nights hotel (breakfast daily)",
      "JR Pass (7-day)",
      "All guided city tours",
      "Tea ceremony experience",
      "Fuji day trip",
      "Travel insurance",
    ],
    exclusions: [
      "International airfare",
      "Meals beyond breakfast",
      "Personal shopping",
      "Bullet train extras",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&q=80",
    ],
    faq: [
      { question: "Do I need a Japan visa?", answer: "Yes. Japan requires a tourist visa for Indian passport holders. Approval is typically within 5-7 working days. We guide you through it." },
      { question: "Is Japan expensive?", answer: "Japan is moderate to premium. Our package is all-in with transparent pricing. Food is affordable once there." },
      { question: "Best time for cherry blossoms?", answer: "Late March to mid-April. Book early — this window is very popular and hotels fill up fast." },
      { question: "Is this suitable for a honeymoon?", answer: "Japan is a unique, deeply romantic choice — especially Kyoto. Many couples choose this for its cultural intimacy." },
    ],
  },
  {
    id: "maldives-escape",
    title: "Maldives Overwater Escape",
    location: "Maldives",
    category: "international",
    duration: "5D/4N",
    price: 49999,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description:
      "Overwater villas, crystal lagoons, and nothing but blue horizon. The Maldives — the world's most private, romantic destination.",
    perfectForCouples: true,
    bestTimeToVisit: "November to April",
    featured: false,
    highlights: [
      "Overwater villa with private deck",
      "Sunrise snorkelling with manta rays",
      "Private sandbank picnic",
      "Couples sunset dolphin cruise",
      "Underwater restaurant experience",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Speedboat Transfer", description: "Fly into Malé. Speedboat to your resort. Welcome drinks and villa check-in. Sunset from your private deck." },
      { day: 2, title: "Snorkelling & Reef", description: "Morning house reef snorkelling. Afternoon beach leisure or spa." },
      { day: 3, title: "Sandbank Picnic", description: "Private speedboat to a deserted sandbank. Champagne picnic prepared by the resort." },
      { day: 4, title: "Dolphin Cruise & Spa", description: "Sunset dolphin cruise. Couples spa treatment (90 min)." },
      { day: 5, title: "Leisure & Departure", description: "Last morning in your overwater villa. Speedboat to Malé for departure." },
    ],
    inclusions: [
      "4 nights overwater villa (half board)",
      "Malé airport–resort speedboat transfers",
      "Snorkelling equipment",
      "Private sandbank picnic",
      "Sunset dolphin cruise",
      "Travel insurance",
    ],
    exclusions: [
      "International airfare",
      "Alcohol",
      "Motorised water sports",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=600&q=80",
    ],
    faq: [
      { question: "Do Indians need a visa for Maldives?", answer: "No visa required. Indians get a 30-day on-arrival stamp free of charge." },
      { question: "Which resort island do you recommend?", answer: "We work with resorts across all budgets and atolls. Your travel expert will match the right resort to your preferences." },
      { question: "Is this the most expensive package?", answer: "The Maldives package starts at ₹49,999 per person. We can build packages at higher tiers — let us know your budget." },
      { question: "When should we book?", answer: "At least 2-3 months in advance for peak season (December–March). Last-minute availability is very limited." },
    ],
  },

  // ── DOMESTIC ─────────────────────────────────────────────────────
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters",
    location: "Kerala, India",
    category: "domestic",
    duration: "4D/3N",
    price: 14999,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
    description:
      "Glide through palm-fringed backwaters on a private houseboat, explore spice plantations, and unwind in God's Own Country.",
    perfectForCouples: true,
    bestTimeToVisit: "October to February",
    featured: true,
    highlights: [
      "Private houseboat overnight stay",
      "Alleppey backwater cruise",
      "Munnar tea estate walk",
      "Kathakali cultural performance",
      "Ayurvedic spa session",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive at Kochi airport. Hotel check-in. Evening stroll at Marine Drive and Fort Kochi." },
      { day: 2, title: "Munnar Tea Country", description: "Drive to Munnar. Tea plantation walk, tea factory visit, viewpoints." },
      { day: 3, title: "Houseboat — Alleppey", description: "Board your private houseboat at Alleppey. Cruise the backwaters; lunch, dinner and breakfast onboard included." },
      { day: 4, title: "Kovalam & Departure", description: "Disembark houseboat. Drive to Kovalam beach. Ayurvedic massage. Evening departure." },
    ],
    inclusions: [
      "3 nights (hotel + houseboat)",
      "Houseboat meals (lunch, dinner, breakfast)",
      "All transfers (private car)",
      "Kathakali show tickets",
      "Ayurvedic massage (60 min)",
      "Travel insurance",
    ],
    exclusions: [
      "Flights or train tickets",
      "Meals beyond houseboat",
      "Personal expenses",
      "Tips",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
    ],
    faq: [
      { question: "Is the houseboat private?", answer: "Yes — the houseboat is exclusively for your group. No other guests are onboard." },
      { question: "Is this suitable for a honeymoon?", answer: "Kerala is one of India's top honeymoon destinations. This package is specifically designed for couples." },
      { question: "Best time to visit?", answer: "October to February for calm backwaters and pleasant weather. Monsoon (June–September) is lush but rough for houseboats." },
      { question: "Can we extend to Lakshadweep?", answer: "Yes — we can arrange a Lakshadweep extension from Kochi. Very limited permits, so book early." },
    ],
  },
  {
    id: "rajasthan-royale",
    title: "Rajasthan Royal Trail",
    location: "Rajasthan, India",
    category: "domestic",
    duration: "6D/5N",
    price: 18999,
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&q=80",
    description:
      "Majestic forts, rooftop palace dinners, camel safaris at dusk, and heritage haveli stays. Royal Rajasthan — where every moment feels like a fairytale.",
    perfectForCouples: true,
    bestTimeToVisit: "October to March",
    featured: true,
    highlights: [
      "Heritage haveli stay in Jaisalmer",
      "Camel safari into the Thar Desert",
      "Sunset at Lake Pichola, Udaipur",
      "City Palace & Mehrangarh Fort",
      "Rooftop dinner with folk performances",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", description: "Arrive in Jaipur — the Pink City. Evening walk in the old bazaars. Dinner at a rooftop heritage restaurant." },
      { day: 2, title: "Jaipur Forts & Palaces", description: "Amber Fort, Hawa Mahal, City Palace Museum. Cooking class and local market walk." },
      { day: 3, title: "Jodhpur — Blue City", description: "Drive to Jodhpur. Mehrangarh Fort (one of India's most impressive), Jaswant Thada, Ghanta Ghar." },
      { day: 4, title: "Jaisalmer — Golden City", description: "Drive to Jaisalmer. Check in to heritage haveli. Evening inside the Jaisalmer Fort." },
      { day: 5, title: "Thar Desert Safari", description: "Camel safari into the dunes. Sunset over the desert. Cultural dinner under the stars with folk music." },
      { day: 6, title: "Udaipur & Departure", description: "Drive or fly to Udaipur. Lake Pichola boat ride. Evening departure." },
    ],
    inclusions: [
      "5 nights (mix of heritage hotels & haveli)",
      "Breakfast daily",
      "All inter-city private transfers",
      "Camel safari & desert dinner",
      "All fort/palace entry tickets",
      "Travel insurance",
    ],
    exclusions: [
      "Train/flight to/from Jaipur",
      "Lunches & dinners (beyond desert dinner)",
      "Shopping",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed31203?w=600&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80",
    ],
    faq: [
      { question: "Is Rajasthan very hot?", answer: "October to March is perfect — warm days, cool evenings. Summers (April–June) are very hot and not recommended." },
      { question: "Is this good for a honeymoon?", answer: "Rajasthan is one of the most romantic domestic destinations — heritage palaces, candlelit dinners, desert sunsets." },
      { question: "Are the heritage hotels comfortable?", answer: "Yes. We use carefully selected properties — authentic haveli character with modern amenities (AC, ensuite bathrooms)." },
      { question: "Can this be shortened to 4 days?", answer: "Yes — we can customise to cover just Jaipur + Jaisalmer, or Jodhpur + Udaipur." },
    ],
  },
  {
    id: "andaman-islands",
    title: "Andaman Island Escape",
    location: "Andaman & Nicobar Islands",
    category: "domestic",
    duration: "5D/4N",
    price: 22999,
    image: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=800&q=80",
    description:
      "Some of Asia's finest beaches — crystal water, white sand, vibrant coral. The Andamans are India's best-kept tropical secret.",
    perfectForCouples: true,
    bestTimeToVisit: "October to May",
    featured: true,
    highlights: [
      "Radhanagar Beach (Asia's best beach)",
      "Elephant Beach snorkelling",
      "Scuba diving in Havelock Island",
      "Cellular Jail Light & Sound Show",
      "Neil Island — serene & untouched",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Port Blair", description: "Arrive at Veer Savarkar Airport. Hotel check-in. Evening at Cellular Jail for the Light & Sound Show." },
      { day: 2, title: "Havelock Island", description: "Ferry to Havelock. Check in at a beachfront resort. Afternoon at Radhanagar Beach — Asia's most beautiful beach." },
      { day: 3, title: "Snorkelling & Scuba", description: "Morning at Elephant Beach — snorkelling with corals. Afternoon: optional scuba dive (certified or beginner)." },
      { day: 4, title: "Neil Island", description: "Ferry to Neil Island. Natural Bridge, Bharatpur Beach, Laxmanpur Beach sunset." },
      { day: 5, title: "Return to Port Blair & Departure", description: "Ferry back to Port Blair. Last-minute shopping at Aberdeen Bazaar. Departure." },
    ],
    inclusions: [
      "4 nights (Port Blair + Havelock + Neil)",
      "Breakfast daily",
      "All ferry tickets (Port Blair ↔ Havelock ↔ Neil)",
      "Elephant Beach snorkelling",
      "Cellular Jail tickets",
      "Travel insurance",
    ],
    exclusions: [
      "Flights to/from Port Blair",
      "Meals beyond breakfast",
      "Scuba diving charges",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=600&q=80",
      "https://images.unsplash.com/photo-1614885614697-04cf8e0e2e3e?w=600&q=80",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
    ],
    faq: [
      { question: "Do I need a permit for Andaman?", answer: "Indian nationals do not need any special permit for the Andaman & Nicobar Islands. Just a valid ID." },
      { question: "Is this suitable for a honeymoon?", answer: "Yes — the Andamans are one of India's top honeymoon picks. Secluded beaches, pristine water, private vibes." },
      { question: "Which ferry service do you use?", answer: "We book private/government ferries on the Havelock and Neil routes depending on availability and season." },
      { question: "Is scuba diving safe for beginners?", answer: "Yes. Havelock has excellent beginner dive centres. No certification required — instructors guide you throughout." },
    ],
  },
  {
    id: "himachal-highlands",
    title: "Himachal Highland Retreat",
    location: "Manali & Shimla, India",
    category: "domestic",
    duration: "6D/5N",
    price: 16999,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    description:
      "Snow-capped peaks, apple orchards, and alpine meadows. Himachal's cool mountain air, cosy boutique stays, and Rohtang views await.",
    perfectForCouples: true,
    bestTimeToVisit: "October to June (Manali); year-round (Shimla)",
    featured: false,
    highlights: [
      "Rohtang Pass snow experience",
      "Solang Valley activities",
      "Hadimba Temple, Manali",
      "Mall Road, Shimla",
      "Apple orchard walk in Kullu",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Arrive in Shimla by overnight train/bus. Hotel check-in. Stroll on Mall Road and The Ridge." },
      { day: 2, title: "Shimla Sightseeing", description: "Jakhu Hill, Christ Church, Viceregal Lodge. Shopping at Lakkar Bazaar." },
      { day: 3, title: "Drive to Manali", description: "Scenic drive via Kullu. Apple orchards, river rafting option at Beas." },
      { day: 4, title: "Rohtang Pass", description: "Morning drive to Rohtang Pass (snow). Afternoon: Solang Valley for activities — zorbing, ATV, paragliding." },
      { day: 5, title: "Manali Local", description: "Hadimba Temple, Manu Temple, Old Manali cafes. Leisure." },
      { day: 6, title: "Departure", description: "Drive back to Chandigarh/Shimla for departure." },
    ],
    inclusions: [
      "5 nights hotel (breakfast daily)",
      "All private transfers",
      "Rohtang Pass permit & cab",
      "Solang Valley activity voucher",
      "Guided local tours",
      "Travel insurance",
    ],
    exclusions: [
      "Train/flight to Shimla or from Chandigarh",
      "Meals beyond breakfast",
      "Adventure sport extras",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80",
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
    ],
    faq: [
      { question: "When is the best time for snow in Manali?", answer: "December to February for heavy snow. October–November and March–June for lighter snow with pleasant weather." },
      { question: "Is Rohtang accessible year-round?", answer: "No — Rohtang is closed November to May due to snowfall. We plan the itinerary based on your travel dates." },
      { question: "Is it suitable for a honeymoon?", answer: "Absolutely. Mountain towns, cosy cafés, bonfire evenings — Himachal has a romantic, unhurried pace." },
      { question: "How do we reach Shimla?", answer: "Best by overnight Kalka–Shimla toy train (UNESCO heritage) or by road from Delhi/Chandigarh. We arrange pick-up." },
    ],
  },
  {
    id: "goa-beach",
    title: "Goa Beach & Beyond",
    location: "Goa, India",
    category: "domestic",
    duration: "4D/3N",
    price: 12999,
    image: "https://images.unsplash.com/photo-1614029518490-26893c20ab2b?w=800&q=80",
    description:
      "Golden beaches, Portuguese heritage, fresh seafood, and lazy sundowners. Goa — endlessly relaxed, endlessly beautiful.",
    perfectForCouples: false,
    bestTimeToVisit: "November to February",
    featured: false,
    highlights: [
      "Palolem & Agonda — quiet southern beaches",
      "Old Goa UNESCO churches",
      "Sunset cruise on Mandovi River",
      "Spice plantation lunch",
      "Anjuna flea market",
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive at Goa airport. Transfer to hotel. Evening beach walk and fresh seafood dinner." },
      { day: 2, title: "Old Goa & Spice Farm", description: "Bom Jesus Basilica, Se Cathedral, Sé Church. Afternoon at a spice plantation with lunch." },
      { day: 3, title: "South Goa Beaches", description: "Palolem Beach, Agonda Beach — the quieter, more romantic side of Goa. Sunset cruise on Mandovi River." },
      { day: 4, title: "Leisure & Departure", description: "Morning leisure at beach. Transfer to airport." },
    ],
    inclusions: [
      "3 nights hotel (breakfast daily)",
      "Airport transfers",
      "Mandovi sunset cruise",
      "Spice plantation tour & lunch",
      "Old Goa guided tour",
      "Travel insurance",
    ],
    exclusions: [
      "Flights to/from Goa",
      "Meals beyond breakfast & spice farm lunch",
      "Water sports",
      "Personal expenses",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614029518490-26893c20ab2b?w=600&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    ],
    faq: [
      { question: "Is Goa good for couples?", answer: "South Goa especially is quiet, clean, and romantic — perfect for couples wanting relaxation over party vibes." },
      { question: "Best time to visit?", answer: "November to February for perfect beach weather. Monsoon (June–September) is lush but most beaches are rough." },
      { question: "Can we customise to North Goa instead?", answer: "Yes — we can build a North Goa itinerary focused on Baga, Calangute, and nightlife if preferred." },
      { question: "How do we reach Goa?", answer: "Goa has an international airport (Dabolim) well-connected from all major Indian cities." },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya & Arjun Sharma",
    destination: "Bali, Indonesia",
    content:
      "Our Bali honeymoon was everything we dreamed of. Pravaas handled every detail — the couple's spa, the private sunset, the candlelit dinner. We just had to show up and fall in love with the island.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: "2",
    name: "Rahul & Meera Verma",
    destination: "Paris, France",
    content:
      "From the Seine dinner cruise to the Eiffel Tower at midnight — Paris felt like it was built for us. The Pravaas team responded within the hour every time we had a question. Unreal service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: "3",
    name: "Deepak & Simran Kapoor",
    destination: "Kerala, India",
    content:
      "The private houseboat on the backwaters was a moment we'll never forget. Pravaas gave us a Kerala that felt personal, not touristy. Transparent pricing, zero last-minute surprises.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];
