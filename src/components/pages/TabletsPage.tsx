import { useMemo } from "react";
import { useProducts } from "../../hooks/useProduct";
import { getProducts } from "../../utilities/fetchApi";
import { ProductsPageTemplate } from "../templates/ProductsPageTemplate/ProductsPageTemplate";
import { ErrorComponent } from "../organisms/ErrorComponent";

export const TabletsPage = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);

  const tablets = useMemo(() => {
  return products.filter(p => p.category === 'tablets');
}, [products]);

  if (hasError) {
    return <ErrorComponent />
  }

  return (
    <ProductsPageTemplate
      isLoading={isLoading}
      title={'Tablets'}
      products={tablets}
      totalProducts={tablets.length}
      sort={'Newest'}
      perPage={16}
      currentPage={1}
      onPageChange={() => {}}
    />
  );
}