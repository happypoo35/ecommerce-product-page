import { useState } from "react";
import { ReactComponent as IconPrev } from "images/icon-previous.svg";
import { ReactComponent as IconNext } from "images/icon-next.svg";

import { useSelector } from "react-redux";
import { selectProduct } from "features/shopSlice";

const Gallery = ({ currentSlide, isProduct, setLightbox }) => {
  const [slide, setSlide] = useState(currentSlide);

  const images = useSelector(selectProduct).images;

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  return (
    <section className="gallery" aria-label="Product gallery">
      <picture
        className={
          isProduct ? "gallery-img gallery-img-product" : "gallery-img"
        }
      >
        <img
          src={images[slide].img}
          alt="Product"
          onClick={() => isProduct && setLightbox(slide)}
        />
        {!isProduct && (
          <>
            <button className="btn-slide btn-slide-prev" onClick={prevSlide}>
              <IconPrev />
            </button>
            <button className="btn-slide btn-slide-next" onClick={nextSlide}>
              <IconNext />
            </button>
          </>
        )}
      </picture>
      <div className="gallery-thumbs">
        {images.map((el, id) => (
          <div
            key={id}
            className={id === slide ? "thumb active" : "thumb"}
            onClick={() => setSlide(id)}
          >
            <img src={el.thumb} alt="Thumbnail" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
