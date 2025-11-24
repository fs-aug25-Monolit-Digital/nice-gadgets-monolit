import { useMemo } from "react";
import { useProducts } from "../../hooks/useProduct";
import { getProducts } from "../../utilities/fetchApi";
import { ProductsPageTemplate } from "../templates/ProductsPageTemplate/ProductsPageTemplate";
import { ErrorComponent } from "../organisms/ErrorComponent";

export const AccessoriesPage = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);

  const accessories = useMemo(() => {
  return products.filter(p => p.category === 'accessories');
}, [products]);

  if (hasError) {
    return <ErrorComponent />
  }
  
  return (
    <ProductsPageTemplate
      isLoading={isLoading}
      title={'Accessories'}
      products={accessories}
      totalProducts={accessories.length}
      sort={'Newest'}
      perPage={16}
      currentPage={1}
      onPageChange={() => {}}
    />
  );
}