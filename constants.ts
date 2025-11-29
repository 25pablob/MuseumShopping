import { Shop, SavedSearch } from './types';

export const MOCK_SHOPS: Shop[] = [
  {
    id: '1',
    name: 'eBay USA',
    country: 'United States',
    countryCode: 'US',
    type: 'Marketplace',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png',
    description: 'New & Second-Hand Items. The world\'s largest marketplace for collectors.',
    rating: 4.8,
    tags: ['Toys', 'Games', 'Antiques'],
    isPremium: false
  },
  {
    id: '2',
    name: 'Mercari USA',
    country: 'United States',
    countryCode: 'US',
    type: 'Marketplace',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mercari_logo.svg/1200px-Mercari_logo.svg.png',
    description: 'Individual Second-Hand. Great for finding rare items from individual sellers.',
    rating: 4.5,
    tags: ['Clothing', 'Anime', 'Figures'],
    isPremium: false
  },
  {
    id: '3',
    name: 'Media Markt Spain',
    country: 'Spain',
    countryCode: 'ES',
    type: 'Retailer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Media_Markt_logo.svg/2560px-Media_Markt_logo.svg.png',
    description: 'Electronic department store. Excellent for new video games and consoles.',
    rating: 4.2,
    tags: ['Electronics', 'Consoles', 'New'],
    isPremium: true
  },
  {
    id: '4',
    name: 'Fnac France',
    country: 'France',
    countryCode: 'FR',
    type: 'Retailer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png',
    description: 'Books, Music & Electronics. Top tier for European exclusives.',
    rating: 4.6,
    tags: ['Books', 'Vinyl', 'Tech'],
    isPremium: false
  },
  {
    id: '5',
    name: 'Yahoo Auctions',
    country: 'Japan',
    countryCode: 'JP',
    type: 'Auction',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Yahoo%21_Japan_logo.svg/2560px-Yahoo%21_Japan_logo.svg.png',
    description: 'The standard for Japanese collectibles and rare items.',
    rating: 4.9,
    tags: ['Rare', 'Japan Import', 'Retro'],
    isPremium: true
  }
];

export const MOCK_SAVED_SEARCHES: SavedSearch[] = [
  {
    id: '101',
    title: 'Pokemon Display GameBoy',
    shopName: 'Mercari',
    country: 'United States',
    query: 'pokemon display',
    category: 'Video Games',
    dateAdded: '2 hours ago'
  },
  {
    id: '102',
    title: 'Nintendo DS Lite New',
    shopName: 'eBay',
    country: 'United States',
    query: 'nintendo ds lite sealed',
    category: 'Consoles',
    dateAdded: '1 day ago'
  },
  {
    id: '103',
    title: 'GameBoy Advance SP CIB',
    shopName: 'eBay',
    country: 'United Kingdom',
    query: 'gba sp cib',
    category: 'Consoles',
    dateAdded: '3 days ago'
  },
   {
    id: '104',
    title: 'Zelda Majora Mask Boxed',
    shopName: 'Yahoo Auctions',
    country: 'Japan',
    query: 'zelda majora mask n64',
    category: 'Retro Games',
    dateAdded: '5 days ago'
  }
];

export const CATEGORIES = [
  { name: 'Toys, Games & Figures', count: 127, icon: 'Puzzle' },
  { name: 'View All Toys Shops', count: 0, icon: 'Store' },
  { name: 'Hot Wheels', count: 60, icon: 'Car' },
  { name: 'Funko Pop Figures', count: 89, icon: 'Smile' },
  { name: 'Dolls & Barbies', count: 63, icon: 'User' },
  { name: 'Table Games', count: 28, icon: 'Dice5' },
  { name: 'Video games & Consoles', count: 230, icon: 'Gamepad2' },
  { name: 'Cards, Stickers & TCG', count: 155, icon: 'Files' },
  { name: 'Books, Comics & Magazines', count: 95, icon: 'BookOpen' },
];