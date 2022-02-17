import { useState } from "react";
import Gallery from "./Gallery";
import { ReactComponent as IconPlus } from "images/icon-plus.svg";
import { ReactComponent as IconMinus } from "images/icon-minus.svg";
import { ReactComponent as IconCart } from "images/icon-cart.svg";

import { selectProduct } from "features/shopSlice";
import { useSelector } from "react-redux";

const Product = () => {
  const [amount, setAmount] = useState(0);

  const product = useSelector(selectProduct);

  return (
    <main className="product">
      <Gallery />
      <section className="product-content" aria-label="Product content">
        <div className="product-desc">
          <h5>{product.brand}</h5>
          <h1>{product.name}</h1>
          <p>{product.text}</p>
        </div>
        <div className="product-price">
          <div className="discount">
            <h2>${(product.price * product.discount).toFixed(2)}</h2>
            <span className="badge">{product.discount * 100}%</span>
          </div>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>
        <div className="product-controls">
          <div className="amount-container">
            <button className="btn btn-amount">
              <IconMinus />
            </button>
            <span className="amount">{amount}</span>
            <button className="btn btn-amount">
              <IconPlus />
            </button>
          </div>
          <button className="btn btn-primary">
            <IconCart />
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Product;
