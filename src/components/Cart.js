function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 && <p className="empty">Cart is empty</p>}
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <p>{item.name} - ₹{item.price}</p>
          <button className="remove-btn" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
      <h3 className="total">Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;