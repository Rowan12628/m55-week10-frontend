import "./Signup.css";

import { signup } from "../../../utils/fetch";

import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const changeHandler = (event, setter, state) => {
  //     setter(event.target.value);
  //     console.log(state);
  //   };

  const submitHandler = async (event, username, email, password) => {
    event.preventDefault();
    console.log("submit handler");

    await signup({ username, email, password });
  };

  return (
    <div className="signupWrap">
      <h2>Sign up</h2>
      <form
        className="inputWrap"
        onSubmit={(event) => submitHandler(event, username, email, password)}
      >
        <input
          //   onChange={(event) => changeHandler(event, username, setUsername)}
          placeholder="username"
        />
        <input placeholder="email" />
        <input placeholder="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
