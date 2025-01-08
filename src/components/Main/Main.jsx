import "./Main.css";
import { useState } from "react";
import React from "react";
import About from "../About/About.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function Main({
  searchedArticles,
  totalArticles,
  searchterm,
  serverError,
  isLoading,
  articleIndex,
  setArticleIndex,
  notFound,
  isLoggedIn,
  inProfile,
  addSavedArticle,
  confirmAction,
  recordAction,
}) {
  const logInfo = (info) => {
    console.log(info);
    console.log(inProfile);
  };

  const advanceArticleIndex = () => {
    setArticleIndex(articleIndex + 3);
  };

  return (
    <main className="main__container">
      {serverError ? (
        <p className="main__server-error-message">
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      ) : isLoading === true ? (
        <Preloader />
      ) : notFound ? (
        <p>There are no results found.</p>
      ) : searchedArticles.length > 0 ? (
        <section className="cards">
          <p className="cards__text">
            There are{" "}
            <span className="cards__text-articlecount">{totalArticles}</span>{" "}
            articles for{" "}
            <span className="cards__text-articlecount">{searchterm}.</span>{" "}
          </p>
          <ul className="itemcards">
            {searchedArticles.length > 0 &&
              searchedArticles
                .filter((item, index) => {
                  if (index < articleIndex) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <ArticleCard
                      key={index}
                      item={item}
                      isLoggedIn={isLoggedIn}
                      inProfile={inProfile}
                      addSavedArticle={addSavedArticle}
                      confirmAction={confirmAction}
                      recordAction={recordAction}
                    />
                  );
                })}
          </ul>
          <button
            className="cards__button-show-more"
            type="button"
            aria-label="more"
            id="card__show-more"
            onClick={advanceArticleIndex}
          >
            Show More
          </button>
        </section>
      ) : (
        <p></p>
      )}
    </main>
  );
}

export default Main;
