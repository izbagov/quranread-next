import create from 'zustand';
import { Theme } from '../types/common';

type Store = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
  fonts: {
    loaded: string[],
  },
  setLoadedFont: (newFont: string) => void;
};

const useStore = create<Store>((set) => ({
  theme: 'light',
  fonts: {
    loaded: [],
  },
  setTheme: (newTheme: Theme) => set(() => ({ theme: newTheme })),
  setLoadedFont: (newFont: string) => (
    set((state) => ({
      fonts: { ...state.fonts, loaded: [...state.fonts.loaded, newFont]}
    }))
  )
}));

export default useStore;
