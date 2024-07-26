import "./Layout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import ImageDisplay from "../imageDisplay/ImageDisplay";

const Layout = ({ children, userLogged }) => {
  return (
    <div>
      <Header userLogged={userLogged} />
      {children}
      <ImageDisplay />
      <Footer />
    </div>
  );
};

export default Layout;
