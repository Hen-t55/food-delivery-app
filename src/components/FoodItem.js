function FoodItem({ food, addToCart }) {
  return (
    <div className="food-item">
      <div>
        <h3>{food.name}</h3>
        <p>₹{food.price}</p>
      </div>
      <button className="add-btn" onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;