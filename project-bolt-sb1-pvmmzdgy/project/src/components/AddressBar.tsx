import React, { useState } from 'react';
import { Search, ArrowLeft, ArrowRight, RotateCw, Home } from 'lucide-react';

interface AddressBarProps {
  onNavigate: (url: string) => void;
  onBack: () => void;
  onForward: () => void;
  onRefresh: () => void;
  onHome: () => void;
}

export function AddressBar({ onNavigate, onBack, onForward, onRefresh, onHome }: AddressBarProps) {
  const [url, setUrl] = useState('https://example.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate(url);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 border-b border-gray-200">
      <div className="flex gap-1">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={onForward}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Go forward"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={onRefresh}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Refresh page"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button
          onClick={onHome}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Go to home"
        >
          <Home className="w-4 h-4" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter URL or search"
          />
        </div>
      </form>
    </div>
  );
}