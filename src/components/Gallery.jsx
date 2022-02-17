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
        {images.map((el, id) => (
          <div
            key={id}
            className={id === slide ? "thumb active" : "thumb"}
            onClick={() => setSlide(id)}
          >
            <img src={el.thumb} alt="Image thumb" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
