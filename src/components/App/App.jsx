import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

import { getArticles, processArticles } from "../../utils/coreAPI.js";
import { APIkey } from "../../utils/constants.js";

function App() {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [serverError, setServerError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articleIndex, setArticleIndex] = useState(3);
  const [searchterm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    console.log("click");
    setActiveModal("login");
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    console.log("inside handle registration");
    // auth
    //   .register(email, password, name, avatar)
    //   .then(() => handleLogInClick())
    //   .catch(console.error);
  };

  const handleLogIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    // auth
    //   .authorize(email, password)
    //   .then((data) => {
    //     if (data.token) {
    //       localStorage.setItem("jwt", data.token);
    //       closeActiveModal();
    //       setIsLoggedIn(true);
    //     }
    //   })
    //   .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const searchArticles = (keyword, APIkey) => {
    setSearchTerm(keyword);
    setIsLoading(true);
    getArticles(keyword, APIkey)
      .then((res) => {
        console.log(res);
        if (res === 500) {
          console.log("server error");
          setIsLoading(false);
          setServerError(true);
        } else {
          setServerError(false);
          const articleResults = processArticles(res.results);
          setArticles(articleResults);
          if (res.totalHits > 0) {
            setTotalArticles(res.totalHits);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
          setIsLoading(false);
        }
      })
      .catch(console.error);
  };

  const handleSearchSubmit = (value) => {
    console.log(value);
    searchArticles(value, APIkey);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleModalClose = (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
      if (evt.target.classList.contains("modal__close-button")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleModalClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleModalClose);
    };
  }, [activeModal]);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__image_top">
            <Header
              handleSignUpClick={handleSignUpClick}
              handleLogInClick={handleLogInClick}
              isLoggedIn={isLoggedIn}
            />
            <SearchForm
              onSearchSubmit={handleSearchSubmit}
              articleIndex={articleIndex}
              setArticleIndex={setArticleIndex}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  articles={articles}
                  totalArticles={totalArticles}
                  searchterm={searchterm}
                  serverError={serverError}
                  notFound={notFound}
                  isLoading={isLoading}
                  articleIndex={articleIndex}
                  setArticleIndex={setArticleIndex}
                />
              }
            />
          </Routes>
          <About />
          <Footer />
          <RegisterModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            handleRegistration={handleRegistration}
            closeActiveModal={closeActiveModal}
            handleLogInClick={handleLogInClick}
          />
          <LoginModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            closeActiveModal={closeActiveModal}
            handleLogIn={handleLogIn}
            handleSignUpClick={handleSignUpClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
