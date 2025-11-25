import { useCartStore } from "../../stores/useCartStore";
import { CartPageTemplate } from "../templates/CartPageTemplate/CartPageTemplate";
import { useProducts } from "../../hooks/useProduct";
import { getProducts } from "../../utilities/fetchApi";
import { ErrorComponent } from "../organisms/ErrorComponent";

export const CartPage = () => {
  const { isLoading, hasError } = useProducts(getProducts);
  const cart = useCartStore((state) => state.cart);

  if (hasError) {
      return <ErrorComponent />
    }

  return (
    <CartPageTemplate
      cartProducts={cart} 
      isLoading={isLoading} 
    />
  );
};