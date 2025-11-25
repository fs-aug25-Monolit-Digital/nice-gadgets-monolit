import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
          const isExists = state.favourites.some((p) => p.itemId === product.itemId);

          if (isExists) {
            return {
              favourites: state.favourites.filter((p) => p.itemId !== product.itemId),
            };
          }

          return { favourites: [...state.favourites, product] };
        }),
    }),
    {
      name: 'favourites-storage',
    }
  )
);