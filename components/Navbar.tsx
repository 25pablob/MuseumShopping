import React from 'react';
import { Home, Compass, ShoppingBag, Upload, Bell, MessageSquare, Search, Menu } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-40 w-full glass-panel border-b border-white/40">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(ViewState.EXPLORE)}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">Museum<span className="text-slate-400 font-normal text-sm">.app</span></span>
        </div>

        {/* Main Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          {[
            { label: 'Home', icon: <Home size={16} />, view: ViewState.EXPLORE },
            { label: 'Discover', icon: <Compass size={16} />, view: null },
            { label: 'Shopping', icon: <ShoppingBag size={16} />, view: ViewState.EXPLORE },
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => item.view && onNavigate(item.view)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                ${(item.view === currentView && currentView !== ViewState.SAVED_SEARCHES) || (item.label === 'Shopping' && currentView === ViewState.SHOP_DETAIL)
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-lg relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search for shops, items, or categories..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all shadow-inner"
          />
          <div className="absolute inset-y-0 right-1.5 flex items-center">
             <span className="text-xs font-medium text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-sm">⌘ K</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
           <button className="hidden md:flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Upload size={18} />
              <span>Upload</span>
           </button>
           
           <div className="flex items-center gap-1">
             <button className="relative p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
               <Bell size={20} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button className="relative p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
               <MessageSquare size={20} />
               <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
             </button>
           </div>

           <div className="w-px h-8 bg-slate-200 mx-1 hidden md:block"></div>

           <button className="flex items-center gap-3 pl-1 pr-2 py-1 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
             <img src="https://picsum.photos/100/100" alt="User" className="w-8 h-8 rounded-full border border-slate-200 shadow-sm" />
             <div className="hidden xl:flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-slate-800">Jimmy Hendrix</span>
                <span className="text-[10px] text-slate-500">@jimmyh492</span>
             </div>
           </button>
           <button className="md:hidden p-2 text-slate-600">
             <Menu size={24} />
           </button>
        </div>
      </div>
    </nav>
  );
};