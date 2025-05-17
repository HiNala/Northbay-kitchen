/**
 * Local Mock API implementation
 * 
 * This file provides mock data for local development before Shopify
 * credentials are available.
 */

import { Product, PortfolioProject, Cart, CartItem } from './types';

// Mock Products Data
const mockProducts: Product[] = [
  {
    id: 'prod_1',
    title: 'Modern Brass Kitchen Faucet',
    handle: 'modern-brass-kitchen-faucet',
    price: 249.99,
    images: ['/mock/kitchens/kitchen-1.jpg'],
    description: 'Elegant brass pull-down faucet with spot-resistant finish. Features a high-arc spout and single-handle design for easy operation. The pull-down spray head offers multiple spray patterns for versatile cleaning.',
    category: 'kitchen'
  },
  {
    id: 'prod_2',
    title: 'Marble Waterfall Island Countertop',
    handle: 'marble-waterfall-island-countertop',
    price: 3499.99,
    images: ['/mock/kitchens/kitchen-2.jpg'],
    description: 'Luxurious Carrara marble waterfall edge countertop for kitchen islands. Each piece is unique with natural veining and patterns. Includes professional templating and installation.',
    category: 'kitchen'
  },
  {
    id: 'prod_3',
    title: 'Matte Black Bathroom Fixtures Set',
    handle: 'matte-black-bathroom-fixtures-set',
    price: 599.99,
    images: ['/mock/baths/bath-1.jpg'],
    description: 'Complete set including faucet, shower head, and accessories in trendy matte black. The modern design adds a touch of sophistication to any bathroom. Corrosion-resistant finish ensures long-lasting beauty.',
    category: 'bath'
  },
  {
    id: 'prod_4',
    title: 'Frameless Glass Shower Enclosure',
    handle: 'frameless-glass-shower-enclosure',
    price: 1299.99,
    images: ['/mock/baths/bath-2.jpg'],
    description: 'Minimalist frameless glass shower enclosure with brushed nickel hardware. Features 3/8-inch tempered glass and adjustable wall-mount hinges. Creates a spacious, open feel in your bathroom.',
    category: 'bath'
  },
  {
    id: 'prod_5',
    title: 'Brass Cabinet Hardware Set',
    handle: 'brass-cabinet-hardware-set',
    price: 129.99,
    images: ['/mock/kitchens/kitchen-3.jpg'],
    description: 'Set of 25 brass drawer pulls and knobs for cabinet upgrade. Adds warmth and elegance to your kitchen or bathroom cabinetry. Easy installation with included hardware.',
    category: 'kitchen'
  },
  {
    id: 'prod_6',
    title: 'Custom Shaker Kitchen Cabinets',
    handle: 'custom-shaker-kitchen-cabinets',
    price: 8999.99,
    images: ['/mock/kitchens/kitchen-4.jpg'],
    description: 'Premium custom-built shaker cabinets with soft-close hinges and dovetail drawer construction. Available in a variety of finishes and wood types. Includes professional design consultation and installation.',
    category: 'kitchen'
  },
  {
    id: 'prod_7',
    title: 'Farmhouse Apron-Front Sink',
    handle: 'farmhouse-apron-front-sink',
    price: 799.99,
    images: ['/mock/kitchens/kitchen-5.jpg'],
    description: 'Classic farmhouse-style apron-front sink in durable fireclay. The deep, single-bowl design provides ample space for washing large pots and pans. Resistant to scratches, stains, and chips.',
    category: 'kitchen'
  },
  {
    id: 'prod_8',
    title: 'Designer Pendant Lighting Set',
    handle: 'designer-pendant-lighting-set',
    price: 449.99,
    images: ['/mock/kitchens/kitchen-6.jpg'],
    description: 'Set of three hand-blown glass pendant lights with brass accents. Perfect for kitchen islands or dining areas. Each pendant features adjustable height and a dimmable LED bulb.',
    category: 'kitchen'
  },
  {
    id: 'prod_9',
    title: 'Quartz Countertop Slab',
    handle: 'quartz-countertop-slab',
    price: 1899.99,
    images: ['/mock/kitchens/kitchen-7.jpg'],
    description: 'Premium engineered quartz countertop slab for kitchens and bathrooms. Non-porous, stain-resistant, and requires no sealing. Available in a range of colors and patterns to complement any design style.',
    category: 'kitchen'
  },
  {
    id: 'prod_10',
    title: 'Professional Gas Range',
    handle: 'professional-gas-range',
    price: 3299.99,
    images: ['/mock/kitchens/kitchen-8.jpg'],
    description: 'Commercial-grade 36-inch gas range with six high-performance burners. Features include convection oven, temperature probe, and self-cleaning function. Stainless steel construction with professional styling.',
    category: 'kitchen'
  },
  {
    id: 'prod_11',
    title: 'Freestanding Soaking Bathtub',
    handle: 'freestanding-soaking-bathtub',
    price: 1699.99,
    images: ['/mock/baths/bath-3.jpg'],
    description: 'Elegant freestanding soaking tub with a contemporary oval design. Made from high-quality acrylic with reinforced fiberglass for durability and heat retention. Includes pop-up drain and overflow in matching finish.',
    category: 'bath'
  },
  {
    id: 'prod_12',
    title: 'Rainfall Shower System',
    handle: 'rainfall-shower-system',
    price: 879.99,
    images: ['/mock/baths/bath-4.jpg'],
    description: 'Complete rainfall shower system with wall-mounted 12-inch shower head, handheld sprayer, and thermostatic valve. Multiple spray patterns and pressure settings for a customized shower experience.',
    category: 'bath'
  },
  {
    id: 'prod_13',
    title: 'Floating Bathroom Vanity',
    handle: 'floating-bathroom-vanity',
    price: 1299.99,
    images: ['/mock/baths/bath-5.jpg'],
    description: 'Modern wall-mounted floating vanity with double sinks and soft-close drawers. The space-saving design creates an open, airy feel in your bathroom. Available in multiple finishes and sizes.',
    category: 'bath'
  },
  {
    id: 'prod_14',
    title: 'Heated Tile Floor System',
    handle: 'heated-tile-floor-system',
    price: 599.99,
    images: ['/mock/baths/bath-6.jpg'],
    description: 'Electric in-floor heating system for bathroom tile floors. Programmable thermostat allows you to schedule warm floors when you need them. Easy to install under various flooring materials.',
    category: 'bath'
  },
  {
    id: 'prod_15',
    title: 'LED Backlit Bathroom Mirror',
    handle: 'led-backlit-bathroom-mirror',
    price: 349.99,
    images: ['/mock/baths/bath-7.jpg'],
    description: 'Sleek bathroom mirror with integrated LED lighting around the perimeter. Features include anti-fog function, touch sensor switch, and dimmable lighting. Creates a spa-like atmosphere in your bathroom.',
    category: 'bath'
  },
  {
    id: 'prod_16',
    title: 'Designer Bathroom Hardware Set',
    handle: 'designer-bathroom-hardware-set',
    price: 199.99,
    images: ['/mock/baths/bath-8.jpg'],
    description: 'Complete bathroom hardware set including towel bars, robe hooks, paper holder, and more. Available in multiple finishes to complement your bathroom design. Corrosion-resistant construction for durability.',
    category: 'bath'
  },
  {
    id: 'prod_17',
    title: 'Glass Mosaic Tile Backsplash',
    handle: 'glass-mosaic-tile-backsplash',
    price: 24.99,
    images: ['/mock/kitchens/kitchen-1.jpg'],
    description: 'Luxury glass mosaic tiles for kitchen backsplash or bathroom accent wall. Each 12"x12" sheet features a blend of glass tiles in complementary colors. Easy to install with included instructions.',
    category: 'kitchen'
  },
  {
    id: 'prod_18',
    title: 'Smart Bathroom Mirror',
    handle: 'smart-bathroom-mirror',
    price: 799.99,
    images: ['/mock/baths/bath-3.jpg'],
    description: 'Integrated smart mirror with built-in LED lighting, Bluetooth speakers, and touchscreen interface. Features include weather updates, news, and music streaming capabilities. Voice control compatible with major smart home systems.',
    category: 'bath'
  },
  {
    id: 'prod_19',
    title: 'Kitchen Island with Wine Storage',
    handle: 'kitchen-island-wine-storage',
    price: 1499.99,
    images: ['/mock/kitchens/kitchen-2.jpg'],
    description: 'Multifunctional kitchen island with built-in wine rack, storage drawers, and butcher block top. The versatile design provides additional prep space and storage for your kitchen. Easy assembly with included tools.',
    category: 'kitchen'
  },
  {
    id: 'prod_20',
    title: 'Luxury Shower Door',
    handle: 'luxury-shower-door',
    price: 899.99,
    images: ['/mock/baths/bath-2.jpg'],
    description: 'Premium sliding shower door with clear tempered glass and brushed nickel hardware. Features include easy-clean coating and quiet-close mechanism. Creates a modern, open feel in your bathroom.',
    category: 'bath'
  }
];

