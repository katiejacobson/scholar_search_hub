import "./Header.css";
import logo from "../../assets/SSH_logo.png";
import logout from "../../assets/logout.png";
import logout_dark from "../../assets/logout-dark.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Header({
  handleSignUpClick,
  handleLogInClick,
  handleLogOut,
  handleAddArticleClick,
  handleSearchSubmit,
  articleIndex,
  setArticleIndex,
  inProfile,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <div>
      {!inProfile ? (
        <div className="header__image-top">
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
                  <Link to="/">
                    <p className="header__loggedin-home">Home</p>{" "}
                  </Link>
                  <Link to="/profile">
                    <p className="header__loggedin-saved">Saved Articles</p>
                  </Link>
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
          <SearchForm
            onSearchSubmit={handleSearchSubmit}
            articleIndex={articleIndex}
            setArticleIndex={setArticleIndex}
          />
        </div>
      ) : (
        <div className="header__profile-top">
          <header className="header__profile">
            <img className="header__logo" src={logo} alt="Logo" />
            <div className="header__container">
              <h1 className="header__title-profile">Scholar Search Hub</h1>
              <div className="header__loggedin-info-profile">
                <button
                  className="header__button-profile"
                  type="button"
                  onClick={handleAddArticleClick}
                >
                  + Add Article
                </button>
                <Link to="/">
                  <p className="header__loggedin-home-profile">Home</p>{" "}
                </Link>
                <Link to="/profile">
                  <p className="header__loggedin-saved-profile">
                    Saved Articles
                  </p>
                </Link>
                <button
                  type="button"
                  className="header__button_transparent-profile"
                  onClick={handleLogOut}
                >
                  Katie{" "}
                  <img src={logout_dark} className="header__button-image" />
                </button>
              </div>
            </div>
          </header>
        </div>
      )}
    </div>
  );
}

export default Header;
