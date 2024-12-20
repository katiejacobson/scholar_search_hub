import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__image_top">
            <Header />
            <SearchForm />
          </div>
          <div>{/* ArticleSection */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
