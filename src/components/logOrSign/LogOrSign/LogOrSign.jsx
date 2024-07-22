import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logSignWrap">
      <Signup />
      <Login />
    </div>
  );
};

export default LogOrSign;
