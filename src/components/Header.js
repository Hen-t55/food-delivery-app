import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="header">
      <h2>🍔 Smith's Restro</h2>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          🛒 Cart: {cartItems.length}
        </Link>
      </nav>
    </div>
  );
}

export default Header;