import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";

import { getArticles } from "../../utils/coreAPI.js";
import { APIkey } from "../../utils/constants.js";

function App() {
  const searchArticles = (searchterm, APIkey) => {
    getArticles(searchterm, APIkey)
      .then((res) => {
        console.log(res);
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
            <Main />
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
