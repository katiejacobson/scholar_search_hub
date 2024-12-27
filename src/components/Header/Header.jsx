import "./Header.css";
import logo from "../../assets/SSH_logo.png";

function Header({ handleSignUpClick, handleLogInClick, isLoggedIn }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <div className="header__container">
        <h1 className="header__title">Scholar Search Hub</h1>
        {isLoggedIn ? (
          <p></p>
        ) : (
          <div className="header__button-container">
            <button
              className="header__button"
              type="button"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
            <button
              className="header__button"
              type="button"
              onClick={handleLogInClick}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
