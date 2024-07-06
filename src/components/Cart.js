import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="font-bold  text-2xl p-4 m-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="text-white rounded-lg p-1 m-2  bg-slate-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cardItems.length === 0 ? (
          <h1 className="p-4 m-4 font-light">
            Cart is empty😥, Please add items to the cart!
          </h1>
        ) : (
          <ItemList items={cardItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
