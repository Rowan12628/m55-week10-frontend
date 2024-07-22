import "./Signup.css";

const Signup = () => {
  return (
    <div className="signupWrap">
      <h2>Sign up</h2>
      <form className="inputWrap">
        <input placeholder="username" />
        <input placeholder="email" />
        <input placeholder="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
