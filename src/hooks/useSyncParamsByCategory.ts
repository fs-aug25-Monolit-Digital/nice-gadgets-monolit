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
    setSearch,
    getCategory,
  } = useProductsControls();

  const state = getCategory(category);

  useEffect(() => {
    const sortFromUrl = searchParams.get('sort') as SortOption | null;
    const perPageFromUrl = Number(searchParams.get('perPage'));
    const pageFromUrl = Number(searchParams.get('page'));
    const searchFromUrl = searchParams.get('search');

    if (sortFromUrl) setSort(category, sortFromUrl);
    if (perPageFromUrl) setPerPage(category, perPageFromUrl);
    if (pageFromUrl) setCurrentPage(category, pageFromUrl);
    if (searchFromUrl !== null) setSearch(category, searchFromUrl);
  }, [category, searchParams, setCurrentPage, setPerPage, setSearch, setSort]);

  useEffect(() => {
    setSearchParams({
      sort: state.sort,
      perPage: state.perPage.toString(),
      page: state.currentPage.toString(),
      search: state.search,
    });
  }, [state.sort, state.perPage, state.currentPage, state.search, setSearchParams]);
};