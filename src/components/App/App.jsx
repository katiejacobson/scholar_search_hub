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
import AddArticleModal from "../AddArticleModal/AddArticleModal.jsx";
import Profile from "../Profile/Profile.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";

import { getArticles, processArticles } from "../../utils/coreAPI.js";
import { APIkey } from "../../utils/constants.js";
import {
  register,
  authorize,
  checkToken,
  getUserInfo,
} from "../../utils/auth.js";

import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/api.js";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const navigate = useNavigate();
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [serverError, setServerError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articleIndex, setArticleIndex] = useState(3);
  const [searchterm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [actionDone, setActionDone] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    id: "",
  });
  const [savedArticles, setSavedArticles] = useState([]);
  const [inProfile, setInProfile] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    setActiveModal("login");
  };

  const handleAddArticleClick = () => {
    setActiveModal("add-article");
  };

  const handleOpenMobileMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    setActiveModal("mobile-menu");
  };

  const handleCloseMobileMenu = () => {
    closeActiveModal();
    setIsMenuOpen(false);
  };

  const confirmAction = () => {
    setActiveModal("confirmation");
  };

  const recordAction = (action) => {
    setActionDone(action);
  };

  const handleRegistration = ({ email, password, name }) => {
    console.log("inside handle registration");
    register(email, password, name)
      .then(() => handleLogInClick())
      .catch(console.error);
    setIsMenuOpen(false);
  };

  const handleLogIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          closeActiveModal();
          setIsLoggedIn(true);
        }
      })
      .catch(console.error);
    setIsMenuOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({
      name: "",
      id: "",
    });
    setSearchedArticles([]);
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleAddArticleSubmit = (e, values) => {
    // addItems(values)
    //   .then((res) => {
    //     setSavedArticles([res, ...savedArticles]);
    //     closeActiveModal();
    //   })
    //   .catch(console.error);
    saveArticle(values)
      .then((res) => {
        setSavedArticles([res, ...savedArticles]);
        recordAction("Article Added");
        closeActiveModal();
        confirmAction();
      })
      .catch(console.error);
    setIsMenuOpen(false);
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
          setSearchedArticles(articleResults);
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

  const addSavedArticle = (article) => {
    saveArticle(article)
      .then((res) => {
        setSavedArticles([res, ...savedArticles]);
      })
      .catch(console.error);
  };

  const deleteSavedArticle = (id) => {
    // deleteArticle(id).then((res) => {setSavedArticles([res, ...savedArticles]);
    // })
    // .catch(console.error);
    const updatedArticles = savedArticles.filter(
      (article) => article.id !== id
    );
    setSavedArticles(updatedArticles);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
        setIsMenuOpen(false);
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

  useEffect(() => {
    getSavedArticles()
      .then((res) => {
        setSavedArticles(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({
          name: data.user.name,
          id: data.user.id,
        });
        navigate("/");
      })
      .catch(console.error);
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
      }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleSignUpClick={handleSignUpClick}
            handleLogInClick={handleLogInClick}
            handleLogOut={handleLogOut}
            handleAddArticleClick={handleAddArticleClick}
            handleSearchSubmit={handleSearchSubmit}
            articleIndex={articleIndex}
            setArticleIndex={setArticleIndex}
            inProfile={inProfile}
            activeModal={activeModal}
            handleOpenMobileMenu={handleOpenMobileMenu}
            handleCloseMobileMenu={handleCloseMobileMenu}
            isMenuOpen={isMenuOpen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  searchedArticles={searchedArticles}
                  totalArticles={totalArticles}
                  searchterm={searchterm}
                  serverError={serverError}
                  notFound={notFound}
                  isLoading={isLoading}
                  articleIndex={articleIndex}
                  setArticleIndex={setArticleIndex}
                  isLoggedIn={isLoggedIn}
                  inProfile={inProfile}
                  addSavedArticle={addSavedArticle}
                  confirmAction={confirmAction}
                  recordAction={recordAction}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  savedArticles={savedArticles}
                  setInProfile={setInProfile}
                  inProfile={inProfile}
                  addSavedArticle={addSavedArticle}
                  deleteSavedArticle={deleteSavedArticle}
                  confirmAction={confirmAction}
                  recordAction={recordAction}
                />
              }
            />
          </Routes>
          <About inProfile={inProfile} />
          <Footer />
          <RegisterModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            handleRegistration={handleRegistration}
            handleLogInClick={handleLogInClick}
          />
          <LoginModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            handleLogIn={handleLogIn}
            handleSignUpClick={handleSignUpClick}
          />
          <AddArticleModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            onAddArticle={handleAddArticleSubmit}
            closeActiveModal={closeActiveModal}
          />
          <ConfirmationModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            name={"confirmation"}
            isOpen={activeModal === "confirmation"}
            text={actionDone}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
