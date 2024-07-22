import "./Login.css";

const Login = () => {
  return (
    <div className="loginWrap">
      <h2>Login</h2>
      <form className="inputWrap">
        <input placeholder="username" />
        <input placeholder="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
