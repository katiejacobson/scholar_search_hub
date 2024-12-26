import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearchSubmit, articleIndex, setArticleIndex }) {
  let searchterm;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(keyword.value);
    keyword.value = "";
    setArticleIndex(3);
  };

  return (
    <div className="searchform__container">
      <h2 className="searchform__description">
        Open Access journal articles to help you with your research
      </h2>
      <p className="searchform__instructions">
        Find your next article to read and save it to your account
      </p>
      <form className="searchform__form" onSubmit={handleSubmit}>
        <input
          className="searchform__input"
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Enter keyword"
        />
        <button
          className="searchform__button"
          type="submit"
          aria-label="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
