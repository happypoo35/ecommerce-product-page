import { useEffect, useRef } from "react";

const Cart = ({ showCart, setShowCart }) => {
  const cartRef = useRef(null);

  useEffect(() => {
    const closeCart = (e) => {
      if (e.target.classList[0] === "btn-cart") return;
      if (!cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", closeCart);
    return () => {
      document.removeEventListener("mousedown", closeCart);
    };
  });

  return (
    <div className={showCart ? "cart active" : "cart"} ref={cartRef}>
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
