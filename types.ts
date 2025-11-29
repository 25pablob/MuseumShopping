export interface Shop {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  type: 'Marketplace' | 'Retailer' | 'Auction' | 'Specialized';
  logo: string;
  description: string;
  itemCount?: number;
  rating?: number;
  tags: string[];
  isPremium?: boolean;
}

export interface SavedSearch {
  id: string;
  title: string;
  shopName: string;
  country: string;
  query: string;
  category: string;
  dateAdded: string;
}

export enum ViewState {
  EXPLORE = 'EXPLORE',
  SHOP_DETAIL = 'SHOP_DETAIL',
  SAVED_SEARCHES = 'SAVED_SEARCHES'
}