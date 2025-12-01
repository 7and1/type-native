import React from 'react';
import { KeyboardLayout } from '../../types';

interface SeoContentProps {
  layout: KeyboardLayout;
}

export const SeoContent: React.FC<SeoContentProps> = ({ layout }) => {
  if (layout.id === 'en') return null;

  return (
    <article className="max-w-4xl mx-auto mt-12 prose prose-slate">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">How to type with the {layout.name} Keyboard</h2>
      <p className="text-slate-600 mb-4">
        This online <strong>{layout.name} keyboard</strong> allows you to type {layout.name} characters without installing any software. 
        It uses a standard transliteration map that corresponds to the physical layout of your keyboard.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mb-3">Features</h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li><strong>Smart Mapping:</strong> Automatically maps your physical QWERTY keys to {layout.name}.</li>
        <li><strong>Privacy Focused:</strong> Everything happens in your browser. No text is sent to servers.</li>
        <li><strong>Mobile Ready:</strong> Fully responsive design for phones and tablets.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-800 mb-3">Common Shortcuts</h3>
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><code className="bg-slate-100 px-1 rounded">Shift</code> + Key : Upper/Alternative char</div>
          <div><code className="bg-slate-100 px-1 rounded">Backspace</code> : Delete character</div>
        </div>
      </div>
    </article>
  );
};