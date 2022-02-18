import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as CartIcon } from "images/icon-cart.svg";
import avatar from "images/image-avatar.png";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="main-header">
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
        <CartIcon className="icon-cart" />
      </button>
      <picture className="avatar">
        <img src={avatar} alt="avatar" className="avatar" />
      </picture>
      <Cart showCart={showCart} />
    </header>
  );
};

export default Header;
