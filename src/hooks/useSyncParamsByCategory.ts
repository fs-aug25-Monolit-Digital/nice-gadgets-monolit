import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  type CategoryKey,
  useProductsControls,
} from '../stores/useProductsControls';

import type { SortOption } from '../types/SortProducts';

export const useSyncParamsByCategory = (category: CategoryKey) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    setSort,
    setPerPage,
    setCurrentPage,
    getCategory,
  } = useProductsControls();

  const state = getCategory(category);

  useEffect(() => {
    const sortFromUrl = searchParams.get('sort') as SortOption | null;
    const perPageFromUrl = Number(searchParams.get('perPage'));
    const pageFromUrl = Number(searchParams.get('page'));

    if (sortFromUrl) setSort(category, sortFromUrl);
    if (perPageFromUrl) setPerPage(category, perPageFromUrl);
    if (pageFromUrl) setCurrentPage(category, pageFromUrl);
  }, [category, searchParams, setCurrentPage, setPerPage, setSort]);

  useEffect(() => {
    setSearchParams({
      sort: state.sort,
      perPage: state.perPage.toString(),
      page: state.currentPage.toString(),
    });
  }, [state.sort, state.perPage, state.currentPage, setSearchParams]);
};