import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 && <p className="empty">Cart is empty</p>}
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <p>{item.name} - ₹{item.price}</p>
          <button
            className="remove-btn"
            onClick={() => {
  alert(item.name + " removed from cart!");
  dispatch(removeFromCart(index));
}}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="total">Total: ₹{total}</h3>
    </div>
  );
}

export default CartPage;