// Mock Portfolio Projects
const mockProjects: PortfolioProject[] = [
  {
    id: 'proj_1',
    title: 'Santa Rosa Modern Farmhouse Kitchen',
    slug: 'santa-rosa-modern-farmhouse-kitchen',
    date: '2024-12-10',
    category: 'kitchen',
    images: [
      '/mock/kitchens/kitchen-1.jpg',
      '/mock/kitchens/kitchen-2.jpg',
      '/mock/kitchens/kitchen-3.jpg',
      '/mock/kitchens/kitchen-5.jpg',
      '/mock/kitchens/kitchen-7.jpg'
    ],
    description: 'Complete remodel of a 1930s farmhouse kitchen featuring custom cabinetry, quartz countertops, and vintage-inspired fixtures with modern functionality.\n\nThis project involved removing a wall to create an open concept layout connecting the kitchen to the dining area. The original hardwood floors were restored and extended throughout the space, while custom cabinetry in a classic sage green provides ample storage without overwhelming the room.\n\nThe large center island features a waterfall edge quartz countertop and provides additional seating and prep space. Modern appliances were integrated into the design while maintaining the home\'s historic character.',
    features: [
      'Custom shaker cabinetry in sage green',
      'Quartz countertops with waterfall edge on island',
      'Farmhouse sink with brass fixtures',
      'White oak floating shelves',
      'Custom range hood',
      'Restored original hardwood flooring',
      'Integrated smart appliances',
      'Custom lighting plan with brass accents'
    ],
    testimonial: {
      quote: 'NBKB transformed our outdated kitchen into a stunning space that honors the home\'s history while giving us all the modern amenities we wanted. Their attention to detail and craftsmanship is exceptional.',
      author: 'The Peterson Family'
    }
  },
  {
    id: 'proj_2',
    title: 'Healdsburg Spa Bathroom Retreat',
    slug: 'healdsburg-spa-bathroom-retreat',
    date: '2024-11-15',
    category: 'bath',
    images: [
      '/mock/baths/bath-1.jpg',
      '/mock/baths/bath-2.jpg',
      '/mock/baths/bath-3.jpg',
      '/mock/baths/bath-5.jpg',
      '/mock/baths/bath-6.jpg'
    ],
    description: 'Luxurious primary bathroom renovation inspired by high-end spa retreats. Features include a freestanding soaking tub, zero-entry shower, and custom vanity with integrated lighting.\n\nThis complete bathroom transformation converted an outdated bathroom into a personal spa retreat. The project began by reconfiguring the layout to maximize space and improve flow.\n\nThe centerpiece is a stunning freestanding oval tub positioned beneath a new skylight. The zero-entry curbless shower features multiple shower heads and a built-in bench. Heated marble floors and a programmable thermostat ensure comfort year-round.\n\nThe custom floating vanity includes soft-close drawers, integrated LED lighting, and his-and-hers sinks with wall-mounted faucets.',
    features: [
      'Freestanding oval soaking tub',
      'Zero-entry curbless shower',
      'Heated marble tile flooring',
      'Custom floating double vanity',
      'Programmable shower system',
      'New skylight installation',
      'Built-in linen storage',
      'Water-resistant audio system'
    ],
    testimonial: {
      quote: 'Our bathroom feels like a luxury spa retreat. The attention to detail and craftsmanship exceeded our expectations. The team at NBKB was professional, responsive, and made the process enjoyable.',
      author: 'Mark & Jennifer W.'
    }
  },
  {
    id: 'proj_3',
    title: 'Sonoma Contemporary Kitchen',
    slug: 'sonoma-contemporary-kitchen',
    date: '2024-09-22',
    category: 'kitchen',
    images: [
      '/mock/kitchens/kitchen-4.jpg',
      '/mock/kitchens/kitchen-6.jpg',
      '/mock/kitchens/kitchen-8.jpg',
      '/mock/kitchens/kitchen-2.jpg',
      '/mock/kitchens/kitchen-7.jpg'
    ],
    description: 'Modern kitchen renovation in a Sonoma County vineyard estate featuring clean lines, high-end appliances, and a stunning center island with waterfall edge countertop.\n\nThis project transformed a dated kitchen into a chef\'s dream with professional-grade appliances and custom cabinetry. The open layout creates a seamless flow between cooking and entertaining spaces.\n\nThe dramatic waterfall island serves as both a functional workspace and visual centerpiece. Full-height cabinets maximize storage, while integrated lighting highlights the custom backsplash and architectural details.\n\nOversize windows were installed to frame vineyard views and bring natural light into the space. Smart home technology allows control of lighting, music, and appliances from a single interface.',
    features: [
      'Custom flat-panel cabinetry in matte white',
      'Marble waterfall island with seating for six',
      'Professional-grade stainless steel appliances',
      'Full-height backsplash in marble slab',
      'Integrated smart home technology',
      'Oversized picture windows with vineyard views',
      'Custom lighting plan with recessed and pendant fixtures',
      'Wine refrigeration and storage'
    ],
    testimonial: {
      quote: 'NBKB delivered exactly what we envisioned - a sophisticated, highly functional kitchen that\'s perfect for both serious cooking and entertaining. The attention to detail is exceptional, and the quality of craftsmanship is evident in every aspect of the design.',
      author: 'Robert & Elaine T.'
    }
  },
  {
    id: 'proj_4',
    title: 'Petaluma Master Bath Transformation',
    slug: 'petaluma-master-bath-transformation',
    date: '2024-08-05',
    category: 'bath',
    images: [
      '/mock/baths/bath-4.jpg',
      '/mock/baths/bath-7.jpg',
      '/mock/baths/bath-8.jpg',
      '/mock/baths/bath-2.jpg',
      '/mock/baths/bath-5.jpg'
    ],
    description: 'Complete renovation of a primary bathroom in a Petaluma Victorian home, balancing historical charm with modern luxury and technology.\n\nThis project carefully preserved the home\'s Victorian character while introducing modern amenities and comfort. Period-appropriate details like claw-foot tub, vintage-inspired fixtures, and custom millwork honor the home\'s heritage.\n\nThe shower features handmade subway tile in a traditional pattern with modern conveniences like digital temperature control and multiple spray heads. The custom vanity was designed to resemble antique furniture while providing modern storage solutions.\n\nCareful attention was paid to historical accuracy in finishes and hardware, while hidden technology provides modern convenience.',
    features: [
      'Restored clawfoot tub with modern plumbing',
      'Custom shower with handmade subway tile',
      'Marble mosaic floor in traditional pattern',
      'Furniture-style vanity with marble top',
      'Period-appropriate fixtures and hardware',
      'Concealed modern technology and conveniences',
      'Heated floors with discreet controls',
      'Custom millwork and trim details'
    ],
    testimonial: {
      quote: 'NBKB masterfully balanced our desire to respect the historic character of our Victorian home while creating a bathroom with all the modern amenities we wanted. Their knowledge of period-appropriate design and materials was invaluable.',
      author: 'Stephen & Catherine D.'
    }
  },
  {
    id: 'proj_5',
    title: 'Windsor Gourmet Kitchen',
    slug: 'windsor-gourmet-kitchen',
    date: '2024-07-18',
    category: 'kitchen',
    images: [
      '/mock/kitchens/kitchen-8.jpg',
      '/mock/kitchens/kitchen-3.jpg',
      '/mock/kitchens/kitchen-5.jpg',
      '/mock/kitchens/kitchen-1.jpg',
      '/mock/kitchens/kitchen-6.jpg'
    ],
    description: 'High-performance kitchen designed for serious cooking enthusiasts, featuring professional-grade appliances, custom storage solutions, and durable materials.\n\nThis project was designed for clients who are passionate about cooking and entertaining. The layout prioritizes workflow with distinct zones for prepping, cooking, and cleaning.\n\nThe oversized island provides ample space for meal preparation and casual dining. Custom storage solutions include specialized drawers for spices, utensils, and cookware, putting everything within easy reach.\n\nCommercial-grade appliances include a six-burner gas range with griddle, double wall ovens, and a restaurant-style sink system. Materials were selected for both beauty and durability to stand up to daily use.',
    features: [
      'Commercial-grade 48" gas range with griddle',
      'Custom cabinetry with specialized storage solutions',
      'Oversized prep island with second sink',
      'Quartz countertops for durability and easy maintenance',
      'Professional ventilation system',
      'Restaurant-style faucet and sink system',
      'Integrated refrigeration and freezer columns',
      'Butler\'s pantry with coffee station and additional storage'
    ],
    testimonial: {
      quote: 'As avid home cooks, we wanted a kitchen that could keep up with our culinary adventures. NBKB delivered beyond our expectations with a space that\'s as functional as it is beautiful. The attention to how we actually use our kitchen makes cooking and entertaining a true pleasure.',
      author: 'James & Maria L.'
    }
  },
  {
    id: 'proj_6',
    title: 'Sebastopol Zen Bathroom',
    slug: 'sebastopol-zen-bathroom',
    date: '2024-06-30',
    category: 'bath',
    images: [
      '/mock/baths/bath-6.jpg',
      '/mock/baths/bath-8.jpg',
      '/mock/baths/bath-3.jpg',
      '/mock/baths/bath-1.jpg',
      '/mock/baths/bath-4.jpg'
    ],
    description: 'Minimalist bathroom renovation inspired by Japanese design principles, featuring natural materials, clean lines, and a sense of tranquility.\n\nThis project transformed a standard bathroom into a peaceful retreat using principles of Japanese design. The open, minimalist layout creates a sense of spaciousness and calm.\n\nThe oversized soaking tub, inspired by traditional Japanese ofuro, offers deep immersion for relaxation. Natural materials including teak, stone, and glass connect the space to nature while providing durability and warmth.\n\nCustom teak cabinetry provides storage while maintaining the clean, uncluttered aesthetic. Lighting was carefully designed to create a serene atmosphere with multiple settings for different moods and functions.',
    features: [
      'Deep Japanese-inspired soaking tub',
      'Open concept shower with rainfall head',
      'Teak wood vanity and accessories',
      'Natural stone tile in soft, neutral tones',
      'Minimalist fixtures in brushed nickel',
      'Hidden storage solutions for clutter-free surfaces',
      'Programmable lighting for different moods',
      'Heated floors for year-round comfort'
    ],
    testimonial: {
      quote: 'Our bathroom has become our sanctuary. NBKB truly understood our desire for a space that feels both minimalist and warm. The attention to detail and quality of the craftsmanship is evident everywhere you look.',
      author: 'Daniel & Akiko T.'
    }
  }
];

