import { useEffect, useRef } from "react";
import { ReactComponent as IconClose } from "images/icon-close.svg";
import Gallery from "./Gallery";

const Lightbox = ({ lightbox, setLightbox }) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const closeLightbox = (e) => {
      if (!lightboxRef.current.contains(e.target)) {
        setLightbox(null);
      }
    };
    document.addEventListener("mousedown", closeLightbox);
    return () => {
      document.removeEventListener("mousedown", closeLightbox);
    };
  });

  return (
    <div className="lightbox">
      <div className="lightbox-content" ref={lightboxRef}>
        <IconClose className="icon-close" onClick={() => setLightbox(null)} />
        <Gallery currentSlide={lightbox} />
      </div>
    </div>
  );
};

export default Lightbox;
