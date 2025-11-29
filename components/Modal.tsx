import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div 
        className={`
          relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
          bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl
          transform transition-all duration-300 ease-out
          ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}
        `}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-slate-100 bg-white/50 backdrop-blur-md rounded-t-3xl">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};