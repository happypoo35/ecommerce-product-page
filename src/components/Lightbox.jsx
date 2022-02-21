import { useRef } from "react";
import { ReactComponent as IconClose } from "images/icon-close.svg";
import Gallery from "./Gallery";
import useOutsideClick from "hooks/useOutsideClick";

const Lightbox = ({ lightbox, setLightbox }) => {
  const lightboxRef = useRef(null);

  useOutsideClick(lightboxRef, setLightbox);

  return (
    <div className="lightbox">
      <div className="lightbox-content" ref={lightboxRef}>
        <IconClose className="icon-close" onClick={() => setLightbox(false)} />
        <Gallery currentSlide={lightbox} />
      </div>
    </div>
  );
};

export default Lightbox;
