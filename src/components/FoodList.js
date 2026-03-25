import FoodItem from "./FoodItem";

function FoodList({ foods = [], addToCart }) {
  return (
    <div className="menu">
      <h2>🍽️ Menu</h2>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default FoodList;