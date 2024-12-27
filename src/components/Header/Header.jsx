import "./Header.css";
import logo from "../../assets/SSH_logo.png";
import logout from "../../assets/logout.png";
import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Header({
  handleSignUpClick,
  handleLogInClick,
  handleLogOut,
  handleAddArticleClick,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <div className="header__container">
        <h1 className="header__title">Scholar Search Hub</h1>
        {isLoggedIn ? (
          <div className="header__loggedin-info">
            <button
              className="header__button"
              type="button"
              onClick={handleAddArticleClick}
            >
              + Add Article
            </button>
            <p className="header__loggedin-home">Home</p>
            <p className="header__loggedin-saved">Saved Articles</p>
            <button
              type="button"
              className="header__button_transparent"
              onClick={handleLogOut}
            >
              Katie <img src={logout} className="header__button-image" />
            </button>
          </div>
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
