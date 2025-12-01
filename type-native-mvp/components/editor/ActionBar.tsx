
import React, { useState } from 'react';
import { Copy, Trash2, Search, Check, Download, Twitter, Type, Minus, Plus } from 'lucide-react';

interface ActionBarProps {
  text: string;
  onClear: () => void;
  direction: 'rtl' | 'ltr';
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({ text, onClear, direction, fontSize, onFontSizeChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleGoogleSearch = () => {
    if (!text) return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleDownload = () => {
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `type-native-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleTwitterShare = () => {
    if (!text) return;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 mt-4 w-full max-w-4xl ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
      
      {/* Primary Actions */}
      <button
        onClick={handleCopy}
        disabled={!text}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
          ${copied ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300'}
        `}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
      </button>

      <div className="h-6 w-px bg-slate-300 mx-1" />

      {/* Font Size Controls */}
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
        <button 
          onClick={() => onFontSizeChange(Math.max(14, fontSize - 2))}
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600"
          title="Decrease font size"
        >
          <Minus size={14} />
        </button>
        <div className="flex items-center px-1 text-slate-400">
           <Type size={16} />
        </div>
        <button 
          onClick={() => onFontSizeChange(Math.min(48, fontSize + 2))}
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600"
          title="Increase font size"
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block" />

      {/* Utilities */}
      <button
        onClick={handleGoogleSearch}
        disabled={!text}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
      >
        <Search size={18} />
        <span className="hidden lg:inline">Google</span>
      </button>

      <button
        onClick={handleTwitterShare}
        disabled={!text}
        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-blue-50 hover:text-blue-500 disabled:opacity-50"
        title="Tweet"
      >
        <Twitter size={18} />
      </button>

      <button
        onClick={handleDownload}
        disabled={!text}
        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
        title="Download .txt"
      >
        <Download size={18} />
      </button>

      <div className="flex-grow" />

      {/* Destructive */}
      <button
        onClick={onClear}
        disabled={!text}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
      >
        <Trash2 size={18} />
        <span className="hidden sm:inline">Clear</span>
      </button>
    </div>
  );
};
