import "./App.css";

import Layout from "./components/layout/Layout";
import Signup from "./components/logOrSign/signup/Signup";
import Login from "./components/logOrSign/login/Login";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogged, setUserLogged] = useState(null);

  const setLogSign = {
    isLoggedIn,
    setIsLoggedIn,
    userLogged,
    setUserLogged,
  };

  return (
    <>
      <Layout userLogged={userLogged}>
        <div className="logSignWrap">
          <Signup setLogSign={setLogSign} />
          <Login setLogSign={setLogSign} />
        </div>
      </Layout>
    </>
  );
}

export default App;
