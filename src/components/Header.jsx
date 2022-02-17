import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as CartIcon } from "images/icon-cart.svg";
import avatar from "images/image-avatar.png";

const Header = () => {
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
      <CartIcon className="icon-cart" />
      <picture className="avatar">
        <img src={avatar} alt="avatar" className="avatar" />
      </picture>
    </header>
  );
};

export default Header;
