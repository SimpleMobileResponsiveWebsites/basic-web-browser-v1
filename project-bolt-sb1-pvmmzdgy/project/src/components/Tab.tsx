import React from 'react';
import { X } from 'lucide-react';

interface TabProps {
  title: string;
  active?: boolean;
  onClose: () => void;
  onClick: () => void;
}

export function Tab({ title, active, onClose, onClick }: TabProps) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 border-r border-gray-200 cursor-pointer max-w-[200px] ${
        active ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <span className="truncate text-sm">{title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="p-1 hover:bg-gray-200 rounded-full"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}