import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/90 dark:bg-zinc-900/95 text-white border border-indigo-500/30 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="text-sm font-medium">{toast.message}</div>
      <button 
        onClick={onClose}
        className="p-1 ml-2 text-zinc-400 hover:text-white rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
