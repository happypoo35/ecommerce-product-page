import { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as IconCart } from "images/icon-cart.svg";
import { ReactComponent as IconMenu } from "images/icon-menu.svg";
import { ReactComponent as IconClose } from "images/icon-close.svg";
import avatar from "images/image-avatar.png";
import Cart from "./Cart";

import { useSelector } from "react-redux";
import { selectCart } from "features/shopSlice";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);

  const cart = useSelector(selectCart);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!navRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return (
    <header className="main-header">
      <IconMenu className="icon-menu" onClick={() => setShowMenu(true)} />
      <Logo className="logo" />
      <div className={showMenu ? "menu menu-show" : "menu"}>
        <nav className="nav" ref={navRef}>
          <IconClose
            className="menu-close"
            onClick={() => setShowMenu(false)}
          />
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
      </div>
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
