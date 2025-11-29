import React, { useEffect, useState } from 'react';
import { Search, ChevronDown, Check, MousePointer2, ArrowRight, SlidersHorizontal } from 'lucide-react';

export const HeroAnimation: React.FC = () => {
  const [stage, setStage] = useState<'shops' | 'form' | 'results'>('shops');
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 120 }); // Start off-screen
  const [clickActive, setClickActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLoading, setIsLoading] = useState(false);

  // Animation Sequence
  useEffect(() => {
    let mounted = true;
    
    const runSequence = async () => {
      if (!mounted) return;

      // --- RESET ---
      setStage('shops');
      setCursorPos({ x: 50, y: 120 });
      setInputValue('');
      setSelectedCategory('All Categories');
      setIsLoading(false);
      setClickActive(false);

      // Wait a bit before starting
      await wait(1000);
      if (!mounted) return;

      // --- PHASE 1: SELECT SHOP ---
      // Move cursor to eBay card (Top Left in 2x2 grid approx coords)
      setCursorPos({ x: 25, y: 30 }); 
      await wait(1200);
      if (!mounted) return;

      // Click
      setClickActive(true);
      await wait(200);
      setClickActive(false);
      await wait(400);
      if (!mounted) return;

      // --- PHASE 2: FORM ---
      setStage('form');
      setCursorPos({ x: 50, y: 110 }); // Reset cursor pos visually
      await wait(500);
      
      // Move to Input (Top)
      setCursorPos({ x: 50, y: 25 });
      await wait(800);
      if (!mounted) return;
      
      // "Type" text
      const text = "Zelda Ocarina";
      for (let i = 0; i <= text.length; i++) {
        setInputValue(text.slice(0, i));
        await wait(60);
      }
      await wait(300);

      // Move to Category (Middle Left)
      setCursorPos({ x: 25, y: 55 });
      await wait(600);
      setClickActive(true);
      await wait(150);
      setClickActive(false);
      setSelectedCategory('Video Games');
      await wait(400);

      // Move to Search Button (Bottom Right)
      setCursorPos({ x: 85, y: 85 });
      await wait(800);
      if (!mounted) return;

      // Click Search
      setClickActive(true);
      await wait(200);
      setClickActive(false);
      
      // Loading
      setIsLoading(true);
      await wait(800);
      
      // --- PHASE 3: RESULTS ---
      setStage('results');
      setIsLoading(false);
      setCursorPos({ x: 90, y: 110 }); // Move cursor away
      
      // Hold results then restart
      await wait(5000);
      if (mounted) runSequence();
    };

    runSequence();

    return () => { mounted = false; };
  }, []);

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="relative w-full h-[220px] bg-slate-50 border-4 border-white/40 rounded-xl overflow-hidden shadow-2xl select-none font-sans">
      
      {/* --- CONTENT CONTAINER --- */}
      <div className="absolute inset-0">
        
        {/* PHASE 1: SHOP SELECTION */}
        {stage === 'shops' && (
          <div className="grid grid-cols-2 gap-3 w-full h-full p-3 animate-in fade-in zoom-in duration-300">
             {['eBay', 'Mercari', 'Yahoo', 'Amazon'].map((shop, idx) => (
               <div 
                  key={shop}
                  className={`
                    relative bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 shadow-sm transition-transform duration-200
                    ${idx === 0 && clickActive ? 'scale-[0.98] bg-blue-50 border-blue-400 ring-2 ring-blue-200' : 'hover:border-blue-300'}
                  `}
               >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm
                    ${shop === 'eBay' ? 'bg-gradient-to-br from-red-500 to-red-600' : 
                      shop === 'Mercari' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                      shop === 'Yahoo' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'}
                  `}>
                    {shop[0]}
                  </div>
                  <span className="font-bold text-slate-700 text-lg">{shop}</span>
                  {idx === 0 && <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
               </div>
             ))}
          </div>
        )}

        {/* PHASE 2: FORM */}
        {stage === 'form' && (
          <div className="w-full h-full bg-white flex flex-col p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
             {/* Header */}
             <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white font-bold text-xs">e</div>
                   <span className="text-sm font-bold text-slate-800">Advanced Search</span>
                </div>
                <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
             </div>

             <div className="flex-1 flex flex-col gap-3">
                {/* Search Input */}
                <div className="relative">
                   <Search size={14} className="absolute left-3 top-3 text-slate-400" />
                   <input 
                      readOnly
                      value={inputValue}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm font-medium text-slate-800 outline-none focus:ring-2 ring-blue-500/20"
                      placeholder="Keywords..."
                   />
                   <div className="absolute right-3 top-2.5 w-0.5 h-5 bg-blue-500 animate-pulse"></div>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-2 gap-3">
                   <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium flex justify-between items-center text-slate-700 shadow-sm">
                      {selectedCategory} <ChevronDown size={12} className="text-slate-400" />
                   </div>
                   <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium flex justify-between items-center text-slate-700 shadow-sm">
                      United States <ChevronDown size={12} className="text-slate-400" />
                   </div>
                   <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium flex justify-between items-center text-slate-400 shadow-sm">
                      Condition <ChevronDown size={12} />
                   </div>
                   <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium flex justify-between items-center text-slate-400 shadow-sm">
                      Price Range <ChevronDown size={12} />
                   </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-1">
                   <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded cursor-pointer">
                      <SlidersHorizontal size={10} />
                      Show Advanced options
                   </div>
                   <button className={`
                      px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-md shadow-blue-500/20 transition-transform flex items-center gap-2
                      ${clickActive ? 'scale-95' : ''}
                   `}>
                      {isLoading ? '...' : <>Search <ArrowRight size={12}/></>}
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* PHASE 3: RESULTS */}
        {stage === 'results' && (
           <div className="w-full h-full p-3 bg-slate-50 flex flex-col gap-3 animate-in fade-in zoom-in duration-300">
              <div className="flex items-center justify-between px-1">
                 <span className="text-xs font-bold text-slate-500">4 Results found</span>
                 <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-slate-200"></div>
                    <div className="w-4 h-4 rounded bg-white border border-slate-200"></div>
                 </div>
              </div>
              
              <div className="flex-1 space-y-3 overflow-hidden">
                {[1, 2].map((i) => (
                   <div key={i} className="bg-white rounded-xl p-3 flex gap-4 border border-slate-200 shadow-sm items-center h-[72px]">
                      <div className="w-16 h-full bg-slate-100 rounded-lg shrink-0 animate-pulse relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                         <div className="h-3 w-3/4 bg-slate-100 rounded animate-pulse"></div>
                         <div className="flex justify-between items-center">
                            <div className="h-2 w-1/3 bg-slate-100 rounded animate-pulse"></div>
                            <div className="h-5 w-16 bg-blue-50 rounded text-blue-200 text-[10px] flex items-center justify-center font-bold">$$$</div>
                         </div>
                      </div>
                   </div>
                ))}
              </div>
           </div>
        )}

      </div>

      {/* --- MOUSE CURSOR --- */}
      <div 
        className="absolute z-50 transition-all duration-700 ease-in-out pointer-events-none drop-shadow-xl"
        style={{ 
           left: `${cursorPos.x}%`, 
           top: `${cursorPos.y}%`,
           transform: `translate(-50%, -50%) scale(${clickActive ? 0.8 : 1})`
        }}
      >
        <MousePointer2 
          size={32} 
          className="fill-slate-900 text-white stroke-[2px]" 
        />
        {/* Click Ripple */}
        {clickActive && (
           <div className="absolute top-0 left-0 -ml-4 -mt-4 w-16 h-16 bg-blue-500/40 rounded-full animate-ping"></div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%) skewX(12deg); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

    </div>
  );
};