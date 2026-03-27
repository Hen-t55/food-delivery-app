import FoodItem from "./FoodItem";

function FoodList({ foods = [], addToCart, getItemCount }) {
  return (
    <div className="menu">
      <h2>🍽️ Menu</h2>
      {foods.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          addToCart={addToCart}
          getItemCount={getItemCount}
        />
      ))}
    </div>
  );
}

export default FoodList;