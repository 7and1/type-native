'use client';

import { Copy, Search, Youtube, Trash2, Check, ShoppingCart, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface ActionBarProps {
  text: string;
  onClear: () => void;
  className?: string;
}

export function ActionBar({ text, onClear, className }: ActionBarProps) {
  const [copied, setCopied] = useState(false);

  const hasText = text.trim().length > 0;

  const handleCopy = useCallback(async () => {
    if (!hasText) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy. Please try again.');
    }
  }, [text, hasText]);

  const handleGoogleSearch = useCallback(() => {
    if (!hasText) return;
    const query = encodeURIComponent(text.trim());
    window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
  }, [text, hasText]);

  const handleYouTubeSearch = useCallback(() => {
    if (!hasText) return;
    const query = encodeURIComponent(text.trim());
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank', 'noopener,noreferrer');
  }, [text, hasText]);

  const handleAmazonSearch = useCallback(() => {
    if (!hasText) return;
    const query = encodeURIComponent(text.trim());
    window.open(`https://www.amazon.com/s?k=${query}`, '_blank', 'noopener,noreferrer');
  }, [text, hasText]);

  const handleTwitterSearch = useCallback(() => {
    if (!hasText) return;
    const query = encodeURIComponent(text.trim());
    window.open(`https://twitter.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
  }, [text, hasText]);

  const handleClear = useCallback(() => {
    if (!hasText) return;
    if (text.length > 50) {
      // Only confirm for longer texts
      if (window.confirm('Clear all text?')) {
        onClear();
        toast.success('Text cleared');
      }
    } else {
      onClear();
      toast.success('Text cleared');
    }
  }, [text, hasText, onClear]);

  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      <Button
        onClick={handleCopy}
        disabled={!hasText}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {copied ? 'Copied!' : 'Copy'}
      </Button>

      <Button
        onClick={handleGoogleSearch}
        disabled={!hasText}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span> Google
      </Button>

      <Button
        onClick={handleYouTubeSearch}
        disabled={!hasText}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Youtube className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span> YouTube
      </Button>

      <Button
        onClick={handleAmazonSearch}
        disabled={!hasText}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <ShoppingCart className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span> Amazon
      </Button>

      <Button
        onClick={handleTwitterSearch}
        disabled={!hasText}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Twitter className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span> Twitter
      </Button>

      <Button
        onClick={handleClear}
        disabled={!hasText}
        variant="destructive"
        size="sm"
        className="gap-2"
      >
        <Trash2 className="w-4 h-4" />
        Clear
      </Button>
    </div>
  );
}
