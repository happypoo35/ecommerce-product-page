import { useEffect, useRef } from "react";
import { ReactComponent as IconDelete } from "images/icon-delete.svg";

import { useDispatch, useSelector } from "react-redux";
import { clear, selectCart } from "features/shopSlice";

const Cart = ({ showCart, setShowCart }) => {
  const cartRef = useRef(null);

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

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
      <div
        className={cart ? "cart-content" : "cart-content cart-content-empty"}
      >
        {cart ? (
          <>
            <div className="cart-item">
              <img src={cart.img} alt="thumbnail" />
              <div className="cart-item-content">
                <p>{cart.name}</p>
                <p>
                  ${cart.price.toFixed(2)} x {cart.amount}{" "}
                  <b>${(cart.price * cart.amount).toFixed(2)}</b>
                </p>
              </div>
              <button className="btn-delete" onClick={() => dispatch(clear())}>
                <IconDelete />
              </button>
            </div>
            <button className="btn btn-primary">Checkout</button>
          </>
        ) : (
          <span>Your cart is empty.</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
