
import React, { useState, useRef, useEffect } from 'react';
import { getLayout, layouts } from './data/layouts';
import { KeyboardLayout, KeyDefinition, KeyboardLayoutId, Region } from './types';
import { KeyboardFrame } from './components/engine/KeyboardFrame';
import { ActionBar } from './components/editor/ActionBar';
import { SeoContent } from './components/seo/SeoContent';
import { useKeyboard } from './components/engine/useKeyboard';
import { Globe, Keyboard as KeyboardIcon, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [layoutId, setLayoutId] = useState<KeyboardLayoutId>('en');
  const [text, setText] = useState('');
  const [isShift, setIsShift] = useState(false);
  const [fontSize, setFontSize] = useState(24); // Default font size
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const layout = getLayout(layoutId);

  // Focus management
  useEffect(() => {
    textareaRef.current?.focus();
  }, [layoutId]);

  // Handler for inserting text at cursor position
  const handleInsert = (char: string) => {
    const input = textareaRef.current;
    if (!input) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;
    const newText = text.substring(0, start) + char + text.substring(end);
    
    setText(newText);
    
    // Restore cursor position after state update
    requestAnimationFrame(() => {
      input.selectionStart = input.selectionEnd = start + char.length;
      input.focus();
    });
  };

  const handleDelete = () => {
     // Native backspace usually handles this, but for virtual button:
    const input = textareaRef.current;
    if (!input) return;
    
    const start = input.selectionStart;
    const end = input.selectionEnd;
    
    if (start === end && start > 0) {
      const newText = text.substring(0, start - 1) + text.substring(end);
      setText(newText);
      requestAnimationFrame(() => {
        input.selectionStart = input.selectionEnd = start - 1;
        input.focus();
      });
    } else if (start !== end) {
      const newText = text.substring(0, start) + text.substring(end);
      setText(newText);
      requestAnimationFrame(() => {
         input.selectionStart = input.selectionEnd = start;
         input.focus();
      });
    }
  };

  const handleVirtualKeyClick = (def: KeyDefinition) => {
    if (def.code === 'ShiftLeft' || def.code === 'ShiftRight') {
      setIsShift(!isShift);
      return;
    }
    
    if (def.code === 'Space') {
      handleInsert(' ');
      return;
    }

    if (def.code === 'Backspace') {
      handleDelete();
      return;
    }

    if (def.code === 'Tab') {
      handleInsert('\t');
      return;
    }
    
    if (def.code === 'Enter') {
      handleInsert('\n');
      return;
    }

    if (def.type === 'char' || !def.type) {
      const charToInsert = (isShift && def.shift) ? def.shift : def.char;
      handleInsert(charToInsert);
      if (isShift) setIsShift(false); // Auto-release shift after char (like mobile)
    }
  };

  // Bind the engine
  useKeyboard({
    layout,
    onInsert: handleInsert,
    onDelete: handleDelete,
    onEnter: () => handleInsert('\n'),
    isShift,
    setIsShift,
    textAreaRef: textareaRef
  });

  // Group layouts by region for the dropdown
  const groupedLayouts = Object.values(layouts).reduce((acc, curr) => {
    if (!acc[curr.region]) acc[curr.region] = [];
    acc[curr.region].push(curr);
    return acc;
  }, {} as Record<Region, typeof layouts['en'][]>);

  // Explicit order for regions
  const regionOrder: Region[] = [
    'North America',
    'South America',
    'Western Europe',
    'Northern Europe',
    'Southern Europe',
    'Eastern Europe',
    'Middle East',
    'North Africa',
    'Sub-Saharan Africa',
    'Central Asia',
    'South Asia',
    'Southeast Asia',
    'East Asia',
    'Oceania'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer" onClick={() => setLayoutId('en')}>
            <KeyboardIcon className="w-7 h-7" />
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">Type-Native</h1>
          </div>
          
          <div className="flex items-center gap-2 relative">
            <Globe className="w-5 h-5 text-slate-500" />
            <div className="relative">
              <select 
                value={layoutId}
                onChange={(e) => {
                  setLayoutId(e.target.value as KeyboardLayoutId);
                  setText('');
                }}
                className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 font-medium py-2 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer w-[200px] sm:w-[260px] text-sm sm:text-base truncate"
              >
                {regionOrder.map(region => (
                  groupedLayouts[region] && groupedLayouts[region].length > 0 && (
                    <optgroup key={region} label={region}>
                      {groupedLayouts[region].sort((a,b) => a.name.localeCompare(b.name)).map(l => (
                        <option key={l.id} value={l.id}>{l.name} {l.nativeName ? `(${l.nativeName})` : ''}</option>
                      ))}
                    </optgroup>
                  )
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-8">
        
        {/* Editor Area */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{layout.name} Keyboard</h2>
            <p className="text-slate-500">Type in {layout.name} with your standard keyboard or click the keys below.</p>
          </div>

          <div className="relative group">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              dir={layout.dir}
              style={{ fontSize: `${fontSize}px` }}
              placeholder={`Start typing in ${layout.name}...`}
              className={`
                w-full h-48 md:h-64 p-6 rounded-2xl border-2 border-slate-200
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 
                outline-none resize-none shadow-sm transition-all
                text-slate-800 leading-relaxed
                ${layout.fontFamily}
              `}
              spellCheck={false}
            />
            <div className="absolute bottom-4 right-4 text-slate-300 text-sm font-medium">
              {text.length} chars
            </div>
          </div>

          <ActionBar 
            text={text} 
            onClear={() => setText('')} 
            direction={layout.dir}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
          />
        </div>

        {/* Virtual Keyboard */}
        <div className="mt-12 sticky bottom-4 z-10">
          <KeyboardFrame 
            layout={layout} 
            isShift={isShift} 
            onKeyClick={handleVirtualKeyClick} 
          />
        </div>

        {/* SEO Content */}
        <SeoContent layout={layout} />

      </main>
    </div>
  );
};

export default App;
