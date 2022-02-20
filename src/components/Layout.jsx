const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container pad">{children}</div>
    </div>
  );
};

export default Layout;
