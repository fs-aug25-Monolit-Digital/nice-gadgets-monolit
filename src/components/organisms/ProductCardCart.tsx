
import { useCartStore, type CartItem } from '../../stores/useCartStore';
import { CloseButton, MinusButton, PlusButton } from '../atoms/UtilityButton';


type ProductCardCartProps = {
  cartProduct: CartItem;
};

export const ProductCardCart: React.FC<ProductCardCartProps> = ({
  cartProduct,
}) => {

  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 border border-element">
      <div className="flex items-center justify-between gap-x-4 md:gap-x-6">
        <div className="flex items-center shrink-0 gap-x-4 md:gap-x-6">
          <CloseButton
            className="border-0"
            onClick={() => removeFromCart(cartProduct.id)}
          />
          <div className="h-[66px] flex items-center justify-center m-[7px]">
            <img
              src={cartProduct.image}
              alt={cartProduct.name}
              className="min-w-full h-full object-contain px-[7px]"
            />
          </div>
        </div>

        <h3 className="text-[14px] text-primary font-normal wrap-break-words md:pr-4">
          {cartProduct.name}
        </h3>
      </div>

      <div className="flex justify-between items-center mt-4 md:mt-0 md:gap-x-10">
        <div className="flex items-center">
          <MinusButton
            className="w-8 h-8"
            disabled={cartProduct.quantity <= 1} 
            onClick={() => decreaseQuantity(cartProduct.id)}
          />
          
          <span className="text-[14px] text-black font-normal mx-[13px] text-center w-4">
            {cartProduct.quantity} 
          </span>

          <PlusButton
            className="w-8 h-8"
            onClick={() => increaseQuantity(cartProduct.id)}
          />
        </div>

        <p className="text-[22px] text-primary font-extrabold">
          ${cartProduct.price * cartProduct.quantity} 
        </p>
      </div>
    </div>
  );
};