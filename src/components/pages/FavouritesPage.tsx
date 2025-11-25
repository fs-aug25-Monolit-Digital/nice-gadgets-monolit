import { useFavouritesStore } from '../../stores/useFavouritesStore';
import { FavoritesTemplate } from '../templates/FavoritesTemplate';
import { useProducts } from '../../hooks/useProduct';
import { getProducts } from '../../utilities/fetchApi';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const FavouritePage = () => {
  const favourites = useFavouritesStore((state) => state.favourites);
  const { isLoading, hasError } = useProducts(getProducts);

  if (hasError) {
    return <ErrorComponent />
  }

  return (
    <FavoritesTemplate 
      products={favourites} 
      isLoading={isLoading}
    />
  );
};