import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'milan-shoe-01',
    name: 'The Marche Penny Loafer',
    tagline: 'Tuscan reverse calf suede with hand-stitched apron & Blake-stitched sole',
    category: 'loafers',
    price: 340,
    originalPrice: 420,
    discountPercentage: 19,
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Espresso Suede', hex: '#3e2d23' },
      { name: 'Snuff Tan', hex: '#8a6240' },
      { name: 'Onyx Black', hex: '#1a1a1a' },
    ],
    sizes: ['US 7', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    rating: 4.9,
    reviewCount: 118,
    isBestSeller: true,
    stockLeft: 4,
    shoeSpecs: {
      leather: 'Full-Grain Tuscan Reverse Calf Suede',
      construction: 'Artisanal Blake Stitched with channel groove',
      sole: 'Vegetable-Tanned Argentinian Leather Sole with brass nails',
      origin: 'Montegranaro, Marche, Italy',
      care: [
        'Brush regularly with soft brass/nylon suede brush',
        'Apply nano-waterproofing protector before initial wear',
        'Insert cedar shoe trees immediately after wearing',
      ],
    },
    description:
      'An enduring icon of Italian Riviera elegance. Hand-lasted in the shoemaking capital of Montegranaro with glove-soft unlined suede that molds effortlessly to your feet from the very first stroll.',
  },
  {
    id: 'milan-shoe-02',
    name: 'The Montenapoleone Cap-Toe Oxford',
    tagline: 'Goodyear-welted French boxcalf with hand-burnished museum patina and bevelled waist',
    category: 'oxfords',
    price: 395,
    originalPrice: 480,
    discountPercentage: 18,
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Cognac Patina', hex: '#7e4726' },
      { name: 'Deep Ebony', hex: '#111111' },
    ],
    sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    rating: 5.0,
    reviewCount: 142,
    isBestSeller: true,
    stockLeft: 5,
    shoeSpecs: {
      leather: "Grade-A French Tanneries d'Annonay Boxcalf",
      construction: 'Handcrafted 270° Goodyear Welted (fully re-soleable for life)',
      sole: 'Oak-Bark Tanned Leather Sole with concealed channel stitch',
      origin: 'Florence & Marche Atelier, Italy',
      care: [
        "Condition monthly with Saphir Médaille d'Or pommadier cream",
        'Buff with horsehair brush for high-gloss mirror finish',
        'Rest 24 hours between wearings on cedar shoe trees',
      ],
    },
    description:
      'The quintessential formal dress shoe for boardroom and black-tie affairs. Engineered on our chiseled Milanese last with an arched waist, reinforced heel counter, and deep mirror-burnished toe.',
  },
  {
    id: 'milan-shoe-03',
    name: 'The Primo Minimalist Court Sneaker',
    tagline: 'Ultra-supple Italian nappa calf leather with stitched Margom rubber cupsole',
    category: 'sneakers',
    price: 240,
    originalPrice: 300,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Alabaster White', hex: '#f7f7f5' },
      { name: 'Chalk & Gum', hex: '#e8e2d5' },
      { name: 'Shadow Black', hex: '#1e1e1e' },
    ],
    sizes: ['US 7', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    rating: 4.9,
    reviewCount: 210,
    isNew: true,
    isBestSeller: true,
    stockLeft: 8,
    shoeSpecs: {
      leather: 'Full-Grain Italian Nappa Calfskin',
      construction: 'Stitched Strobel Construction with reinforced heel cup',
      sole: 'Authentic Italian Margom Rubber Cupsole with side stitching',
      origin: 'Civitanova Marche, Italy',
      care: [
        'Wipe clean with damp cloth and mild leather cleansing foam',
        'Treat leather with natural beeswax balm',
        'Store in included flannel dust bags',
      ],
    },
    description:
      'Clean architectural lines paired with sublime leather. Fully lined in buttery vachetta leather that absorbs moisture naturally, making sockless wear an absolute pleasure all year long.',
  },
  {
    id: 'milan-shoe-04',
    name: 'The Firenze Belgian Tassel Loafer',
    tagline: 'Deconstructed glove-soft suede with braided calf tassel and memory-cushion footbed',
    category: 'loafers',
    price: 360,
    originalPrice: 440,
    discountPercentage: 18,
    images: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Midnight Navy Suede', hex: '#1f2937' },
      { name: 'Dark Chocolate', hex: '#3b2518' },
    ],
    sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    rating: 4.8,
    reviewCount: 76,
    isLimitedEdition: true,
    stockLeft: 3,
    shoeSpecs: {
      leather: 'Water-Resistant Tuscan Velour Suede',
      construction: 'Deconstructed Sacchetto Slippers Construction',
      sole: 'Ultra-flexible Leather Sole with inlaid rubber traction pad',
      origin: 'Florence, Italy',
      care: [
        'Regular suede brushing to raise the velvet nap',
        'Use crepe brush for spot restoration',
        'Store with cedar shoe trees',
      ],
    },
    description:
      'Inspired by bespoke European royalty slippers. Cut on a graceful almond silhouette with a cushioned memory footbed designed for effortless sartorial poise at summer garden parties and evening dinners.',
  },
  {
    id: 'milan-shoe-05',
    name: 'The Dolomiti Chelsea Boot',
    tagline: 'Hand-waxed Tuscan reverse suede with Vibram® city-commando lug sole',
    category: 'boots',
    price: 420,
    originalPrice: 510,
    discountPercentage: 18,
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Tobacco Suede', hex: '#6c4e33' },
      { name: 'Nero Charcoal', hex: '#222222' },
    ],
    sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    rating: 5.0,
    reviewCount: 94,
    isBestSeller: true,
    stockLeft: 3,
    shoeSpecs: {
      leather: 'Weather-Treated Tuscan Waxed Roughout Suede',
      construction: 'Storm-Welt 360° Goodyear Welting (weather-sealed)',
      sole: 'Lightweight Vibram® Morflex Commando Lug Sole',
      origin: 'Veneto & Marche Foothills, Italy',
      care: [
        'Apply natural wax balm seasonally',
        'Brush off dried mud with stiff bristle brush',
        'Air dry away from artificial heat sources',
      ],
    },
    description:
      'Built to conquer rain-slicked cobblestones and mountain retreats alike without sacrificing razor-sharp Italian silhouette. Features dual custom-woven pull tabs and reinforced heavy-gauge elastic side gores.',
  },
  {
    id: 'milan-shoe-06',
    name: 'The Corso Retro Luxury Runner',
    tagline: 'Layered calfskin, Italian technical mesh and perforated nubuck with featherweight EVA sole',
    category: 'sneakers',
    price: 275,
    originalPrice: 340,
    discountPercentage: 19,
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Slate Stone / Chalk', hex: '#737373' },
      { name: 'Forest Olive / Taupe', hex: '#434a3e' },
    ],
    sizes: ['US 7', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    stockLeft: 7,
    shoeSpecs: {
      leather: 'Italian Nubuck, French Calf & Ballistic Nylon Mesh',
      construction: 'Cemented Athletic Strobel with OrthoLite® Anatomical Footbed',
      sole: 'Custom Multi-Density Featherweight EVA & Gum Rubber Outsole',
      origin: 'Marche Footwear Laboratory, Italy',
      care: [
        'Use premium sneaker cleansing foam',
        'Nubuck dry block eraser for spots',
        'Air dry at room temperature',
      ],
    },
    description:
      'Merging 1970s Milan athletic heritage with avant-garde ergonomics. Features responsive multi-density cushioning that supports 20,000 steps a day with sublime ease while looking impeccably sharp.',
  },
  {
    id: 'milan-shoe-07',
    name: 'The Venezia Wholecut Tuxedo Shoe',
    tagline: 'Cut from a single flawless piece of full-grain calfskin with mirror-shine toe cap',
    category: 'oxfords',
    price: 440,
    originalPrice: 550,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Piano Mirror Black', hex: '#090909' },
      { name: 'Deep Bordeaux', hex: '#4a1525' },
    ],
    sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    rating: 5.0,
    reviewCount: 68,
    isLimitedEdition: true,
    stockLeft: 2,
    shoeSpecs: {
      leather: 'Single-Cut Flawless Full-Grain European Calfskin',
      construction: 'Bespoke Hand-Welted with sculpted violin waist',
      sole: 'Hand-burnished Italian leather sole with brass nail detailing',
      origin: 'Venice & Milan Atelier, Italy',
      care: [
        'Mirror shine toe with high-grade beeswax polish',
        'Nourish upper with delicate cream emulsion',
        'Always rest on sculpted cedar shoe trees',
      ],
    },
    description:
      'The supreme test of a cordwainer master: crafted completely without seams from one contiguous hide of pristine calfskin. The purest, most uncompromising form of shoe artistry on earth.',
  },
  {
    id: 'milan-shoe-08',
    name: 'The Amalfi Cross-Strap Leather Slide',
    tagline: 'Vegetable-tanned vacchetta leather straps with anatomical cork-latex contoured footbed',
    category: 'sandals',
    price: 185,
    originalPrice: 230,
    discountPercentage: 20,
    images: [
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    ],
    colors: [
      { name: 'Saddle Tan', hex: '#8b5a2b' },
      { name: 'Raw Umber', hex: '#3d2b1f' },
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    rating: 4.8,
    reviewCount: 52,
    isNew: true,
    stockLeft: 6,
    shoeSpecs: {
      leather: 'Cuoio Vegetale Tuscan Vacchetta Leather (grows richer patina with age)',
      construction: 'Molded Anatomical Cork-Latex Footbed with suede sockliner',
      sole: 'Durable Wave-Pattern EVA Outsole',
      origin: 'Amalfi Coast & Campania, Italy',
      care: [
        'Apply light leather milk once per season',
        'Keep cork rim sealed with beeswax',
        'Avoid total submersion in salt water',
      ],
    },
    description:
      'Effortless Mediterranean leisure. The unlined vegetable-tanned straps mold directly to the unique shape of your instep, creating an organic custom fit that lasts for summers to come.',
  },
];

