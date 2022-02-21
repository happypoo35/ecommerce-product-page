import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Lightbox from "./Lightbox";
import { ReactComponent as IconPlus } from "images/icon-plus.svg";
import { ReactComponent as IconMinus } from "images/icon-minus.svg";
import { ReactComponent as IconCart } from "images/icon-cart.svg";

import { add, selectProduct } from "features/shopSlice";
import { useSelector, useDispatch } from "react-redux";
import useWindowSize from "hooks/useWindowSize";

const Product = () => {
  const [amount, setAmount] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const { mobile } = useWindowSize();

  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const price = product.price * product.discount;

  const addToCart = () => {
    if (!amount) return;
    dispatch(
      add({
        id: product.id,
        name: product.name,
        img: product.images[0].thumb,
        price,
        amount,
      })
    );
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setAmount(0);
  };

  useEffect(() => {
    mobile && setLightbox(false);
  }, [mobile]);

  return (
    <main className="product">
      <Gallery currentSlide={0} isProduct setLightbox={setLightbox} />
      <section className="product-content" aria-label="Product content">
        <div className="product-desc">
          <h5>{product.brand}</h5>
          <h1>{product.name}</h1>
          <p>{product.text}</p>
        </div>
        <div className="product-price">
          <div className="discount">
            <h2>${price.toFixed(2)}</h2>
            <span className="badge">{product.discount * 100}%</span>
          </div>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>
        <div className="product-controls">
          <div className="amount-container">
            <button
              className="btn btn-amount"
              onClick={() => amount > 0 && setAmount((p) => p - 1)}
            >
              <IconMinus />
            </button>
            <span className="amount">{amount}</span>
            <button
              className="btn btn-amount"
              onClick={() => setAmount((p) => p + 1)}
            >
              <IconPlus />
            </button>
          </div>
          <button className="btn btn-primary shadow" onClick={addToCart}>
            <IconCart />
            Add to cart
          </button>
        </div>
      </section>
      {lightbox !== false && (
        <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
      )}
    </main>
  );
};

export default Product;
