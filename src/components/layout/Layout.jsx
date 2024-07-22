import "./Layout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import LogOrSign from "../logOrSign/LogOrSign/LogOrSign";
import ImageDisplay from "../imageDisplay/ImageDisplay";

const Layout = () => {
  return (
    <>
      <Header />
      <LogOrSign />
      <ImageDisplay />
      <Footer />
    </>
  );
};

export default Layout;