// Local storage cart implementation
const CART_STORAGE_KEY = 'nbkb_cart';

// API Implementation
export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve(mockProducts);
};

export const getProduct = async (handle: string): Promise<Product | null> => {
  const product = mockProducts.find(p => p.handle === handle);
  return Promise.resolve(product || null);
};

export const getPortfolioProjects = async (): Promise<PortfolioProject[]> => {
  return Promise.resolve(mockProjects);
};

export const getPortfolioProject = async (slug: string): Promise<PortfolioProject | null> => {
  const project = mockProjects.find(p => p.slug === slug);
  return Promise.resolve(project || null);
};

// Cart functions with local storage

export const createCart = async (): Promise<Cart> => {
  const cart: Cart = {
    id: `cart_${Date.now()}`,
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  };
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const getCart = async (): Promise<Cart | null> => {
  if (typeof window === 'undefined') return null;
  
  const cartJson = localStorage.getItem(CART_STORAGE_KEY);
  if (!cartJson) return null;
  
  try {
    const cart = JSON.parse(cartJson) as Cart;
    return Promise.resolve(cart);
  } catch (e) {
    return null;
  }
};

export const addToCart = async (productId: string, quantity: number): Promise<Cart> => {
  let cart = await getCart();
  if (!cart) {
    cart = await createCart();
  }
  
  const product = mockProducts.find(p => p.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  
  const existingItem = cart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      id: `item_${Date.now()}`,
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.images[0]
    });
  }
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const updateCartItem = async (itemId: string, quantity: number): Promise<Cart | null> => {
  const cart = await getCart();
  if (!cart) return null;
  
  const item = cart.items.find(i => i.id === itemId);
  if (!item) return cart;
  
  if (quantity <= 0) {
    return removeFromCart(itemId);
  }
  
  item.quantity = quantity;
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const removeFromCart = async (itemId: string): Promise<Cart | null> => {
  const cart = await getCart();
  if (!cart) return null;
  
  const itemIndex = cart.items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return cart;
  
  cart.items.splice(itemIndex, 1);
  
  // Update totals
  cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return Promise.resolve(cart);
};

export const getCheckoutUrl = async (): Promise<string> => {
  // In local mode, just return a simulated checkout URL
  return Promise.resolve('/checkout/simulator');
}; 