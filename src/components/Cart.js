import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center p-4 m-3">
      <h1 className="text-3xl font-bold  ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-4 bg-gray-200 text-black rounded-lg cursor-pointer hover:bg-gray-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cardItems.length === 0 && (
          <h1 className="m-2 p-2 text-lg font-bold">
            Your Cart is empty! Please add some items.
          </h1>
        )}
        <ItemList items={cardItems} />
      </div>
    </div>
  );
};

export default Cart;