export const CATEGORIES_DATA = [
  {
    id: 'loafers',
    name: 'Artisanal Loafers',
    subtext: 'Tuscan Suede & Calfskin Slip-Ons',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sneakers',
    name: 'Luxury Sneakers',
    subtext: 'Italian Nappa & Margom Soles',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'oxfords',
    name: 'Bespoke Dress Shoes',
    subtext: 'Goodyear-Welted Formal Oxfords',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'boots',
    name: 'Tuscan Boots',
    subtext: 'Roughout Suede Chelseas & Commando',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
  },
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    initials: 'LB',
    author: 'Leonardo Bellini',
    city: 'Milan',
    quote:
      '"The break-in period on the Montenapoleone Oxfords was virtually zero. The arch support, leather scent, and hand-burnished patina are pure old-world cordwainer luxury."',
    rating: 5,
  },
  {
    id: 'rev-2',
    initials: 'JS',
    author: 'Julian Sterling',
    city: 'London',
    quote:
      '"The Primo court sneakers are my daily uniform across Mayfair. The Margom sole and glove-leather lining effortlessly outclass every designer trainer I own."',
    rating: 5,
  },
  {
    id: 'rev-3',
    initials: 'DH',
    author: 'David Henderson',
    city: 'New York',
    quote:
      '"Hand-stitched Marche loafers of this caliber usually retail for upwards of $800 on Madison Avenue. Milanworld is an absolute revelation for serious shoe connoisseurs."',
    rating: 5,
  },
];
