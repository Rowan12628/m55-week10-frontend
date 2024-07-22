import "./Layout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Signup from "../logOrSign/signup/Signup";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Signup />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
