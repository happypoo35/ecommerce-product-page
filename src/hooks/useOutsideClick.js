import { useEffect } from "react";

const useOutsideClick = (ref, setter, exception) => {
  useEffect(() => {
    const close = (e) => {
      if (e.target.classList.contains(exception)) return;
      if (!ref.current.contains(e.target)) {
        setter(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  });
  return null;
};

export default useOutsideClick;
