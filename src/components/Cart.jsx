const Cart = ({ showCart }) => {
  return (
    <div className={showCart ? "cart active" : "cart"}>
      <header className="cart-header">
        <h4>Cart</h4>
      </header>
      <div className="cart-content cart-content-empty">
        <span>Your cart is empty.</span>
      </div>
    </div>
  );
};

export default Cart;
