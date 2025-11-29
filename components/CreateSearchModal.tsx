import React from 'react';
import { Search, ChevronDown, Check, Info } from 'lucide-react';

export const CreateSearchModal: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Top Row Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
           <label className="text-sm font-semibold text-slate-700">Title:</label>
           <input 
             type="text" 
             placeholder="Title of your custom search..."
             className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
           />
        </div>
        <div className="space-y-2">
           <label className="text-sm font-semibold text-slate-700">Search Term:</label>
           <input 
             type="text" 
             placeholder="Enter the search term..."
             className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
           />
        </div>
      </div>

      {/* Select Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Shop Country:</label>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all text-left">
              <span className="flex items-center gap-2">🇺🇸 United States</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
         </div>

         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Select Shop:</label>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all text-left">
              <span className="flex items-center gap-2">🛍️ eBay.com</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
         </div>
         
         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Category:</label>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all text-left">
              <span className="text-slate-600">Video Games & Consoles</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
         </div>

         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Sub-Category:</label>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all text-left">
              <span className="text-slate-600">Consoles</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
         </div>

         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Order by:</label>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all text-left">
              <span className="text-slate-600">Newest First</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
         </div>

         <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Price Range:</label>
            <div className="flex items-center gap-2">
               <input placeholder="Min Price..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-none" />
               <input placeholder="Max Price..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-none" />
            </div>
         </div>

      </div>

      <div className="pt-4 border-t border-slate-200">
         <h4 className="text-lg font-bold text-slate-800 mb-6">Advanced Options</h4>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Show:</label>
                <div className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-slate-600">
                  Available Items <ChevronDown size={16} />
                </div>
            </div>
             <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Type of listings:</label>
                <div className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-slate-600">
                  Buy it now <ChevronDown size={16} />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Condition:</label>
                <div className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-slate-600">
                  Brand New <ChevronDown size={16} />
                </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row gap-6 mt-6">
            <label className="flex items-center gap-3 cursor-pointer group">
               <div className="w-6 h-6 rounded-md border-2 border-slate-300 group-hover:border-blue-500 transition-colors flex items-center justify-center"></div>
               <span className="text-slate-700 font-medium">Include title and description</span>
               <Info size={16} className="text-slate-400" />
            </label>
             <label className="flex items-center gap-3 cursor-pointer group">
               <div className="w-6 h-6 rounded-md border-2 border-slate-300 group-hover:border-blue-500 transition-colors flex items-center justify-center"></div>
               <span className="text-slate-700 font-medium">Phrase agreement</span>
               <Info size={16} className="text-slate-400" />
            </label>
         </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-slate-100">
        <button className="px-6 py-3 rounded-full text-slate-600 font-semibold hover:bg-slate-100 transition-colors">
           Hide Advanced
        </button>
        <div className="flex items-center gap-4 w-full md:w-auto">
           <button className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
              Add To Section
           </button>
           <button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 transition-all">
              Verify Search
           </button>
            <button className="flex-1 md:flex-none px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
              Create
           </button>
        </div>
      </div>
    </div>
  );
};