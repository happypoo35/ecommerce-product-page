import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "features/shopSlice";

const Gallery = () => {
  const [slide, setSlide] = useState(0);

  const images = useSelector(selectProduct).images;

  return (
    <section className="gallery" aria-label="Product gallery">
      <picture className="gallery-img">
        <img src={images[slide].img} alt="Product image" />
      </picture>
      <div className="gallery-thumbs">
        {images.map((el) => (
          <div
            key={el.id}
            className={el.id === slide + 1 ? "thumb active" : "thumb"}
          >
            <img src={el.thumb} alt="Image thumb" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
