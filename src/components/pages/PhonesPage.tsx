import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getProducts } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const PhonesPage: React.FC = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);

  const phones = useMemo(() => {
  return products.filter(p => p.category === 'phones');
}, [products]);

  
  if (hasError) {
    return <ErrorComponent />
  }
  
  return (
    <ProductsPageTemplate
      isLoading={isLoading}
      title={'Mobile phones'}
      products={phones}
      totalProducts={phones.length}
      sort={'Newest'}
      perPage={16}
      currentPage={1}
      onPageChange={() => {}}
    />
  );
};
