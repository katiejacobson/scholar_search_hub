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
  const [isLoading, setIsLoading] = useState(false);

  const searchArticles = (searchterm, APIkey) => {
    setIsLoading(true);
    getArticles(searchterm, APIkey)
      .then((res) => {
        console.log(res);
        if (res == 500) {
          console.log("server error");
          setIsLoading(false);
          setServerError(true);
        } else {
          setServerError(false);
          const articleResults = processArticles(res.results);
          setArticles(articleResults);
          setTotalArticles(res.totalHits);
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
            <SearchForm onSearchSubmit={handleSearchSubmit} />
          </div>
          <div>
            <Main
              articles={articles}
              totalArticles={totalArticles}
              serverError={serverError}
              isLoading={isLoading}
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
