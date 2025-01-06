import "./Header.css";
import logo from "../../assets/SSH_logo.png";
import logout from "../../assets/logout.png";
import logout_dark from "../../assets/logout-dark.png";
import hamburger_icon from "../../assets/hamburger-icon.png";
import hamburger_icon_dark from "../../assets/hamburger-icon-dark.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";

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
  handleOpenMobileMenu,
  isMenuOpen,
  handleCloseMobileMenu,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const checkMobileMenu = () => {
    console.log("in checkMobileMenu");
    console.log(isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        {!inProfile ? (
          <div className="header__image-top">
            <div className="header__main-top">
              <img className="header__logo" src={logo} alt="Logo" />
              <div className="header__container">
                <h1 className="header__title">Scholar Search Hub</h1>
                {isLoggedIn ? (
                  <div>
                    <button className="header__button_mobile">
                      <img
                        src={hamburger_icon}
                        className="header__button_mobile-image"
                        onClick={handleOpenMobileMenu}
                      />
                    </button>
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
                        {currentUser.name}{" "}
                        <img src={logout} className="header__button-image" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="header__login-container">
                    <button className="header__button_mobile">
                      <img
                        src={hamburger_icon}
                        className="header__button_mobile-image"
                        onClick={handleOpenMobileMenu}
                      />
                    </button>
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
            </div>
            <SearchForm
              onSearchSubmit={handleSearchSubmit}
              articleIndex={articleIndex}
              setArticleIndex={setArticleIndex}
            />
          </div>
        ) : (
          <div className="header__profile-top">
            <div className="header__profile">
              <img className="header__logo" src={logo} alt="Logo" />
              <div className="header__container">
                <h1 className="header__title-profile">Scholar Search Hub</h1>
                <button className="header__button_mobile">
                  <img
                    src={hamburger_icon_dark}
                    className="header__button_mobile-image"
                    onClick={handleOpenMobileMenu}
                  />
                </button>
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
            </div>
          </div>
        )}
      </header>
      {isMenuOpen && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          handleCloseMobileMenu={handleCloseMobileMenu}
          handleSignUpClick={handleSignUpClick}
          handleLogInClick={handleLogInClick}
          handleLogOut={handleLogOut}
          handleAddArticleClick={handleAddArticleClick}
          inProfile={inProfile}
        />
      )}
    </div>
  );
}

export default Header;
