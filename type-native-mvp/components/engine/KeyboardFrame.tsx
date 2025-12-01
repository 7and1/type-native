import React from 'react';
import { KeyboardLayout, KeyDefinition } from '../../types';
import { KeyButton } from './KeyButton';

interface KeyboardFrameProps {
  layout: KeyboardLayout;
  isShift: boolean;
  onKeyClick: (def: KeyDefinition) => void;
}

export const KeyboardFrame: React.FC<KeyboardFrameProps> = ({ layout, isShift, onKeyClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-100 p-2 md:p-4 rounded-xl shadow-inner select-none">
      <div className="flex flex-col w-full">
        {layout.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-between mb-0.5">
            {row.map((keyDef) => (
              <KeyButton
                key={keyDef.code}
                def={keyDef}
                isShift={isShift}
                onClick={onKeyClick}
                fontFamily={layout.fontFamily}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};