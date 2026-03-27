import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import FoodList from "../components/FoodList";

const foods = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 150 },
  { id: 3, name: "Pasta", price: 200 },
  { id: 4, name: "Sandwich", price: 100 },
];

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  function handleAddToCart(food) {
    dispatch(addToCart(food));
    setNotification(`${food.name} added to cart! ✅`);
  }

  function getItemCount(foodId) {
    return cartItems.filter((item) => item.id === foodId).length;
  }

  return (
    <div>
      {notification && <div className="notification">{notification}</div>}
      <FoodList foods={foods} addToCart={handleAddToCart} getItemCount={getItemCount} />
    </div>
  );
}

export default Home;