'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { LanguageCode } from '@/types/keyboard';

interface AppState {
  // Draft texts per language (auto-saved)
  drafts: Record<LanguageCode, string>;
  setDraft: (languageCode: LanguageCode, text: string) => void;
  clearDraft: (languageCode: LanguageCode) => void;
  getDraft: (languageCode: LanguageCode) => string;

  // Theme preference
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;

  // Recent keyboards (for quick access)
  recentKeyboards: LanguageCode[];
  addRecentKeyboard: (code: LanguageCode) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Drafts management
      drafts: {} as Record<LanguageCode, string>,

      setDraft: (languageCode, text) =>
        set((state) => ({
          drafts: { ...state.drafts, [languageCode]: text },
        })),

      clearDraft: (languageCode) =>
        set((state) => {
          const newDrafts = { ...state.drafts };
          delete newDrafts[languageCode];
          return { drafts: newDrafts };
        }),

      getDraft: (languageCode) => {
        return get().drafts[languageCode] || '';
      },

      // Theme
      theme: 'system',
      setTheme: (theme) => set({ theme }),

      // Recent keyboards
      recentKeyboards: [],
      addRecentKeyboard: (code) =>
        set((state) => {
          const filtered = state.recentKeyboards.filter((c) => c !== code);
          return {
            recentKeyboards: [code, ...filtered].slice(0, 5),
          };
        }),
    }),
    {
      name: 'type-native-storage',
      version: 1,
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({
        drafts: state.drafts,
        theme: state.theme,
        recentKeyboards: state.recentKeyboards,
      }),
    }
  )
);
