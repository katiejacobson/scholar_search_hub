import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";

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

  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__image_top">
            <Header />
            <SearchForm
              onSearchSubmit={handleSearchSubmit}
              articleIndex={articleIndex}
              setArticleIndex={setArticleIndex}
            />
          </div>
          <div>
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
          </div>
          <div>
            <About />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
