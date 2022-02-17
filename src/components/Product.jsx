import { selectProduct } from "features/shopSlice";
import { useSelector } from "react-redux";
import Gallery from "./Gallery";

const Product = () => {
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
            <h2>{product.price}</h2>
            <span className="badge">{product.discount}</span>
          </div>
          <span className="price">{product.price}</span>
        </div>
      </section>
    </main>
  );
};

export default Product;
