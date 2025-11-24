import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';

interface FavouritesState {
  favourites: SimpleProduct[];
  toggleFavourite: (product: SimpleProduct) => void;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set) => ({
      favourites: [],
      toggleFavourite: (product) =>
        set((state) => {
          const isExists = state.favourites.some((p) => p.id === product.id);
          if (isExists) {
            return {
              favourites: state.favourites.filter((p) => p.id !== product.id),
            };
          }
          return { favourites: [...state.favourites, product] };
        }),
    }),
    {
      name: 'favourites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);