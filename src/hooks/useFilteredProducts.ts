import { useMemo } from 'react';
import { useProductsControls, type CategoryKey } from '../stores/useProductsControls';
import type { SimpleProduct } from '../types/CategoryProduct';

export const useFilteredProducts = (
  products: SimpleProduct[],
  category: CategoryKey
) => {
  const { getCategory } = useProductsControls();

  const { sort, perPage, currentPage, search } = getCategory(category);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case 'Cheapest':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'Most expensive':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'Newest':
        result.sort((a, b) => b.year - a.year);
        break;

      case 'Oldest':
        result.sort((a, b) => a.year - b.year);
        break;
    }

    return result;
  }, [products, sort, search]);

  
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage, perPage]);

  return {
    products: paginatedProducts,
    totalAfterFilter: filteredProducts.length,
  };
}
