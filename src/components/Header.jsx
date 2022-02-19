import { useState } from "react";
import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as IconCart } from "images/icon-cart.svg";
import { ReactComponent as IconMenu } from "images/icon-menu.svg";
import avatar from "images/image-avatar.png";
import Cart from "./Cart";

import { useSelector } from "react-redux";
import { selectCart } from "features/shopSlice";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector(selectCart);

  return (
    <header className="main-header">
      {/* <IconMenu className="icon-menu" /> */}
      <Logo className="logo" />
      <nav>
        {["Collections", "Men", "Women", "About", "Contact"].map((el, id) => (
          <a
            key={id}
            href=""
            className="nav-link"
            onClick={(e) => e.preventDefault()}
          >
            {el}
          </a>
        ))}
      </nav>
      <button className="btn-cart" onClick={() => setShowCart((p) => (p = !p))}>
        {cart && <div className="cart-badge">{cart.amount}</div>}
        <IconCart className="icon-cart" />
      </button>
      <picture className="avatar">
        <img src={avatar} alt="avatar" className="avatar" />
      </picture>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </header>
  );
};

export default Header;
