import "./Main.css";
import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function Main({ articles, totalArticles, serverError, isLoading }) {
  const logInfo = (info) => {
    console.log(info);
    console.log(serverError);
  };

  const mapArticles = (articles) => {
    console.log(articles);
    articles.map((item) => {
      console.log(item.title);
    });
  };

  return (
    <main className="main__container">
      {logInfo(articles)}
      <div>
        <h2>This is the Main section</h2>
      </div>
      {serverError ? (
        <p>
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      ) : isLoading === true ? (
        <Preloader />
      ) : (
        <section className="cards">
          <p className="cards__text">There are {totalArticles} articles.</p>
          <ul className="itemcards">
            {articles.length > 0 &&
              articles.map((item, index) => {
                console.log(item);
                return <ArticleCard key={index} item={item} />;
              })}
          </ul>
        </section>
      )}
    </main>
  );
}

export default Main;
