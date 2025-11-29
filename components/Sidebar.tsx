import React from 'react';
import { ChevronDown, Flag, Search, ShoppingBag, Globe, AlertCircle, Send, Heart, Puzzle, Store, Car, Smile, User, Dice5, Gamepad2, Files, BookOpen } from 'lucide-react';
import { CATEGORIES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle size={16} />,
  Store: <Store size={16} />,
  Car: <Car size={16} />,
  Smile: <Smile size={16} />,
  User: <User size={16} />,
  Dice5: <Dice5 size={16} />,
  Gamepad2: <Gamepad2 size={16} />,
  Files: <Files size={16} />,
  BookOpen: <BookOpen size={16} />,
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-72 shrink-0 space-y-6 hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar pb-10">
      
      {/* Location Filter */}
      <div className="glass-card p-5 rounded-2xl space-y-4">
        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Ship to:</h3>
        <button className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-400 transition-colors shadow-sm group">
          <span className="flex items-center gap-2 text-slate-700 font-medium">
            United States <span className="text-xs text-slate-400 font-mono">US</span> 🇺🇸
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">559</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </button>
      </div>

      {/* Tools */}
      <div className="space-y-1">
        <h3 className="px-2 font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Shopping Tools</h3>
        {[
          { label: 'Search in all shops', icon: <Search size={18} /> },
          { label: 'Favorite Shops', icon: <Heart size={18} /> },
          { label: 'Saved Shop Searches', icon: <ShoppingBag size={18} /> },
          { label: 'Send Shop to Museum', icon: <Send size={18} /> },
          { label: 'Report a Problem', icon: <AlertCircle size={18} /> },
        ].map((item, idx) => (
          <button key={idx} className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-sm hover:translate-x-1 transition-all rounded-xl text-sm font-medium">
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4" />

      {/* Categories */}
      <div className="space-y-1">
        <h3 className="px-2 font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Shop by categories</h3>
        {CATEGORIES.map((cat, idx) => (
          <button key={idx} className="w-full flex items-center justify-between px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-sm hover:translate-x-1 transition-all rounded-xl text-sm group">
            <span className="flex items-center gap-3">
              <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                 {IconMap[cat.icon as string]}
              </span>
              {cat.name}
            </span>
            {cat.count > 0 && (
              <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600">
                {cat.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </aside>
  );
};