import create from 'zustand';
import { Theme } from './types/common';

type Store = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};

const useStore = create<Store>((set) => ({
  theme: 'light',
  setTheme: (newTheme: Theme) => set(() => ({ theme: newTheme })),
}));

export default useStore;
