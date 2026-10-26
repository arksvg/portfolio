import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, Unlock, Key, Eye, EyeOff, Loader2, CheckCircle2, X, AlertCircle
} from 'lucide-react';
import { useProjectVisibility } from '../context/ProjectVisibilityContext';

export default function SecurityConsoleModal({ onToast }) {
  const { 
    isModalOpen, 
    closeUnlockModal, 
    showClientProjects, 
    unlockGlobally, 
    lockGlobally, 
    isSyncing 
  } = useProjectVisibility();

  const [inputCode, setInputCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'validating' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  // Reset state whenever modal opens
  useEffect(() => {
    if (isModalOpen) {
      setInputCode('');
      setErrorMessage('');
      setStatus('idle');
      setShowPassword(false);

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') {
        closeUnlockModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeUnlockModal]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!inputCode || isSyncing) return;

    setStatus('validating');
    setErrorMessage('');

    try {
      if (showClientProjects) {
        await lockGlobally(inputCode);
        setStatus('success');
        if (onToast) {
          onToast({ message: "Showcase locked globally." });
        }
      } else {
        await unlockGlobally(inputCode);
        setStatus('success');
        if (onToast) {
          onToast({ message: "Showcase unlocked globally!" });
        }
      }

      setTimeout(() => {
        closeUnlockModal();
      }, 700);

    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Incorrect password');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeUnlockModal();
      }}
    >
      <div 
        className="relative w-full max-w-sm rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-1 text-xs font-medium text-zinc-400">
              {showClientProjects ? 'Lock Showcase' : 'Unlock Showcase'}
            </span>
          </div>

          <button
            onClick={closeUnlockModal}
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${
              showClientProjects 
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
            }`}>
              {showClientProjects ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {showClientProjects ? 'Lock Client Showcase' : 'Unlock Client Showcase'}
              </h3>
              <p className="text-xs text-zinc-400">
                {showClientProjects 
                  ? 'Enter password to lock globally' 
                  : 'Enter password to unlock globally'}
              </p>
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5 pt-1">
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={inputCode}
                onChange={(e) => {
                  setInputCode(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={isSyncing || status === 'success'}
                placeholder="Enter password..."
                className={`w-full px-3.5 py-2.5 pr-10 rounded-xl bg-zinc-900 border text-sm transition-colors outline-none ${
                  status === 'error'
                    ? 'border-rose-500/70 text-rose-200 focus:ring-1 focus:ring-rose-500/40'
                    : status === 'success'
                    ? 'border-emerald-500/70 text-emerald-200'
                    : 'border-zinc-700/70 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30'
                }`}
                autoComplete="off"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {errorMessage && (
              <div className="text-xs text-rose-400 flex items-center gap-1.5 pt-1 animate-in fade-in">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={closeUnlockModal}
              disabled={isSyncing}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs border border-zinc-800 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!inputCode || isSyncing || status === 'success'}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all ${
                status === 'success'
                  ? 'bg-emerald-600 text-white'
                  : showClientProjects
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSyncing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Syncing...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Done</span>
                </>
              ) : showClientProjects ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Lock</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Unlock</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
