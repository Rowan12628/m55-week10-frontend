import "./Signup.css";

import { signup } from "../../../utils/fetch";

import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (event, setter) => {
    setter(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("submit handler signup");

    const data = await signup(username, email, password);
    console.log("data in signup: ", data);
  };

  return (
    <div className="signupWrap">
      <h2>Sign up</h2>
      <form className="inputWrap" onSubmit={submitHandler}>
        <input
          onChange={(event) => changeHandler(event, setUsername)}
          placeholder="username"
        />
        <input
          onChange={(event) => changeHandler(event, setEmail)}
          placeholder="email"
        />
        <input
          onChange={(event) => changeHandler(event, setPassword)}
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
