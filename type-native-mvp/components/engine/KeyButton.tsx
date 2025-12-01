import React from 'react';
import { KeyDefinition } from '../../types';

interface KeyButtonProps {
  def: KeyDefinition;
  isShift: boolean;
  onClick: (def: KeyDefinition) => void;
  fontFamily: string;
}

export const KeyButton: React.FC<KeyButtonProps> = ({ def, isShift, onClick, fontFamily }) => {
  const displayChar = (isShift && def.shift) ? def.shift : (def.label || def.char);
  
  // Calculate width style (grid span or flex basis)
  // We'll use relative sizing for simplicity in this flex implementation
  const widthClass = def.code === 'Space' ? 'flex-grow-[6]' : 
                     def.width && def.width > 1.5 ? 'flex-grow-[2]' : 'flex-grow';
  
  const isSpecial = def.type === 'action' || def.type === 'modifier';

  return (
    <button
      onMouseDown={(e) => e.preventDefault()} // Prevent losing focus from textarea
      onClick={() => onClick(def)}
      className={`
        ${widthClass}
        h-12 md:h-14
        m-0.5 md:m-1
        rounded-md
        shadow-sm border-b-2 border-slate-300
        active:border-b-0 active:translate-y-[2px] active:shadow-none
        transition-all duration-75
        flex flex-col items-center justify-center
        select-none
        ${isSpecial ? 'bg-slate-200 text-slate-600 text-sm font-medium' : 'bg-white text-slate-800 text-xl md:text-2xl'}
        ${fontFamily}
      `}
      style={{
        flexBasis: def.code === 'Space' ? '40%' : `${(def.width || 1) * 6}%` 
      }}
    >
      <span>{displayChar}</span>
      {/* Show secondary char if exists and not special */}
      {!isSpecial && def.shift && def.shift !== displayChar && (
        <span className="absolute top-1 right-1 text-[8px] md:text-[10px] text-slate-400 opacity-0 md:opacity-100">
          {isShift ? def.char : def.shift}
        </span>
      )}
    </button>
  );
};