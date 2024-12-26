import "./Main.css";
import { useState } from "react";
import React from "react";

import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function Main({
  articles,
  totalArticles,
  searchterm,
  serverError,
  isLoading,
  articleIndex,
  setArticleIndex,
  notFound,
}) {
  const logInfo = (info) => {
    console.log(info);
    console.log(serverError);
  };

  const advanceArticleIndex = () => {
    setArticleIndex(articleIndex + 3);
  };

  return (
    <main className="main__container">
      <div>
        <h2>This is the Main section</h2>
      </div>
      {serverError ? (
        <p className="main__server-error-message">
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      ) : isLoading === true ? (
        <Preloader />
      ) : notFound ? (
        <p>There are no results found.</p>
      ) : articles.length > 0 ? (
        <section className="cards">
          <p className="cards__text">
            There are{" "}
            <span className="cards__text-articlecount">{totalArticles}</span>{" "}
            articles for{" "}
            <span className="cards__text-articlecount">{searchterm}.</span>{" "}
          </p>
          <ul className="itemcards">
            {articles.length > 0 &&
              articles
                .filter((item, index) => {
                  if (index < articleIndex) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return <ArticleCard key={index} item={item} />;
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
