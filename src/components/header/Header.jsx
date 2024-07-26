import "./Header.css";

const Header = ({ userLogged }) => {
  return (
    <>
      <header className="headerWrap">
        <h2>Instaclone</h2>
        {!userLogged ? (
          <p>Login or Signup!</p>
        ) : (
          <p>Hello, {userLogged.username} </p>
        )}
      </header>
    </>
  );
};

export default Header;
