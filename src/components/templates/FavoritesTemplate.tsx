import type React from "react";
import { ProductCard } from "../organisms/ProductCard/ProductCard";
import type { CategoryProduct } from "../../types/CategoryProduct";

type FavoritesTemplateProps = {
  products: CategoryProduct[];
};

export const FavoritesTemplate: React.FC<FavoritesTemplateProps> = ({ products }) => {
  const isEmpty = products.length === 0;

  return (
    <div className="container mx-auto px-4 md:px-6 xl:px-0 max-w-[1136px] pt-12 lg:pt-16">

      <div className="mb-8 mt-6">
        <h1 className="sm:text-[32px] md:text-[48px] font-bold text-primary mb-2 tracking-tight">
          Favourites
        </h1>
        <p className="text-secondary text-sm font-semibold">
          {products.length} items
        </p>
      </div>


      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            src="/gadgets/img/favorite-is-empty.png"
            alt="No favourite items"
            className="w-40 opacity-80"
          />
          <p className="mt-6 text-secondary text-lg font-semibold">
            Your favourites list is empty
          </p>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 min-[570px]:grid-cols-2 min-[855px]:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 mb-20">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};