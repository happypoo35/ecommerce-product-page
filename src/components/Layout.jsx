import Lightbox from "./Lightbox";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
      {/* <Lightbox /> */}
    </div>
  );
};

export default Layout;
