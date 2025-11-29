import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Modal } from './components/Modal';
import { CreateSearchModal } from './components/CreateSearchModal';
import { HeroAnimation } from './components/HeroAnimation';
import { ViewState, Shop } from './types';
import { MOCK_SHOPS, MOCK_SAVED_SEARCHES } from './constants';
import { Search, Heart, ArrowRight, Settings, ExternalLink, Plus, Folder, LayoutGrid, ChevronRight, Star, Tag, Info, CheckCircle2, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.EXPLORE);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Handlers
  const handleShopClick = (shop: Shop) => {
    setSelectedShop(shop);
    setCurrentView(ViewState.SHOP_DETAIL);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateSearch = () => {
    setIsSearchModalOpen(true);
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if(view !== ViewState.SHOP_DETAIL) setSelectedShop(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Views ---

  // 1. Explore View
  const ExploreView = () => (
    <div className="flex-1 space-y-8 pb-20">
      
      {/* Hero Banner with Animation */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 p-8 md:p-10 text-white shadow-2xl shadow-blue-900/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Global Collector <br/> 
              <span className="text-blue-200">Directory & Search</span>
            </h1>
            <p className="text-blue-50 text-lg font-light leading-relaxed max-w-lg">
              Find hundreds of specialty stores for collectible items in over 50 countries. Automate your searches across eBay, Yahoo, and more.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
               <button onClick={handleCreateSearch} className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors">
                  Start Searching
               </button>
               <button className="px-6 py-3 bg-blue-700/50 text-white border border-blue-400/30 rounded-full font-semibold hover:bg-blue-700 transition-colors backdrop-blur-sm">
                  Explore Directory
               </button>
            </div>
          </div>

          {/* Right Animation */}
          <div className="w-full relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl"></div>
             <HeroAnimation />
          </div>

        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      </div>

      {/* Featured Section */}
      <div className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <div className="space-y-1">
             <h2 className="text-2xl font-bold text-slate-800">Popular auction sites & platforms</h2>
             <p className="text-slate-500 text-sm">The best options to purchase collectible items in the United States.</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-sm text-slate-600">
             <Search size={14} />
             <input type="text" placeholder="Search here..." className="outline-none bg-transparent placeholder:text-slate-400 w-32 md:w-48" />
             <div className="w-px h-4 bg-slate-200 mx-1"></div>
             <span className="text-slate-800 font-medium whitespace-nowrap">Newest First</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MOCK_SHOPS.map((shop) => (
            <div 
              key={shop.id} 
              onClick={() => handleShopClick(shop)}
              className="group glass-card rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[280px]"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="h-20 w-full bg-slate-50 rounded-xl flex items-center justify-center p-4 relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/50 group-hover:bg-white/0 transition-all"></div>
                   <img src={shop.logo} alt={shop.name} className="h-10 object-contain z-10 relative" />
                </div>
                
                {/* Content */}
                <div>
                   <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{shop.name}</h3>
                      <div className="flex gap-2 text-slate-400">
                         <Search size={16} className="hover:text-blue-500 transition-colors" />
                         <Heart size={16} className="hover:text-pink-500 transition-colors" />
                      </div>
                   </div>
                   <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{shop.type}</p>
                   <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{shop.description}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 mt-2">
                 {shop.isPremium ? (
                   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl text-center space-y-3 border border-blue-100">
                      <div className="flex items-center justify-center gap-2 text-slate-800 font-bold text-sm">
                         Subscribe to unlock
                         <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      </div>
                      <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all">
                        Subscribe to Premium
                      </button>
                   </div>
                 ) : (
                   <button className="w-full py-2.5 rounded-full border border-slate-200 text-slate-600 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group-hover:shadow-md">
                     Go to website
                     <ArrowRight size={14} />
                   </button>
                 )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-8">
           <button className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              <Plus size={18} /> View more pages
           </button>
        </div>
      </div>
    </div>
  );

  // 2. Shop Detail View
  const ShopDetailView = () => {
    if (!selectedShop) return null;
    return (
      <div className="flex-1 space-y-6 pb-20">
         {/* Breadcrumb */}
         <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hover:text-blue-500 cursor-pointer" onClick={() => handleNavigate(ViewState.EXPLORE)}>Shopping</span>
            <ChevronRight size={14} />
            <span className="hover:text-blue-500 cursor-pointer">{selectedShop.country}</span>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-medium">{selectedShop.name}</span>
         </div>

         {/* Header Info */}
         <div className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 shrink-0 space-y-4">
               <div className="w-full h-32 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6">
                 <img src={selectedShop.logo} alt={selectedShop.name} className="max-h-full max-w-full" />
               </div>
               <div className="flex justify-center">
                  <div className="flex gap-1">
                     {[1,2,3,4].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                     <Star size={16} className="text-slate-200 fill-slate-200" />
                  </div>
               </div>
               <div className="text-center text-xs text-slate-400">4.2 score based on 10 reviews</div>
            </div>
            
            <div className="flex-1 space-y-6">
               <h1 className="text-3xl font-bold text-slate-800">Buy online collectibles in {selectedShop.name}</h1>
               <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedShop.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique libero ut nunc pulvinar, id luctus ante mattis. Maecenas sagittis, est eleifend ultrices ornare, nunc dui viverra velit.
               </p>
               
               <div className="flex flex-wrap gap-4 pt-2">
                  <button className="px-6 py-2.5 bg-blue-500 text-white rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all flex items-center gap-2">
                     Go to website <ExternalLink size={14} />
                  </button>
                  <div className="flex items-center gap-2 text-sm text-slate-500 px-4 py-2 bg-slate-100 rounded-full">
                     <span className="font-bold text-slate-700">Payment Methods:</span> PayPal, VISA, MasterCard
                  </div>
               </div>
               
               <div className="flex flex-wrap gap-2">
                  {selectedShop.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 flex items-center gap-1">
                        <Tag size={12} /> {tag}
                     </span>
                  ))}
               </div>
            </div>
         </div>

         {/* Internal Search */}
         <div className="glass-card rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
               <Search size={20} className="text-blue-500" />
               {selectedShop.name} Quick Search
            </h3>
            <div className="flex gap-4">
               <div className="flex-1 relative">
                  <input 
                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                     placeholder={`Search any article quickly on ${selectedShop.name}...`}
                  />
                  <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
               </div>
               <div className="w-48 relative hidden md:block">
                  <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none appearance-none text-slate-600 cursor-pointer">
                     <option>Newest First</option>
                     <option>Price: Low to High</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" size={16} />
               </div>
            </div>
         </div>

         {/* Coupons */}
         <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800">Available Discounts</h3>
            <div className="glass-card p-4 rounded-2xl flex flex-col md:flex-row items-center gap-6 border-l-4 border-l-green-500">
               <div className="text-center p-4 min-w-[120px]">
                  <span className="block text-3xl font-bold text-slate-800">10€</span>
                  <span className="text-xs font-bold text-slate-400 tracking-widest">COUPON</span>
               </div>
               <div className="flex-1 border-l border-slate-100 pl-0 md:pl-6 space-y-2">
                  <p className="font-semibold text-slate-800">New User Discount for all electronics</p>
                  <p className="text-xs text-slate-500">Apply this code at checkout to get 10 EUR off your first purchase over 50 EUR.</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Exclusive Discount</span>
               </div>
               <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-bold text-sm shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all">
                  Show Coupon
               </button>
            </div>
         </div>
      </div>
    );
  };

  // 3. Saved Searches View
  const SavedSearchesView = () => (
    <div className="flex-1 space-y-6 pb-20">
       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
             <Star className="fill-yellow-400 text-yellow-400" /> All Saved Shops
          </h1>
          <div className="flex items-center gap-3">
             <button onClick={handleCreateSearch} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-all shadow-lg shadow-slate-900/10">
                <Plus size={16} /> Add Search
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-50 transition-all">
                <ExternalLink size={16} /> Open All
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-50 transition-all">
                <Settings size={16} /> Organize
             </button>
          </div>
       </div>

       {/* Search Bar for List */}
       <div className="flex gap-4 items-center bg-slate-100/50 p-2 rounded-2xl border border-slate-200">
           <div className="flex-1 relative">
              <Search className="absolute left-4 top-3 text-slate-400" size={18} />
              <input placeholder="Search saved items..." className="w-full bg-white rounded-xl pl-12 pr-4 py-2.5 outline-none border border-transparent focus:border-blue-300 transition-all shadow-sm" />
           </div>
           <div className="hidden md:flex items-center gap-3 pr-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                 <span>Rows:</span>
                 <select className="bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none text-xs font-bold">
                    <option>18</option>
                    <option>36</option>
                 </select>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                 <span>Order by:</span>
                 <select className="bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none text-xs font-bold">
                    <option>Date Added</option>
                    <option>Name</option>
                 </select>
              </div>
           </div>
       </div>

       {/* List */}
       <div className="glass-card rounded-3xl overflow-hidden border-0 shadow-xl shadow-slate-200/50">
          <div className="divide-y divide-slate-100">
             {MOCK_SAVED_SEARCHES.map((item) => (
                <div key={item.id} className="group p-4 md:p-6 hover:bg-blue-50/50 transition-colors flex flex-col md:flex-row items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      {item.shopName.includes('eBay') && <span className="text-xs font-bold text-red-500">eBay</span>}
                      {item.shopName.includes('Mercari') && <span className="text-xs font-bold text-blue-500">Mer</span>}
                      {item.shopName.includes('Yahoo') && <span className="text-xs font-bold text-purple-500">Y!</span>}
                   </div>
                   
                   <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <div className="flex items-center justify-center md:justify-start gap-4 mt-1 text-xs font-medium text-slate-500">
                         <span className="flex items-center gap-1"><Folder size={12} /> {item.category}</span>
                         <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                         <span>{item.country}</span>
                         <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                         <span>{item.dateAdded}</span>
                      </div>
                   </div>

                   <div className="flex items-center gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 md:translate-x-4 group-hover:translate-x-0">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all" title="Settings">
                         <Settings size={20} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all" title="Open Link">
                         <ExternalLink size={20} />
                      </button>
                   </div>
                </div>
             ))}
          </div>
          {/* Pagination */}
          <div className="bg-slate-50/50 p-4 border-t border-slate-100 flex justify-center gap-2">
             <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-slate-600 text-xs">{'<'}</button>
             <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500 text-white shadow-lg shadow-blue-500/30 text-xs font-bold">1</button>
             <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold">2</button>
             <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold">3</button>
             <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-slate-600 text-xs">{'>'}</button>
          </div>
       </div>

       {/* Folder Section */}
       <div className="mt-8">
          <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold text-lg">
             <Folder className="text-blue-400 fill-blue-400/20" /> GameBoy Advanced SP
          </div>
          <div className="glass-card rounded-2xl p-1">
              {/* Empty state or specific items could go here. Reusing list for demo */}
              <div className="p-8 text-center text-slate-400 text-sm">
                 <div className="inline-flex p-4 bg-slate-50 rounded-full mb-3">
                    <LayoutGrid size={24} className="text-slate-300" />
                 </div>
                 <p>This folder displays customized search results for GameBoy items.</p>
              </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 relative font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-3xl"></div>
         <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-6 py-8 flex items-start gap-8">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="w-full min-w-0 transition-all duration-500 ease-in-out">
           {currentView === ViewState.EXPLORE && <ExploreView />}
           {currentView === ViewState.SHOP_DETAIL && <ShopDetailView />}
           {currentView === ViewState.SAVED_SEARCHES && <SavedSearchesView />}
        </div>
      </main>

      <Modal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
        title="Create a New Search"
      >
        <CreateSearchModal />
      </Modal>

      {/* Floating Action Button for Mobile */}
      <button 
        onClick={handleCreateSearch}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl shadow-blue-600/30 flex items-center justify-center z-50 active:scale-95 transition-transform"
      >
         <Plus size={24} />
      </button>

    </div>
  );
};

export default App;