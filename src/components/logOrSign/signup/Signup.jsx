import "./Signup.css";

const Signup = () => {
  return (
    <div className="signupWrap">
      <form>
        <input placeholder="username" />
        <input placeholder="email" />
        <input placeholder="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
