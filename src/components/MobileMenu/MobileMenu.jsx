import "./MobileMenu.css";
import logo from "../../assets/SSH_logo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logout from "../../assets/logout.png";
import logout_dark from "../../assets/logout-dark.png";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function MobileMenu({
  isMenuOpen,
  handleCloseMobileMenu,
  handleSignUpClick,
  handleLogInClick,
  handleLogOut,
  handleAddArticleClick,
  inProfile,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <div className={`mobile_menu ${isMenuOpen ? "mobile_menu_open" : ""}`}>
      <div className="mobile-menu__top">
        <img className="mobile-menu__logo" src={logo} alt="Logo" />
        <h1 className="mobile-menu__title">Scholar Search Hub</h1>
        <button
          className="mobile-menu__close-button"
          type="button"
          aria-label="close"
          onClick={handleCloseMobileMenu}
        />
      </div>
      <div className="mobile-menu__container">
        {isLoggedIn ? (
          <div className="mobile-menu__loggedin-info">
            <button
              className="mobile-menu__button"
              type="button"
              onClick={handleAddArticleClick}
            >
              + Add Article
            </button>
            {!inProfile ? (
              <div className="mobile-menu__links">
                <Link to="/" onClick={handleCloseMobileMenu}>
                  <p className="mobile-menu__loggedin-home">Home</p>{" "}
                </Link>
                <Link to="/profile" onClick={handleCloseMobileMenu}>
                  <p className="mobile-menu__loggedin-saved">Saved Articles</p>
                </Link>
              </div>
            ) : (
              <div className="mobile-menu__links">
                <Link to="/" onClick={handleCloseMobileMenu}>
                  <p className="mobile-menu__loggedin-home-profile">Home</p>{" "}
                </Link>
                <Link to="/profile" onClick={handleCloseMobileMenu}>
                  <p className="mobile-menu__loggedin-saved-profile">
                    Saved Articles
                  </p>
                </Link>
              </div>
            )}
            <button
              type="button"
              className="mobile-menu__button_transparent"
              onClick={handleLogOut}
            >
              {currentUser.name}{" "}
              <img src={logout} className="mobile-menu__button-image" />
            </button>
          </div>
        ) : (
          <div className="mobile-menu__login-container">
            <p className="mobile-menu__text">Home</p>
            <button
              className="mobile-menu__button"
              type="button"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
            <button
              className="mobile-menu__button"
              type="button"
              onClick={handleLogInClick}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
