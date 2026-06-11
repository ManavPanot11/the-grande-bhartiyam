export const SITE = {
  name: "THE GRANDE BHARTIYAM",
  short: "Grande Bhartiyam",
  tagline: "Where Heritage Meets Celebration.",
  description: "A luxury heritage convention center for boutique weddings, cultural events and premium stays — where ancient Indian artistry meets contemporary hospitality.",
  phone: "+91 91310 14112",
  phoneRaw: "+919131014112",
  whatsapp: "919131014112",
  whatsappDisplay: "+91 91310 14112",
  email: "concierge@grandebhartiyam.com",
  address: {
    line1: "399- EE, Scheme no. 94, Nr. Mayur Hospital",
    line2: "Nr. Bengali Square Indore",
  },
  hours: "Concierge available 24 × 7",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  mapsEmbed: "https://www.google.com/maps?q=399-EE,+Scheme+no.+94,+Nr.+Mayur+Hospital,+Nr.+Bengali+Square+Indore&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=399-EE,+Scheme+no.+94,+Nr.+Mayur+Hospital,+Nr.+Bengali+Square+Indore",
};

export const waLink = (msg) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    msg || `Hello, I would like to inquire about booking ${SITE.name}.`
  )}`;

// 18 curated images grouped
export const IMG = {
  hero: [
    "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg",
    "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg",
    "https://images.pexels.com/photos/31355512/pexels-photo-31355512.jpeg",
  ],
  mandap: [
    "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg",
    "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg",
    "https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg",
    "https://images.pexels.com/photos/12432503/pexels-photo-12432503.jpeg",
    "https://images.pexels.com/photos/30184678/pexels-photo-30184678.jpeg",
    "https://images.pexels.com/photos/7685849/pexels-photo-7685849.jpeg",
  ],
  heritage: [
    "https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg",
    "https://images.pexels.com/photos/33658226/pexels-photo-33658226.jpeg",
    "https://images.pexels.com/photos/33726143/pexels-photo-33726143.jpeg",
    "https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg",
    "https://images.pexels.com/photos/33803734/pexels-photo-33803734.jpeg",
    "https://images.pexels.com/photos/33824477/pexels-photo-33824477.jpeg",
  ],
  palace: [
    "https://images.pexels.com/photos/31355512/pexels-photo-31355512.jpeg",
    "https://images.pexels.com/photos/34840172/pexels-photo-34840172.jpeg",
    "https://images.pexels.com/photos/20418515/pexels-photo-20418515.jpeg",
    "https://images.pexels.com/photos/37096705/pexels-photo-37096705.jpeg",
    "https://images.pexels.com/photos/6194001/pexels-photo-6194001.jpeg",
    "https://images.pexels.com/photos/35832668/pexels-photo-35832668.jpeg",
  ],
};

export const ROOMS = [
  {
    slug: "rajvansh-suite",
    name: "Rajvansh Suite",
    tier: "Premium Tier · Royal Heritage",
    priceFrom: 3500,
    priceTo: 4000,
    capacity: "2 Adults · 1 Child",
    size: "58 sqm",
    description:
      "A regal sanctuary draped in hand-loomed brocade, antique brassware and floor-to-ceiling jharokha windows that frame the courtyard below. Reserved for guests of honour and bridal parties.",
    amenities: [
      "King-size four-poster bed",
      "Private balcony with courtyard view",
      "Marble en-suite with rain shower",
      "Welcome platter & turn-down service",
      "In-room dining & butler call",
      "Complimentary high-speed Wi-Fi",
    ],
    images: [
      "https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg",
      "https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg",
      "https://images.pexels.com/photos/34840172/pexels-photo-34840172.jpeg",
      "https://images.pexels.com/photos/33803734/pexels-photo-33803734.jpeg",
    ],
  },
  {
    slug: "suvarna-room",
    name: "Suvarna Room",
    tier: "Executive Tier · Warm Comfort",
    priceFrom: 2000,
    priceTo: 2500,
    capacity: "2 Adults",
    size: "32 sqm",
    description:
      "A warm, intimate retreat finished in cream linens and walnut woodwork, with subtle gold-leaf detailing. Designed for travelling families and corporate guests seeking heritage charm.",
    amenities: [
      "Queen bed with premium linen",
      "Work nook with reading lamp",
      "Walk-in shower en-suite",
      "Daily housekeeping",
      "Tea & coffee setup",
      "Complimentary Wi-Fi",
    ],
    images: [
      "https://images.pexels.com/photos/33658226/pexels-photo-33658226.jpeg",
      "https://images.pexels.com/photos/33726143/pexels-photo-33726143.jpeg",
      "https://images.pexels.com/photos/6194001/pexels-photo-6194001.jpeg",
      "https://images.pexels.com/photos/33824477/pexels-photo-33824477.jpeg",
    ],
  },
];

export const AMENITIES = [
  { title: "The Mandapam Banquet", desc: "A grand 1,200–1,400 guest hall with cinematic ceilings and traditional jaali screens.", icon: "sparkles" },
  { title: "Effortless Connectivity", desc: "Positioned strategically within Indore, the venue ensures effortless connectivity for your out-of-town guests. From Indore Junction Railway Station: Approximately 6 km away (a quick 15–20 minute drive). From Devi Ahilyabai Holkar Airport: Approximately 12–13 km away (roughly a 35–40 minute drive via the city's main corridors).", icon: "map-pin" },
  { title: "Heritage Boutique Stays", desc: "12 curated rooms across two tiers — Rajvansh Suite & Suvarna.", icon: "bed" },
  { title: "Royal Culinary Studio", desc: "Live counters, Awadhi grills and a multi-cuisine wedding banquet menu.", icon: "utensils" },
  { title: "Concierge & Valet", desc: "24×7 white-glove concierge, valet parking and arrival rituals.", icon: "car" },
  { title: "Modern Essentials", desc: "High-speed Wi-Fi, air-conditioning, AV systems and accessible facilities.", icon: "wifi" },
];

export const EVENT_TYPES = [
  { title: "Boutique Weddings", img: "https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg", desc: "Intimate baraats, sangeets and pheras under a regal mandap." },
  { title: "Cultural Evenings", img: "https://images.pexels.com/photos/30184678/pexels-photo-30184678.jpeg", desc: "Classical concerts, kathak nights and curated heritage soirées." },
  { title: "Receptions", img: "https://images.pexels.com/photos/12432503/pexels-photo-12432503.jpeg", desc: "Grand receptions with cinematic stage and ballroom lighting." },
  { title: "Corporate Gatherings", img: "https://images.pexels.com/photos/7685849/pexels-photo-7685849.jpeg", desc: "Conferences, gala dinners and brand events with full AV." },
];

export const TESTIMONIALS = [
  { name: "Aditi & Veer", role: "Wedding · February 2025", quote: "Every doorway felt like a frame from a film. The team treated our families like royalty — our pheras under the Mandapam were beyond perfect." },
  { name: "Kunal Mehra", role: "Reception · December 2024", quote: "The courtyard pre-function area was the showstopper. Heritage detailing, modern comfort — a rare and beautiful balance." },
  { name: "Rashi Sharma", role: "Cultural Soirée · 2024", quote: "Hosting a kathak evening here felt sacred. The acoustics, the lighting, the brass lanterns — everything sang together." },
  { name: "Ananya & Rohan", role: "Engagement · March 2025", quote: "The Rajvansh Suite spoiled us. Waking up to the courtyard birdsong is a memory we will keep forever." },
];

export const GALLERY = [
  // categories: Weddings, Hall, Rooms, Decorations, Events
  { cat: "Weddings", src: "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg" },
  { cat: "Weddings", src: "https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg" },
  { cat: "Weddings", src: "https://images.pexels.com/photos/12432503/pexels-photo-12432503.jpeg" },
  { cat: "Hall", src: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg" },
  { cat: "Hall", src: "https://images.pexels.com/photos/30184678/pexels-photo-30184678.jpeg" },
  { cat: "Hall", src: "https://images.pexels.com/photos/7685849/pexels-photo-7685849.jpeg" },
  { cat: "Rooms", src: "https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg" },
  { cat: "Rooms", src: "https://images.pexels.com/photos/33658226/pexels-photo-33658226.jpeg" },
  { cat: "Rooms", src: "https://images.pexels.com/photos/33726143/pexels-photo-33726143.jpeg" },
  { cat: "Rooms", src: "https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg" },
  { cat: "Decorations", src: "https://images.pexels.com/photos/33803734/pexels-photo-33803734.jpeg" },
  { cat: "Decorations", src: "https://images.pexels.com/photos/33824477/pexels-photo-33824477.jpeg" },
  { cat: "Decorations", src: "https://images.pexels.com/photos/35832668/pexels-photo-35832668.jpeg" },
  { cat: "Events", src: "https://images.pexels.com/photos/31355512/pexels-photo-31355512.jpeg" },
  { cat: "Events", src: "https://images.pexels.com/photos/34840172/pexels-photo-34840172.jpeg" },
  { cat: "Events", src: "https://images.pexels.com/photos/20418515/pexels-photo-20418515.jpeg" },
  { cat: "Events", src: "https://images.pexels.com/photos/37096705/pexels-photo-37096705.jpeg" },
  { cat: "Events", src: "https://images.pexels.com/photos/6194001/pexels-photo-6194001.jpeg" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/hall", label: "The Mandapam" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
